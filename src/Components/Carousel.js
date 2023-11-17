import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import '../assets/components/carousel.scss';

// https://swiperjs.com/react

const Carousel = ({ gallery, directory }) => {
	return (<Swiper
		autoplay={{
			delay: 2500,
			disableOnInteraction: true,
		}}
		slidesPerView={1}
		spaceBetween={80}
		pagination={{
			clickable: true,
		}}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
		className="mySwiper">
            
        {Object.keys(gallery).map(key => {
            let picture = gallery[key];
		    return (<SwiperSlide>
                <img src={'/data/travels/' + directory + '/images/' + picture.src} alt={picture.alt} />
            </SwiperSlide>)
        })}
	</Swiper>);
}

export default Carousel;
