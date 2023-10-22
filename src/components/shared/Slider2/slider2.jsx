import React from "react";
import "./styles/slider2.scss";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { Data1 } from "./data";
import Carousel from "react-elastic-carousel";
import { BsArrowRight } from "react-icons/bs";
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 450, itemsToShow: 1 },
  { width: 650, itemsToShow: 1 },
];

const Slider2 = () => {
  const carouselRef = React.useRef(null);
  const onNextStart = (currentItem, nextItem) => {
    if (currentItem.index === nextItem.index) {
      carouselRef.current.goTo(0);
    }
  };
  const onPrevStart = (currentItem, nextItem) => {
    if (currentItem.index === nextItem.index) {
      carouselRef.current.goTo("single-slide".length);
    }
  };

  return (
    <div className="shared-our-blog">
      <h1
        className="centered-text middle-title"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom">
        <FormattedMessage
          id="latest-insight"
          defaultMessage="Latest insight, stories , and news"
        />
      </h1>

      <Carousel
        className="slider"
        isRTL={true}
        breakPoints={breakPoints}
        ref={carouselRef}
        onPrevStart={onPrevStart}
        onNextStart={onNextStart}
        disableArrowsOnEnd={false}>
        {Data1.map((props) => {
          return (
            <div className="item">
              <div className="img-container">
                <div
                  className="img"
                  style={{ content: `url(${props.img})` }}></div>
              </div>
              <div className="bottom">
                <h6>{props.coloredDiv}</h6>
              </div>
            </div>
          );
        })}
      </Carousel>
      
    </div>
  );
};

export default Slider2;
