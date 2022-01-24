// 한글로 하면.. 나중에 후배들이 유지보수를 할 때 도움이 될까..? 아니면 에러가 날까? 변수 한글로 해도 괜찮을까ㅓ?
import React, { useState } from 'react';
import { SliderData } from './SliderData';
import { FaLongArrowAltRight, FaLongArrowAltLeft } from 'react-icons/fa';

const ImageSlider = ({ slides }) => {
  const [현재이미지, 이미지변경] = useState(0); // 초기에는 0번을 index로 넘겨준다.
  const 전체장수 = slides.length;

  const nextOnClicked = () => {
    이미지변경(현재이미지 === 전체장수 - 1 ? 0 : 현재이미지 + 1);
  };

  const prevOnClicked = () => {
    이미지변경(현재이미지 === 0 ? 전체장수 - 1 : 현재이미지 - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div
      name="slider"
      className="relative flex h-20 justify-center align-center"
    >
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === 현재이미지 ? 'slide active' : 'slide'}
            key={index} // index 빼먹지 말고 써줍시다
          >
            {index === 현재이미지 && (
              <img
                className=" w-96 h-96 rounded-10 "
                src={slide.img}
                alt="지난 한 해 문학회에서 다뤘던 책"
              ></img>
            )}
          </div>
        );
      })}
      <FaLongArrowAltLeft className="btn-left" onClick={prevOnClicked} />
      <FaLongArrowAltRight className="btn-right" onClick={nextOnClicked} />
    </div>
  );
};

export default ImageSlider;
