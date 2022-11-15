import Image from "next/image";
import React, { useEffect, useState } from "react";

const AngelCarousel = ({ itemsLength, duration }) => {
  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (currentIndex < itemsLength) {
        setCurrentIndex((prev) => ++prev);
      } else {
        setCurrentIndex(1);
      }
    }, duration);
    return () => {
      clearTimeout(timeOut);
    };
  }, [duration, currentIndex, itemsLength]);
  return (
    <div className="w-full">
      <Image
        layout="responsive"
        width={"100%"}
        height={"100%"}
        alt=""
        src={`/images/angels/${currentIndex}.png`}
      />
    </div>
  );
};

export default AngelCarousel;
