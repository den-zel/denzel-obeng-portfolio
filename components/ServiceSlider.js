// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

// import required modules
import { FreeMode, Pagination } from 'swiper';

// service data
 export const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Branding',
    description: 'Company branding.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'Web and Mobile App Designing UI.',
  },
  {
    icon: <RxDesktop />,
    title: 'Development',
    description: 'Coming Soon.',
  },
  {
    icon: <RxReader />,
    title: 'Copywriting',
    description: 'Coming Soon.',
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description: 'Coming Soon.',
  },
];

const ServiceSlider = () => {
  return <Swiper breakpoints={{
    320: {
      slidesPerView: 1,
      spaceBetween: 15
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 15
    },

  }}
  FreeMode={true}
  pagination={{
    clickable: true
  }}
  modules={[FreeMode, Pagination]}
  className='h-[240px] sm:h-[340px]'
  >
      {serviceData.map((item, index) => {
        return (
        <SwiperSlide key={index}>
          <div className='bg-[rgba(67,45,123,0.25)] h-max rounded-lg px-6 py-8 flex 
          sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] 
          transition-all duration-300'>
            {/* icon */}
            <div className='text-4xl text-accent mb-4'>{item.icon}</div>
            {/* title & desc */}
            <div className='mb-8'>
              <div className='mb-2 text-lg'>{item.title}</div>
              <p className='max-w-[350px] leading-normal'>{item.description}</p>
              </div>
              {/* arrow */}
              <div className='text-3xl'>
                <RxArrowTopRight className='group-hover:rotate-45 
                group-hover:text-accent transition-all duration' />
              </div>
          </div>
        </SwiperSlide>
        );
      })}
    </Swiper>
};

export default ServiceSlider;
