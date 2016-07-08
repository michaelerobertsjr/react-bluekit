import AllComponentsPreview from './AllComponentsPreview.react';
import Component from 'react-pure-render/component';
import ComponentPage from './component/Page.react';
import {mediaQueries} from './styles/mediaQueries';
import Radium from 'radium';
import React, {PropTypes as RPT} from 'react';

@Radium
export default class Content extends Component {

  static propTypes = {
    componentsIndex: RPT.object.isRequired,
    customProps: RPT.object,
    filteredComponentsIndex: RPT.object.isRequired,
    selectAtom: RPT.func.isRequired,
    selectedAtom: RPT.string,
    simplePropsSelected: RPT.bool,
    sourceBackground: RPT.string,
    triggeredProps: RPT.object
  }

  renderAtom() {
    const {componentsIndex, customProps, selectedAtom, simplePropsSelected, sourceBackground, triggeredProps, selectAtom} = this.props

    return (
      <ComponentPage
        componentsIndex={componentsIndex}
        customProps={customProps}
        selectAtom={selectAtom}
        selectedAtom={selectedAtom}
        simplePropsSelected={simplePropsSelected}
        sourceBackground={sourceBackground}
        triggeredProps={triggeredProps}
      />
    );
  }

  renderList() {
    const {filteredComponentsIndex, selectAtom, selectedAtom} = this.props

    return (
      <div style={[styles.list]}>
        <AllComponentsPreview
          componentsIndex={filteredComponentsIndex}
          selectAtom={selectAtom}
          selectedAtom={selectedAtom}
        />
      </div>
    );
  }

  render() {
    const {selectedAtom} = this.props

    return (
      <div style={styles.content}>
        {selectedAtom ? this.renderAtom() : this.renderList()}
      </div>
    );
  }

}

const styles = {
  content: {
    width: '80%',
    height: '100%',
    display: 'inline-block',
    position: 'relative',
    verticalAlign: 'top',
    [mediaQueries.breakpointLarge]: {
      width: '100%'
    }
  },

  list: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    overflowY: 'auto'
  }
};
