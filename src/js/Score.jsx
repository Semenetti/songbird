import React from 'react';

export default class Score extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>
          <strong>Счет: </strong>
          <span>{this.props.score}</span>
        </h2>
      </div>
    );
  }
}
