import Slider from "react-slick";

const HomeBanner = props => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true
    };
    return <div className="homeBannerSection">
        <Slider {...settings}>
            <div className="item"><img alt="" src="https://cmsimages.shoppersstop.com/eoss_main_banner_web_56324b74ba/eoss_main_banner_web_56324b74ba.png" className="w-100" /></div>
            <div className="item"><img alt="" src="https://cmsimages.shoppersstop.com/main_banner_web_Stop_Kashish_and_more_49ccf16ff1/main_banner_web_Stop_Kashish_and_more_49ccf16ff1.png" className="w-100" /></div>
            <div className="item"><img alt="" src="https://cmsimages.shoppersstop.com/Main_Banner_Web_Titan_Fossil_and_more_efc9bc4dce/Main_Banner_Web_Titan_Fossil_and_more_efc9bc4dce.png" className="w-100" /></div>
            <div className="item"><img alt="" src="https://cmsimages.shoppersstop.com/main_banner_web_Stop_Kashish_and_more_49ccf16ff1/main_banner_web_Stop_Kashish_and_more_49ccf16ff1.png" className="w-100" /></div>
        </Slider>
    </div>
}

export default HomeBanner;