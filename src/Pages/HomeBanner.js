import { Autoplay, Navigation } from "swiper/modules";
import {Swiper, SwiperSlide } from "swiper/react";

const HomeBanner = props => {

    return <div className="container mt-3">

        <div className="homeBannerSection">
            <Swiper
                slidesPerView={1}
                spaceBetween={15}
                navigation
                loop={false}
                autoplay={{
                    delay:2500,disableOnInteraction: false 
                }}
                modules={[Navigation, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="item"><img alt="" src="https://cmsimages.shoppersstop.com/eoss_main_banner_web_56324b74ba/eoss_main_banner_web_56324b74ba.png" className="w-100" /></div>
                </SwiperSlide>   
                <SwiperSlide>
                    <div className="item"><img alt="" src="https://cmsimages.shoppersstop.com/main_banner_web_Stop_Kashish_and_more_49ccf16ff1/main_banner_web_Stop_Kashish_and_more_49ccf16ff1.png" className="w-100" /></div>
                </SwiperSlide>   
                <SwiperSlide>
                    <div className="item"><img alt="" src="https://cmsimages.shoppersstop.com/Main_Banner_Web_Titan_Fossil_and_more_efc9bc4dce/Main_Banner_Web_Titan_Fossil_and_more_efc9bc4dce.png" className="w-100" /></div>
                </SwiperSlide>   
                <SwiperSlide>
                    <div className="item"><img alt="" src="https://cmsimages.shoppersstop.com/main_banner_web_Stop_Kashish_and_more_49ccf16ff1/main_banner_web_Stop_Kashish_and_more_49ccf16ff1.png" className="w-100" /></div>
                </SwiperSlide>   
            </Swiper>
        </div>
    </div>
}

export default HomeBanner;