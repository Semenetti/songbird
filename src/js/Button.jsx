import React from 'react';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClickBtn ? this.props.onClickBtn() : null;
  }

  getTitle() {
    let level;

    if (this.props.level === 0) {
      level = 'Начать игру';
    } else if (this.props.level === 5) {
      level = 'Посмотреть результат игры';
    } else if (this.props.level === 6) {
      level = 'Играть снова';
    } else {
      level = 'Следующий уровень';
    }

    return level;
  }

  render() {
    return (
      <button type="button" className={this.props.className} onClick={this.handleClick}>
        {this.getTitle()}
      </button>
    );
  }
}
