import React, { useState, useEffect, useRef } from 'react';
import IMG from '../img/book_1.jpg';

const TOTAL_SLIED_PAGE = 2;

function Carousel() {
  const [currentSlidePage, changeCurrentSlidePage] = useState(0);
  const slideRef = useRef(null);

  // 버튼
  const nextOnClick =
    //   더 이상 넘길 페이지가 없으면 ? 처음 페이지로 초기화 : 아니면 페이지넘버 + 1
    currentSlidePage >= TOTAL_SLIED_PAGE
      ? changeCurrentSlidePage(0)
      : changeCurrentSlidePage(currentSlidePage + 1);

  const prevOnClick =
    //  만약 페이지 넘버가 0일 때는 마지막 이미지로 돌아가고 아니면 -1로 정상작동
    currentSlidePage === 0
      ? changeCurrentSlidePage(TOTAL_SLIED_PAGE)
      : changeCurrentSlidePage(currentSlidePage - 1);

  useEffect(() => {
    slideRef.current.style.transition = 'all 1s ease-in-out';
    slideRef.current.style.transform = `translateX{-${currentSlidePage}00%}`;
  }, [currentSlidePage]);
  return (
    <div>
      <div name="container" className="w-5 overflow-hidden">
        <div name="SlideContainer" className="flex w-full">
          <Slide img={IMG}></Slide>
          <Slide img={IMG}></Slide>
          <Slide img={IMG}></Slide>
        </div>
      </div>
      <button
        onClick={() => {
          prevOnClick();
        }}
      >
        이전
      </button>
      <button
        onClick={() => {
          nextOnClick();
        }}
      >
        이후
      </button>
    </div>
  );
}

function Slide({ img }) {
  return (
    <div>
      <img className="w-full h-7" src={img} alt="문학회에서 다뤘던 책 이미지" />
    </div>
  );
}

export default Carousel;
