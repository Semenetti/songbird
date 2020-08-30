import React from 'react';

export default class MenuItem extends React.Component {
  constructor(props) {
    super(props);
  }

  setClassName() {
    const level = this.props.level;
    const id = this.props.id;
    let activeClass = '';

    switch (id) {
      case 'practice':
        if (level === 0) activeClass = 'active';
        break;
      case 'sparrow':
        if (level === 1) activeClass = 'active';
        break;
      case 'forest':
        if (level === 2) activeClass = 'active';
        break;
      case 'song':
        if (level === 3) activeClass = 'active';
        break;
      case 'wild':
        if (level === 4) activeClass = 'active';
        break;
      case 'sea':
        if (level === 5) activeClass = 'active';
        break;
      default:
        activeClass = '';
    }

    return activeClass;
  }

  render() {
    return (
      <li id={this.props.id} className={this.setClassName()}>
        {this.props.title}
      </li>
    );
  }
}
