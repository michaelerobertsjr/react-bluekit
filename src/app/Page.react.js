import '../helpers/BluekitEvent';
import Content from './Content.react';
import FontBold from './styles/FontBold';
import MediaQuery from 'react-responsive';
import Radium, {StyleRoot} from 'radium';
import React, {Component, PropTypes as RPT} from 'react';
import ResponsiveNav from './ResponsiveNav.react';
import Sidebar from './Sidebar.react';
import StateProvider from './StateProvider.react';
import {FontStyle} from './styles/Font';

if (typeof window !== 'undefined') {
  require('brace');
  require('brace/ext/language_tools');
  require('brace/mode/jsx');
  require('brace/mode/html');
  require('brace/mode/javascript');
  require('brace/theme/chrome');
}

@StateProvider
@Radium
export default class Page extends Component {

  static propTypes = {
    componentsIndex: RPT.object.isRequired,
    customProps: RPT.object,
    filteredComponentsIndex: RPT.object.isRequired,
    height: RPT.string,
    inline: RPT.bool,
    mountPoint: RPT.string,
    searchedText: RPT.string,
    selectedAtom: RPT.string,
    simplePropsSelected: RPT.bool,
    sourceBackground: RPT.string,
    triggeredProps: RPT.object
  }

  static contextTypes = {
    resetLocalStorage: RPT.func.isRequired,
    resetPropsToDefault: RPT.func.isRequired,
    selectAtom: RPT.func.isRequired,
    searchAtoms: RPT.func.isRequired,
    showMobileSidebar: RPT.bool.isRequired,
    toggleProps: RPT.func.isRequired,
    toggleSidebar: RPT.func.isRequired
  }

  static defaultProps = {
    height: '500px',
    inline: false
  }

  render() {
    const {
      componentsIndex, customProps, simplePropsSelected, filteredComponentsIndex, sourceBackground,
      height, inline, selectedAtom, searchedText, triggeredProps
    } = this.props
    const {selectAtom, searchAtoms, showMobileSidebar, toggleSidebar} = this.context

    return (
      <StyleRoot>
        <div style={[styles.wrapper.base, inline ? {height: height} : styles.wrapper.full]}>
          <MediaQuery maxWidth={929}>
            <ResponsiveNav selectedAtom={selectedAtom} />
            <div style={[styles.overlay, showMobileSidebar && styles.overlay.active]} />
          </MediaQuery>
          <Sidebar
            componentsIndex={filteredComponentsIndex}
            searchAtoms={searchAtoms}
            searchedText={searchedText}
            selectAtom={selectAtom}
            selectedAtom={selectedAtom}
            showMobileSidebar={showMobileSidebar}
            toggleSidebar={toggleSidebar}
          />
          <Content
            componentsIndex={componentsIndex}
            customProps={customProps}
            filteredComponentsIndex={filteredComponentsIndex}
            selectAtom={selectAtom}
            selectedAtom={selectedAtom}
            simplePropsSelected={simplePropsSelected}
            sourceBackground={sourceBackground}
            triggeredProps={triggeredProps}
          />
        </div>
        <FontStyle />
        <FontBold />
      </StyleRoot>
    );
  }

}

const styles = {
  wrapper: {
    base: {
      background: 'white',
      width: '100%'
    },
    full: {
      position: 'fixed',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }
  },

  overlay: {
    backgroundColor: 'rgba(0, 0, 0, .4)',
    position: 'fixed',
    top: 0,
    left: 0,
    right: '100%',
    bottom: 0,
    zIndex: 9,
    transition: 'right .2s ease-out',
    active: {
      right: 0
    }
  }
};
