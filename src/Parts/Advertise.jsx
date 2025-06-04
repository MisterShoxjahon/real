import React, {useRef} from 'react'
import left from '../assets/icons/left.svg'
import first from '../assets/images/first.png'
import second from '../assets/images/second.png'
import right from '../assets/icons/right.svg'
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'; 

const Advertise = () => {
  return (
    <section className='container'>
      <div data-aos="fade-up">
      <Swiper
          onSwiper={(swiper) => (useRef.current = swiper)}
          spaceBetween={20}
          slidesPerView={2}
          loop={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
        >
          {[first, second, first, second].map(
            (img, i) => (
              <SwiperSlide key={i} className="flex justify-center">
                <img
                  className="rounded-xl w-full object-contain"
                  src={img}
                  alt={`slide-${i}`}
                />
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>
    </section>
    
  )
}

export default Advertise
