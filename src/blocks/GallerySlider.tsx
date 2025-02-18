import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';

import { imagesSet1, imagesSet2 } from './../constans/galleryData';

const CustomSwiper = ({
  images = [],
  slidesPerView = 2.5,
  speed = 300,
  autoplayDelay = 0,
  breakpoints = {},
  className = '',
  freeMode = true,
  allowTouchMove = true,
  loop = true,
  navigation = false,
}) => {
  return (
    <Swiper
      spaceBetween={10}
      autoplay={{
        delay: autoplayDelay,
        disableOnInteraction: false,
      }}
      speed={speed}
      loop={loop}
      slidesPerView={slidesPerView}
      freeMode={freeMode}
      allowTouchMove={allowTouchMove}
      breakpoints={breakpoints}
      navigation={navigation}
      modules={[Autoplay, Navigation]}
      className={className}
    >
      {images.map((src, index) => (
        <SwiperSlide key={index}>
          <img
            className="h-[60vh] max-h-[450px] w-full object-cover"
            src={src}
            alt={`Slide ${index + 1}`}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export const GallerySlider: React.FC = () => {
  const breakpointsConfig1: Record<number, { slidesPerView: number }> = {
    320: { slidesPerView: 1.2 },
    560: { slidesPerView: 2.5 },
    992: { slidesPerView: 3.5 },
  };

  const breakpointsConfig2: Record<number, { slidesPerView: number }> = {
    320: { slidesPerView: 1.2 },
    480: { slidesPerView: 2 },
    768: { slidesPerView: 4.5 },
    1024: { slidesPerView: 5.5 },
  };

  return (
    <section className="my-20 bg-transparent">
      <CustomSwiper
        images={imagesSet1}
        slidesPerView={2.5}
        autoplayDelay={3000}
        speed={3000}
        breakpoints={breakpointsConfig1}
        className="pt-4 mySwiper bg-[transparent]"
      />
      <CustomSwiper
        images={imagesSet2}
        slidesPerView={3}
        autoplayDelay={4000}
        speed={2500}
        breakpoints={breakpointsConfig2}
        className="pt-4 mySwiper bg-[transparent]"
        freeMode={true}
      />
    </section>
  );
};
