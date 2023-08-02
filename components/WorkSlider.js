// data
export const workSlider = {
  slides: [
    {
      images: [
        {
          title: 'Inventory Management System',
          path: '/thumb6.jpg',
          link:'http://13.48.193.81'
        },
        {
          title: 'Notebook',
          path: '/iNotebook.jpg',
          link:'http://13.48.193.81'
        },
        {
          title: 'Grosery Bud',
          path: '/thumb3.jpg',
          link:'/'
        },
        {
          title: 'Accordition app',
          path: '/thumb5.jpg',
          link:'https://accordionn-app.netlify.app'
        },
      ],
    },

  ],
};


// data
import { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import { BsArrowRight } from 'react-icons/bs';
import Image from 'next/image';
import Link from 'next/link';

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
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={{ Pagination }}
        className="h-[280px] sm:h-[480px] "
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
                        <Image src={image.path} width={500} height={300} alt="" />
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