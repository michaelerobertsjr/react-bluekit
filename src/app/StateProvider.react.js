import React, {Component, PropTypes as RPT} from 'react';
import {filter as fuzzyFilter} from 'fuzzy';
import {fromJS, Map, List} from 'immutable';
import {HIGHLIGHT, HIGHLIGHT_BACKGROUND} from './styles/Colors';

export default function StateProvider(Wrapped) {

  return class StateProvider extends Component {

    static propTypes = {
      componentsIndex: RPT.object.isRequired
    }

    static childContextTypes = {
      createSetAtomProp: RPT.func,
      resetPropsToDefault: RPT.func,
      resetLocalStorage: RPT.func,
      selectAtom: RPT.func,
      searchAtoms: RPT.func,
      setAtomProp: RPT.func,
      setSourceBackground: RPT.func,
      showMobileSidebar: RPT.bool,
      showSourceCode: RPT.bool,
      toggleSidebar: RPT.func,
      toggleSourceCode: RPT.func,
      toggleProps: RPT.func
    }

    getChildContext() {
      return {
        createSetAtomProp: this.createSetAtomProp.bind(this),
        resetPropsToDefault: this.resetPropsToDefault.bind(this),
        resetLocalStorage: this.resetLocalStorage.bind(this),
        selectAtom: this.selectAtom.bind(this),
        searchAtoms: this.searchAtoms.bind(this),
        setAtomProp: this.setAtomProp.bind(this),
        setSourceBackground: this.setSourceBackground.bind(this),
        showMobileSidebar: this.state.showMobileSidebar,
        showSourceCode: this.state.showSourceCode,
        toggleSidebar: this.toggleSidebar.bind(this),
        toggleSourceCode: this.toggleSourceCode.bind(this),
        toggleProps: this.toggleProps.bind(this)
      }
    }

    state = {
      customProps: Map(),
      selectedAtom: null,
      searchedText: '',
      simplePropsSelected: true,
      showMobileSidebar: false,
      showSourceCode: false,
      sourceBackground: '#ffffff',
      triggeredProps: new List()
    }

    render() {
      const {componentsIndex} = this.props

      return <Wrapped {...this.state} {...this.props} componentsIndex={fromJS(componentsIndex)} filteredComponentsIndex={fromJS(this.filterComponentsIndex())} />
    }

    componentWillMount() {
      this.loadStateFromLocalStorage()
    }

    componentDidMount() {
      document.addEventListener('functionTriggered', this.propFunctionTriggered.bind(this))
    }

    componentWillUnmount() {
      document.removeEventListener('functionTriggered', this.propFunctionTriggered.bind(this))
    }

    propFunctionTriggered({detail: {prop}}) {
      const {triggeredProps} = this.state
      this.setState({
        triggeredProps: triggeredProps.push(prop)
      })
      setTimeout(this.cleanupTriggeredProp.bind(this), 1000)
    }

    cleanupTriggeredProp() {
      const {triggeredProps} = this.state
      this.setState({
        triggeredProps: triggeredProps.shift()
      })
    }

    createSetAtomProp(key, type, scope = []) {
      return event => {
        let value = event

        // Get value from event
        if (event.target && event.target.value !== undefined)
          value = event.target.value

        // Get value from {name, value} event
        else if (event.value !== undefined)
          value = event.value

        // fix string to valid type
        if (type === 'bool' && typeof value !== 'boolean')
          value = event.target.checked
        else if (type === 'number')
          value = parseInt(value, 10)
        this.setAtomProp(key, value, scope)
      }
    }

    setAtomProp(key, value, scope = []) {
      const {selectedAtom, customProps} = this.state

      if (!selectedAtom) return false

      const newCustomProps = customProps.setIn([selectedAtom].concat(scope).concat(key), value)

      this.setState({customProps: newCustomProps})
      this.storeStateToLocalStorage('customProps', newCustomProps)
    }

    toggleProps() {
      const {simplePropsSelected} = this.state

      this.setState({simplePropsSelected: !simplePropsSelected})
      this.storeStateToLocalStorage('simplePropsSelected', !simplePropsSelected)
    }

    toggleSidebar() {
      const {showMobileSidebar} = this.state

      this.setState({showMobileSidebar: !showMobileSidebar})
      this.storeStateToLocalStorage('showMobileSidebar', !showMobileSidebar)
    }

    toggleSourceCode() {
      const {showSourceCode} = this.state

      this.setState({showSourceCode: !showSourceCode})
      this.storeStateToLocalStorage('showSourceCode', !showSourceCode)
    }

    resetPropsToDefault() {
      const {customProps, selectedAtom} = this.state

      const newCustomProps = customProps.set(selectedAtom, Map())
      this.setState({
        customProps: newCustomProps,
        sourceBackground: '#ffffff'
      })
      this.storeStateToLocalStorage('customProps', newCustomProps)
      this.storeStateToLocalStorage('sourceBackground', '#ffffff')
    }

    selectAtom(selectedAtom) {
      this.setState({selectedAtom})
      this.storeStateToLocalStorage('selectedAtom', selectedAtom)
    }

    searchAtoms(searchedText) {
      this.setState({searchedText})
      this.storeStateToLocalStorage('searchedText', searchedText)
    }

    filterComponentsIndex() {
      const {componentsIndex} = this.props
      const {searchedText} = this.state
      const options = {pre: `<bstyle="color:${HIGHLIGHT};background:${HIGHLIGHT_BACKGROUND}">`, post: '</b>'}
      if (`${searchedText}`.length > 0)
        return fuzzyFilter(searchedText.toLowerCase(), Object.keys(componentsIndex))
          .reduce((acc, key) => ({...acc, [key.original]: {...componentsIndex[key.original], highlightedMenu: fuzzyFilter(searchedText.toLowerCase(), [componentsIndex[key.original].menu], options)[0].string}}), {})
      return componentsIndex
    }

    setSourceBackground(color) {
      this.setState({sourceBackground: color})
      this.storeStateToLocalStorage('sourceBackground', color)
    }

    hasLocalStorage() {
      return typeof Storage !== 'undefined'
    }

    storeStateToLocalStorage(kind, value) {
      if (!this.hasLocalStorage())
        return

      switch (kind) {
        case 'customProps': return localStorage.setItem('bluekitCustomProps', JSON.stringify(value))
        case 'selectedAtom': return localStorage.setItem('bluekitSelectedAtom', value)
        case 'searchedText': return localStorage.setItem('bluekitSearchedText', value)
        case 'simplePropsSelected': return localStorage.setItem('bluekitSimplePropsSelected', JSON.stringify(value))
        case 'showMobileSidebar': return localStorage.setItem('bluekitShowMobileSidebar', JSON.stringify(value))
        case 'showSourceCode': return localStorage.setItem('bluekitShowSourceCode', JSON.stringify(value))
        case 'sourceBackground': return localStorage.setItem('bluekitSourceBackground', value)
      }
    }

    loadStateFromLocalStorage() {
      if (!this.hasLocalStorage())
        return

      const storedCustomProps = localStorage.getItem('bluekitCustomProps')
      const storedSimplePropsSelected = localStorage.getItem('bluekitSimplePropsSelected')
      const storedShowMobileSidebar = localStorage.getItem('bluekitShowMobileSidebar')
      const storedShowSourceCode = localStorage.getItem('bluekitShowSourceCode')

      const customProps = storedCustomProps ? JSON.parse(storedCustomProps) : this.state.customProps
      const selectedAtom = localStorage.getItem('bluekitSelectedAtom') || this.state.selectedAtom
      const searchedText = localStorage.getItem('bluekitSearchedText') || this.state.searchedText
      const simplePropsSelected = storedSimplePropsSelected ? JSON.parse(storedSimplePropsSelected) : this.state.simplePropsSelected
      const showMobileSidebar = storedShowMobileSidebar ? JSON.parse(storedShowMobileSidebar) : this.state.showMobileSidebar
      const showSourceCode = storedShowSourceCode ? JSON.parse(storedShowSourceCode) : this.state.showSourceCode
      const sourceBackground = localStorage.getItem('bluekitSourceBackground') || this.state.sourceBackground

      this.setState({
        customProps: fromJS(customProps),
        selectedAtom,
        searchedText,
        simplePropsSelected: fromJS(simplePropsSelected),
        showMobileSidebar: fromJS(showMobileSidebar),
        showSourceCode: fromJS(showSourceCode),
        sourceBackground
      })
    }

    resetLocalStorage() {
      if (!this.hasLocalStorage())
        return

      localStorage.removeItem('bluekitCustomProps')
      localStorage.removeItem('bluekitSelectedAtom')
      localStorage.removeItem('bluekitSearchedText')
      localStorage.removeItem('bluekitSimplePropsSelected')
      localStorage.removeItem('bluekitShowMobileSidebar')
      localStorage.removeItem('bluekitShowSourceCode')
      localStorage.removeItem('bluekitSourceBackground')
      // refresh page after reset
      window.location = window.location.pathname.replace(/#.*/, '')
    }
  }
}
