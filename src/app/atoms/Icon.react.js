/* eslint-disable */
// Generated by gulp svg-icon - do not modify manually

import Radium from 'radium';

import Component from 'react-pure-render/component';
import React from 'react';

const iconList = [
  'arrow',
  'close',
  'code',
  'colorpicker',
  'copy',
  'overview',
  'search',
  'settings',
]


class Icon extends Component {

  static propTypes = {
    color: React.PropTypes.string,
    height: React.PropTypes.number,
    kind: React.PropTypes.oneOf(iconList).isRequired,
    onClick: React.PropTypes.func,
    preview: React.PropTypes.bool,
    size: React.PropTypes.number,
    style: React.PropTypes.oneOf([
      React.PropTypes.arrayOf(React.PropTypes.object),
      React.PropTypes.object
    ]),
    width: React.PropTypes.number,
    wrapperStyle: React.PropTypes.oneOf([
      React.PropTypes.arrayOf(React.PropTypes.object),
      React.PropTypes.object
    ])
  };

  static defaultProps = {
    color: '#000',
    size: 32
  }

  render() {
    const {preview} = this.props

    return preview ?
      this.renderPreview() :
      this.renderIcon()
  }

  renderIcon() {
    const {kind, wrapperStyle} = this.props;

    if (wrapperStyle)
      return <div style={wrapperStyle}>{this.getIcon(kind)}</div>

    return this.getIcon(kind)
  }

  renderPreview() {
    return (
      <div>
        {iconList.map(kind => this.renderPreviewKind(kind))}
      </div>
    )
  }

  renderPreviewKind(kind) {
    return (
      <div key={kind}>
        <h3>&lt;Icon kind="{kind}" /&gt;</h3>
        {this.renderIcon(kind)}
      </div>
    )
  }

  getIcon(kind) {
    const {color, height, onClick, size, style, width} = this.props;

    switch (kind) {
      default: return null;
      case ('arrow'): return (<svg xmlns="http://www.w3.org/2000/svg" fill={color} height={height || size} width={width || size} onClick={onClick} style={style} viewBox="106 -228 512 512"><path d="M610-109.8L362 165.8 114-109.8h496z"/></svg>);
      case ('close'): return (<svg xmlns="http://www.w3.org/2000/svg" fill={color} height={height || size} width={width || size} onClick={onClick} style={style} viewBox="106 -228 512 512"><path d="M426.9 28L600 201.1 535.1 266 362 92.9 188.9 266 124 201.1 297.1 28 124-145.1l64.9-64.9L362-36.9 535.1-210l64.9 64.9L426.9 28z"/></svg>);
      case ('code'): return (<svg xmlns="http://www.w3.org/2000/svg" fill={color} height={height || size} width={width || size} onClick={onClick} style={style} viewBox="106 -228 512 512"><path d="M268.5 134.6l-147.6-88V-2.1l147.5-87.4v57.3L165.6 21.7l102.9 56v56.9zm55.8 36.2h-30.7L391.5-115h30.9l-98.1 285.8zm131.2-36.2V77.7l102.7-55.6-102.7-55.2v-56.5L603-2.1v48.4l-147.5 88.3z"/></svg>);
      case ('colorpicker'): return (<svg xmlns="http://www.w3.org/2000/svg" fill={color} height={height || size} width={width || size} onClick={onClick} style={style} viewBox="106 -228 512 512"><path d="M574.8-184.8c-22.9-22.9-59.9-22.9-82.8 0l-69 69-19-19c-10-10-26.2-10-36.3 0-10 10-10 26.2 0 36.3l19 19-212.1 212.1c-10.4 10.4-16.1 23.8-17 37.4-.4 5.6-1.8 15.9-3.4 27-.3 1.8-1.1 3.6-2.5 5l-15.9 15.9c-5.1 5.1-5.1 13.3 0 18.4l17.9 17.9c5.1 5.1 13.3 5.1 18.4 0l15.9-15.9c1.4-1.4 3.2-2.2 5-2.5 11.2-1.7 21.5-3.1 27.1-3.4 13.6-.9 27-6.6 37.4-17L469.6 3.2l19 19c10 10 26.2 10 36.3 0 10-10 10-26.2 0-36.3l-63.2-63.2 49.6 38.7 63.6-63.6c22.8-22.7 22.8-59.8-.1-82.6zM438.9-9.1L334 95.9c-5.1 5.1-13.3 5.1-18.4 0l-16.7-16.7c-5.1-5.1-13.3-5.1-18.4 0l-3.1 3.1-75.3 75.3c-1.7 1.7-4.2 2-5.5.7-1.3-1.3-1-3.8.7-5.5L319.1 30.9 399-49c5.1-5.1 13.3-5.1 18.4 0l21.5 21.5c5.1 5.1 5.1 13.4 0 18.4z"/></svg>);
      case ('copy'): return (<svg xmlns="http://www.w3.org/2000/svg" fill={color} height={height || size} width={width || size} onClick={onClick} style={style} viewBox="106 -228 512 512"><path d="M581.4 181.5h-87.7V247l-109.6-98.5L493.7 50v65.8h87.7v65.7zM384 71.8H230.4c-12.2 0-21.9 9.9-21.9 21.9 0 12.2 9.9 21.9 21.9 21.9h122.7l-34.8 32.6 12 11.3h-100c-12.2 0-21.9 9.9-21.9 21.9 0 12.2 9.9 21.9 21.9 21.9H377l70.1 65.8H164.5c-12.2 0-21.9-10.1-21.9-22v-368.6c0-11.9 9.7-21.5 21.9-21.5h53.8v41.2c0 19.5 15.7 34.8 35.6 34.8H361c19.8 0 36.1-15.4 36.1-34.8V-143h53.2c12.2 0 21.5 9.6 21.5 21.5V4.6l-76 71.2c-3.5-2.3-7.4-4-11.8-4zm21.9-65.7c0-12.2-9.9-21.9-21.9-21.9H230.4c-12.2 0-21.9 9.9-21.9 21.9 0 12.2 9.9 21.9 21.9 21.9H384c12-.1 21.9-9.9 21.9-21.9zm-44.7-93.7h-107c-8.1 0-14.7-6.4-14.7-14.3v-60.2c0-7.9 6.5-14.3 14.7-14.3h15.5c.1-20.2 16.9-36.6 37.6-36.6s37.5 16.4 37.6 36.6H361c8.1 0 14.7 6.4 14.7 14.3v60.2c.1 7.7-6.4 14.3-14.5 14.3zm-53.7-105.2c-9.2 0-16.6 7.3-16.8 16.3h33.7c-.3-9-7.7-16.3-16.9-16.3z"/></svg>);
      case ('overview'): return (<svg xmlns="http://www.w3.org/2000/svg" fill={color} height={height || size} width={width || size} onClick={onClick} style={style} viewBox="106 -228 512 512"><path d="M130-204h193.3v193.3H130V-204zm0 464h193.3V66.6H130V260zm270.7 0H594V66.6H400.7V260zm0-464v193.3H594V-204H400.7z"/></svg>);
      case ('search'): return (<svg xmlns="http://www.w3.org/2000/svg" fill={color} height={height || size} width={width || size} onClick={onClick} style={style} viewBox="106 -228 512 512"><path d="M585.6 200.6l-96.4-96.4C512.4 70.7 524 33.2 524-8.1c0-26.8-5.2-52.5-15.6-76.9-10.4-24.4-24.4-45.6-42.3-63.3-17.7-17.7-38.8-31.8-63.3-42.1-24.3-10.4-50-15.6-76.8-15.6-26.8 0-52.5 5.2-76.9 15.6-24.4 10.3-45.6 24.4-63.3 42.1s-31.7 38.8-42.1 63.3c-10.4 24.4-15.6 50.1-15.6 76.9s5.2 52.5 15.6 76.9c10.4 24.4 24.4 45.6 42.1 63.3s38.8 31.7 63.3 42.1c24.4 10.4 50.1 15.6 76.9 15.6 41.2 0 78.6-11.7 112.2-34.9l96.4 96.2c6.8 7.1 15.1 10.7 25.3 10.7 9.7 0 18.2-3.6 25.3-10.7 7.1-7.1 10.7-15.6 10.7-25.3.1-9.7-3.4-18.2-10.3-25.2zM415.1 81c-24.7 24.7-54.3 37-88.9 37s-64.4-12.4-88.9-37c-24.7-24.7-37-54.3-37-88.9s12.4-64.4 37-88.9c24.7-24.7 54.3-37 88.9-37s64.4 12.4 88.9 37c24.7 24.7 37 54.3 37 88.9-.2 34.6-12.5 64.3-37 88.9z"/></svg>);
      case ('settings'): return (<svg xmlns="http://www.w3.org/2000/svg" fill={color} height={height || size} width={width || size} onClick={onClick} style={style} viewBox="106 -228 512 512"><path d="M542.2-29.2l-2.3-.8-9.1-21.1 1-2.2c27.7-60.7 25.7-62.5 21.1-66.9L516-155c-1.5-1.5-4.1-2.4-6.4-2.4-2.1 0-8.4 0-62.7 23.8l-2.2 1-22.4-8.7-.8-2.2C395.8-205 393.2-205 386.8-205h-51.9c-6.3 0-9.2 0-32.9 61.5l-.8 2.3-22.3 8.9-2.2-.8c-36.8-15-58.2-22.7-63.8-22.7-2.3 0-5 1-6.4 2.4l-36.9 34.9c-4.6 4.5-6.6 6.3 22.4 65.8l1.1 2.2-9.2 21.1-2.2.8c-64.8 24.3-64.8 26.7-64.8 33v49.4c0 6.3 0 9 64.9 31.5l2.3.8 9.2 21-1 2.1c-27.5 60.7-25.8 62.4-21.1 66.9l36.8 34.8c1.6 1.5 4.2 2.4 6.4 2.4 2.1 0 8.4 0 62.7-23.8l2.2-1 22.4 8.9.8 2.2c25.6 61.4 28.1 61.4 34.6 61.4H389c6.6 0 9.2 0 32.9-61.5l1-2.3 22.3-8.7 2.1.8c36.8 15 58.2 22.7 63.8 22.7 2.3 0 5-1 6.4-2.4l36.9-34.9c4.6-4.5 6.6-6.3-22.6-65.6l-1.1-2.2 9.1-21 2.2-.8c65-24.5 65-26.9 65-33.2V2.5c.1-6.5.1-9.2-64.8-31.7zM362 108.1c-46.5 0-84.2-35.9-84.2-80.1s37.9-80.1 84.2-80.1 84.2 35.9 84.2 80.1-37.8 80.1-84.2 80.1z"/></svg>);
      }
  }
}


export default Radium(Icon)