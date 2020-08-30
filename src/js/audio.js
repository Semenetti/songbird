const playAudio = (src) => {
  const audio = new Audio(src);
  audio.preload = 'auto';
  return audio.play();
};

const soundIfRight = () => {
  const audioSrc = './src/assets/audio/correct.mp3';

  playAudio(audioSrc);
};

const soundIfWrong = () => {
  const audioSrc = './src/assets/audio/error.mp3';

  playAudio(audioSrc);
};

export { soundIfWrong, soundIfRight };
