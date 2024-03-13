import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import { BsArrowRight } from 'react-icons/bs';
import Image from 'next/image';

// Data
export const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: '/nova.png',
          link: 'https://trynova.co'
        },
        {
          title: 'title',
          path: '/liftinfluence.png',
          link: 'https://www.liftinfluence.com'
        },
        {
          title: 'title',
          path: '/genysolutions.png',
          link: 'https://www.genysolutions.tech'
        },
        {
          title: 'title',
          path: '/vox.png',
          link: 'https://www.tryvoxai.co'
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/vox.png',
          link: 'https://www.tryvoxai.co'
        },
        {
          title: 'title',
          path: '/genysolutions.png',
          link: 'https://www.genysolutions.tech'
        },
        {
          title: 'title',
          path: '/liftinfluence.png',
          link: 'https://www.liftinfluence.com'
        },
        {
          title: 'title',
          path: '/nova.png',
          link: 'https://trynova.co'
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true
      }}
      modules={[Pagination]}
      className='h-[280px] sm:h-[480px]'
    >
      {workSlides.slides.map((slide, slideIndex) => (
        <SwiperSlide key={slideIndex}>
          <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
            {slide.images.map((image, imageIndex) => (
              <div
                className='relative rounded-lg overflow-hidden flex items-center justify-center group'
                key={slideIndex + '-' + imageIndex} // Added unique key prop
              >
                <a href={image.link} target="_blank" rel="noopener noreferrer">
                  <div className='flex items-center justify-center relative overflow-hidden group'>
                    {/* image */}
                    <Image src={image.path} width={500} height={300} alt='' />
                    {/* overlay gradient */}
                    <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
                    {/* title */}
                    <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300'>
                      <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                        {/* title part 1 */}
                        <div className='delay-100'>LIVE</div>
                        {/* title part 2 */}
                        <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>PROJECT</div>
                        {/* icon */}
                        <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'>
                          <BsArrowRight />
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
