import Component from 'react-pure-render/component';
import Icon from './atoms/Icon.react';
import Radium from 'radium';
import React, {PropTypes as RPT} from 'react';
import font from './styles/Font';
import * as colors from './styles/Colors';

@Radium
export default class ResponsiveNav extends Component {

  static propTypes = {
    componentsIndex: RPT.object.isRequired,
    selectAtom: RPT.func.isRequired,
    selectedAtom: RPT.string,
    toggleSidebar: RPT.func.isRequired,
  }

  renderPath(pathName, index) {
    return (
      <span key={pathName}>
        {index > 0 &&
          <Icon
            color={colors.GRAY_BRIGHT}
            kind="chevron-right"
            size={12}
            style={styles.separator}
          />
        }
        {pathName}
      </span>
    );
  }

  render() {
    const {componentsIndex, selectedAtom, toggleSidebar} = this.props
    const selectedComponentIndex = componentsIndex.get(selectedAtom)
    const path = selectedAtom ? selectedComponentIndex.get('menu').split(/\s/) : []

    return (
      <div style={styles.wrapper}>
        <Icon
          color={colors.GRAY_BRIGHT}
          kind="menu"
          onClick={toggleSidebar.bind(this)}
          size={22}
          style={styles.button}
        />
        <div style={styles.text}>
          {path.map((pathName, index) => this.renderPath(pathName, index))}
        </div>
        <div style={styles.clearfix} />
      </div>
    );
  }

}

const styles = {
  wrapper: {
    position: 'relative',
    zIndex: 1,
    backgroundColor: 'white',
    padding: '6px 10px 4px',
    borderBottom: '1px solid #bfbebe'
  },

  button: {
    padding: '5px',
    float: 'left',
    ':hover': {
      cursor: 'pointer'
    }
  },

  clearfix: {
    clear: 'both'
  },

  text: {
    ...font,
    display: 'inline-block',
    verticalAlign: 'top',
    padding: '8px',
    float: 'left'
  },

  separator: {
    position: 'relative',
    top: '1px',
    padding: '0 3px'
  }
}
