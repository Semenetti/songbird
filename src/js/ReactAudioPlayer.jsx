import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

export default function AudioPlayer(props) {
  return <ReactAudioPlayer src={props.audio} controls />;
}
