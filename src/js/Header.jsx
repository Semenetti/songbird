import React from 'react';
import Score from './Score';
// import img from '../assets/img/song.jpg';
import img from '../assets/img/mic.png';

const Header = (props) => {
  return (
    <header>
      <h1>
        <img src={img} alt="logo" />
        SongGuesser
      </h1>
      <Score score={props.score} />
    </header>
  );
};

export default Header;
