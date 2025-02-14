"use clients";

import { useSwiper } from "swiper/react";
import { PiCaretLeft , PiCaretRight } from "react-icons/pi"

const WorkSliderBtns = ({containerStyles, btnStyles, iconStyles}) => {

  const swiper = useSwiper();

  return (
    <div className={containerStyles}>
      <button className={btnStyles}>
        <PiCaretLeft className={iconStyles} onClick={() => swiper.slidePrev()}/>
      </button>
      <button className={btnStyles}>
        <PiCaretRight className={iconStyles} onClick={() => swiper.slideNext()}/>
      </button>
    </div>
  );
};

export default WorkSliderBtns
