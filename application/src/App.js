import React from 'react';
import Header from './components/Header';
import Introduc from './components/Introduc';
import FixedModal from './components/FixedModal';
import ImageSlider from './components/ImageSlider';
import { SliderData } from './components/SliderData';
import Contact from './components/Contact';
import DarkmodeSwitch from './components/Darkmode/DarkmodeSwitch';
import Imsi from './components/Imsi';

function App() {
  return (
    <div>
      <Header />
      <Introduc />
      <ImageSlider slides={SliderData} />
      <Imsi />
      <FixedModal />
    </div>
  );
}

export default App;
