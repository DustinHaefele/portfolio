import React from 'react';
import Lottie from 'react-lottie';
import LoadingGif from '../../img/gif-loading.json';
import './ImgLoader.css';

//Presentational component to display an animation while the GIF is loading.
export default function GifLoader() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: LoadingGif
  };

  return (
    <div className="loader-div">
      <Lottie className="lottie-player" options={defaultOptions} />
    </div>
  );
}
