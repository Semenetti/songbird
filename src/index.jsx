import React from 'react';
import ReactDOM from 'react-dom';

import Nav from './js/Nav';
import Header from './js/Header';
import WinPage from './js/WinPage';
import Main from './js/Main';
import Answers from './js/Answers';
import Description from './js/Description';
import Button from './js/Button';

import songsData from './js/data';
import { soundIfWrong, soundIfRight } from './js/audio';

import './sass/style.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedAudio: '',
      audioToGuess: '',
      birdToGuess: '',
      clicked: '',
      clickedBird: '',
      audio: '',
      description: '',
      image: '',
      species: '',
      name: '',
      level: 0,
      question: '',
      isWin: false,
      score: 0,
      pause: false,
    };

    this.handleClick = this.handleClick.bind(this);
    this.nextLevel = this.nextLevel.bind(this);
  }

  clearStyles() {
    document.querySelectorAll('.questions__answer').forEach((el) => {
      el.classList.remove('wrong', 'right', 'won');
    });
    document.querySelector('.next').classList.remove('next');
  }

  disableButtons() {
    document.querySelectorAll('.questions__answer').forEach((el) => {
      el.classList.add('won');
    });
    document.querySelector('.next_level').classList.add('next');
    document.querySelector('.next_level').classList.remove('won');
  }

  resetDescriptionBlock() {
    this.setState({
      clickedAudio: '',
      description: '',
      image: '',
      species: '',
      name: '',
    });
  }

  checkIfWin(e, bird) {
    if (this.state.audioToGuess === e) {
      soundIfRight();
      this.setState({ isWin: true });
      this.setState({ pause: true });
      bird.classList.add('right');
      document.querySelector('audio').pause();

      if (this.state.level !== 0) {
        const score = this.state.score + 5 - document.querySelectorAll('.wrong').length;
        this.setState({ score: score });
      }
      this.disableButtons();
    } else {
      soundIfWrong();
      bird.classList.add('wrong');
    }
  }

  nextLevel() {
    const level = this.state.level + 1;
    this.setState({ level: level });

    if (level <= 5) {
      this.setState({ isWin: false });
      this.clearStyles();
      this.resetDescriptionBlock();
      this.getRandomQuestion(level);
    }
    document.querySelector('.next_level').classList.add('won');
  }

  handleClick(e, bird) {
    const { audio, description, image, species, name } = e;
    this.setState({ clickedAudio: audio, description, image, species, name });
    this.checkIfWin(audio, bird);
  }

  getRandomQuestion(e) {
    const num = Math.floor(Math.random() * 6);
    const audioToGuess = songsData[e][num]['audio'];
    const birdToGuess = songsData[e][num]['name'];

    this.setState({ audioToGuess, birdToGuess });
  }

  componentDidMount() {
    this.getRandomQuestion(this.state.level);
  }

  render() {
    let answersToRender;

    if (this.state.level <= 5) {
      answersToRender = songsData[this.state.level].map((num) => (
        <Answers
          key={num.id}
          id={num.id}
          audio={num.audio}
          description={num.description}
          image={num.image}
          species={num.species}
          name={num.name}
          click={this.handleClick}
        />
      ));
    }
    const hidden = this.state.level <= 5 ? '' : 'hidden';
    return (
      <>
        <Header score={this.state.score} />
        <div className={hidden}>
          <Nav level={this.state.level} />
          <Main
            audio={this.state.audioToGuess}
            win={this.state.isWin}
            name={this.state.birdToGuess}
            pause={this.state.pause}
            image={this.state.image}
          />
          <div className="questions">
            <div className="questions-block">{answersToRender}</div>
            <Description
              audio={this.state.clickedAudio}
              description={this.state.description}
              image={this.state.image}
              species={this.state.species}
              name={this.state.name}
            />
          </div>
          <div className="btn">
            <Button
              level={this.state.level}
              className="won next_level"
              onClickBtn={this.nextLevel}
            />
          </div>
        </div>
        <WinPage level={this.state.level} score={this.state.score} />
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
