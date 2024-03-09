import { Carousel, RadioGroup, Radio, Divider } from "rsuite";
import React from "react";

const RadioLabel = ({ children }) => (
  <label style={{ padding: 7 }}>{children}</label>
);

export default function Rad() {
  const [placement, setPlacement] = React.useState("bottom");
  const [shape, setShape] = React.useState("bar");

  return (
    <>
      <Carousel
        key={`${placement}.${shape}`}
        placement={placement}
        shape={shape}
        className="custom-slider"
        autoplay
      >
        <img
          src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=1"
          height="250"
        />
        <img
          src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=2"
          height="250"
        />
        <img
          src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=3"
          height="250"
        />
        <img
          src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=4"
          height="250"
        />
        <img
          src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=5"
          height="250"
        />
      </Carousel>
    </>
  );
}
