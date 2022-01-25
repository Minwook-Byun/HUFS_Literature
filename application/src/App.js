import React from 'react';
import Header from './components/Header';
import Introduc from './components/Introduc';
import FixedModal from './components/FixedModal';
import ImageSlider from './components/ImageSlider';
import { SliderData } from './components/SliderData';
import Upload from './components/Upload';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Header />
      <Introduc />
      <p style={{ fontSize: '20px', textAlign: 'center', marginTop: '30px' }}>
        아직 개발 중인 영역입니다 🚧
      </p>
      <img src="https://item.kakaocdn.net/do/a56e6ddd117688df80be93b1154a9856f43ad912ad8dd55b04db6a64cddaf76d"></img>
      <ImageSlider slides={SliderData} />
      <Upload />
      <FixedModal />
    </div>
  );
}

export default App;
