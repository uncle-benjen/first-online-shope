import React, {useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";


// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import styles from "./SwiperCarousel.module.css";
// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

const SwiperCarousel = (props) =>{

    const imgs = props.imgSrc;

    const [thumbsSwiper, setThumbsSwiper] = useState(null);



    return(
        <div className={styles.wrapper}>
        <Swiper
          style={{
            "--swiper-navigation-color": "#0f2842",
            "--swiper-navigation-size": "18px",
          }}
          spaceBetween={5}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
          modules={[FreeMode, Navigation, Thumbs]}
          className={styles.mySwiper2}
        >

            {imgs.map((img,index)=>{
                return(
                    <SwiperSlide key={index}>
                        <div className={styles.mainImgContainer}>
                            <Image
                            className={styles.mainImg}
                            src={img}
                            alt="Item image"
                            layout="fill"
                            />
                        </div>
                    </SwiperSlide>
                );
            })}       
        </Swiper>

        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={5}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className={styles.mySwiper}
        >
            {imgs.map((img,index)=>{
                return(
                    <SwiperSlide  key={index }>
                        <div className={styles.subImgContainer}>
                            <Image
                            className={styles.subImg}
                            src={img}
                            alt="Item image"
                            layout="fill"
                            />
                        </div>
                    </SwiperSlide>
                );
            })} 
        </Swiper>
      </div>
    );
};

export default SwiperCarousel;