import React from 'react';

export default class Answers extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const { audio, description, image, species, name } = this.props;

    const clickedBird = { audio, description, image, species, name };
    this.props.click(clickedBird, e.target);
  }

  render() {
    return (
      <div
        className="questions__answer"
        id={this.props.id}
        audio={this.props.audio}
        description={this.props.description}
        image={this.props.image}
        species={this.props.species}
        onClick={this.handleClick}
      >
        {this.props.name}
      </div>
    );
  }
}
