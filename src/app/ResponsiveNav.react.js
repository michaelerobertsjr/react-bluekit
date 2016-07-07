import Component from 'react-pure-render/component';
import Radium from 'radium';
import React, {PropTypes as RPT} from 'react';

@Radium
export default class ResponsiveNav extends Component {

  static propTypes = {
    selectedAtom: RPT.string
  }

  static contextTypes = {
    toggleSidebar: RPT.func
  }

  render() {
    const {toggleSidebar} = this.context

    return (
      <div style={styles.wrapper}>
        <button onClick={toggleSidebar.bind(this)}>Toggle</button>
        <span>Responsive Navigation</span>
      </div>
    );
  }

}

const styles = {
  wrapper: {
    position: 'relative',
    zIndex: 1,
    backgroundColor: 'white',
    padding: '10px'
  }
}
