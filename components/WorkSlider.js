// data
export const workSlider = {
  slides: [
    {
      images: [
        {
          title: 'Inventory Management System',
          path: '/ims.png',
          link: 'http://ims.pritamjana.com'
        },
        {
          title: 'Notebook',
          path: '/iNotebook.jpg',
          link: '#'
        },
        {
          title: 'Ecommerce',
          path: '/ecommerce.png',
          link: 'https://ecommerce.pritamjana.com'
        },
        {
          title: 'Blog',
          path: '/blog.png',
          link: 'https://blog.pritamjana.com'
        },
      ],
    },
    {
      images: [
        {
          title: 'Inventory Management System',
          path: '/thumb3.jpg',
          link: '#'
        },
        {
          title: 'Notebook',
          path: '/thumb5.jpg',
          link: '#'
        },
        {
          title: 'Ecommerce',
          path: '/ecommerce.png',
          link: 'https://ecommerce.pritamjana.com'
        },
        {
          title: 'Blog',
          path: '/blog.png',
          link: 'https://blog.pritamjana.com'
        },
      ],
    },

  ],
};


// data
import { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import { BsArrowRight } from 'react-icons/bs';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const WorkSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);



  const numSlidesPerBottom = 3;

  // Create a ref to hold the swiper instance
  const swiperRef = useRef(null);

  // Initialize the swiper instance after component mount
  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.on('slideChange', (swiper) => {
        // Update the currentSlide when the slide changes
        setCurrentSlide(swiper.activeIndex);
      });
    }
  }, []);

  const handleBottomClick = (index) => {
    if (swiperRef.current) {
      setCurrentSlide(index); // Update the currentSlide directly based on the clicked index
      swiperRef.current.swiper.slideTo(index * numSlidesPerBottom);
    }
  };

  return (
    <div className="relative">
      <Swiper
        ref={swiperRef} // Attach the swiperRef to the Swiper component
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="sm:h-max md:h-[480px] "
      >
        {workSlider.slides.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
                {slide.images.map((image, index) => {
                  return (
                    <div className="relative rounded-lg overflow-hidden flex items-center group" key={index}>
                      <div className="flex items-center justify-center relative overflow-hidden group">
                        {/* Image */}
                        <Image src={image.path} width={500} height={300} alt="" priority />
                        {/* overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700 "></div>
                        {/* title */}
                        <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                          <Link href={image.link}>
                            <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em] ">
                              {/* title part-1*/}
                              <div className="delay-100">{image.title}</div>

                            </div>
                            <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em] ">
                              {/* title part-1*/}
                              <div className="delay-100">LIVE</div>
                              {/* title part 2 */}
                              <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">PROJECT</div>
                              {/* icon */}
                              <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200"><BsArrowRight /></div>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      {/* Pagination buttons */}


    </div>
  );
};

export default WorkSlider;