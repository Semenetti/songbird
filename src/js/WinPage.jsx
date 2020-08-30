import React from 'react';
import imgWin from '../assets/img/key.png';
import imgLose from '../assets/img/sad.png';
import Button from './Button';

const WinPage = (props) => {
  const active = props.level <= 5 ? 'win_page hidden' : 'win_page';
  const win = (
    <>
      <span>
        <b>Поздравляем!</b>Вы настоящий музыкальный эксперт! Ваш результат {props.score} из 25!
      </span>
    </>
  );
  const lose = (
    <>
      <span>
        <b>Очень жаль!</b>Вы пока недостаточно хорошо разбираетесь в музыке! Ваш результат{' '}
        {props.score} из 25. Попробуйте сыграть снова!
      </span>
    </>
  );

  const startNewGame = () => {
    window.location.reload(false);
  };

  return (
    <div className={active}>
      <h2>
        <img src={props.score > 24 ? imgWin : imgLose} alt="key" />
        {props.score > 24 ? win : lose}
      </h2>
      <Button level={props.level} onClickBtn={startNewGame} />
    </div>
  );
};

export default WinPage;
