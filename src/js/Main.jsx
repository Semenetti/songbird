import React from 'react';
import img from '../assets/img/default.jpg';
import AudioPlayer from './ReactAudioPlayer';

function Main(props) {
  return (
    <div className="main">
      <div className="bird_img">
        <img id="default_bird" src={props.win ? props.image : img} alt="bird" />
      </div>
      <div className="answer_section">
        <div id="bird_name">
          <h2>{props.win ? props.name : '***'}</h2>
        </div>
        <div id="player">
          <AudioPlayer audio={props.audio} pause={props.pause} />
        </div>
      </div>
    </div>
  );
}

export default Main;
