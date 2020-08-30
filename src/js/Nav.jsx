import React from 'react';
import MenuItem from './MenuItem';

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav>
        <ul>
          <MenuItem id="practice" level={this.props.level} classList="active" title="Разминка" />
          <MenuItem id="sparrow" level={this.props.level} title="Джаз" />
          <MenuItem id="forest" level={this.props.level} title="Рок" />
          <MenuItem id="song" level={this.props.level} title="Русский рок" />
          <MenuItem id="wild" level={this.props.level} title="Рэгги" />
          <MenuItem id="sea" level={this.props.level} title="Хип-хоп" />
        </ul>
      </nav>
    );
  }
}
