import React from 'react';
import AudioPlayer from './ReactAudioPlayer';

export default function Description(props) {
  const { audio, description, image, species, name } = props;

  return (
    <div className="answer_description">
      {name === '' && (
        <h2>
          Прослушайте музыкальную композицию и выберите исполнителя из предложенного списка. Когда
          угадаете исполнителя, Вы сможете перейти на следующий уровень.
        </h2>
      )}
      <div className="answer_image">{image !== '' && <img id="bird" src={image} alt="bird" />}</div>
      <div className="answer_description_title">
        {name !== '' && <h3 className="name">{name}</h3>}
        {species !== '' && <div className="species">{species}</div>}
      </div>
      {audio !== '' && <AudioPlayer audio={audio} />}
      <div className="answer_description_text">{description}</div>
    </div>
  );
}
