import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

const HomeCat = props => {
 return <div className="homeCat">
 <div className="container">
 <h3 className="mb-3 hd"> Featured Categories</h3>
 <Swiper
        slidesPerView={10}
        spaceBetween={5}
        navigation
        slidesPerGroup={1}
        modules={[Navigation]}
        className="mySwiper"
    >
        <SwiperSlide>
            <div className='item text-center cursor'>
            <img 
                style={{width: "60px", height: "60px"}}
                src="https://www.bigbasket.com/media/uploads/p/l/40128384_5-fresho-apple-pink-lady.jpg"/>
                <h6>Red Apple</h6>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='item text-center cursor'>
            <img 
                style={{width: "60px", height: "60px"}}
                src="https://www.bigbasket.com/media/uploads/p/l/40128384_5-fresho-apple-pink-lady.jpg"/>
                <h6>Red Apple</h6>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='item text-center cursor'>
            <img 
                style={{width: "60px", height: "60px"}}
                src="https://www.bigbasket.com/media/uploads/p/l/40128384_5-fresho-apple-pink-lady.jpg"/>
                <h6>Red Apple</h6>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='item text-center cursor'>
            <img 
                style={{width: "60px", height: "60px"}}
                src="https://www.bigbasket.com/media/uploads/p/l/40128384_5-fresho-apple-pink-lady.jpg"/>
                <h6>Red Apple</h6>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='item text-center cursor'>
                <img 
                style={{width: "60px", height: "60px"}}
                src="https://www.bigbasket.com/media/uploads/p/l/40128384_5-fresho-apple-pink-lady.jpg"/>
                <h6>Red Apple</h6>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='item text-center cursor'>
            <img 
                style={{width: "60px", height: "60px"}}
                src="https://www.bigbasket.com/media/uploads/p/l/40128384_5-fresho-apple-pink-lady.jpg"/>
                <h6>Red Apple</h6>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='item text-center cursor'>
            <img 
                style={{width: "60px", height: "60px"}}
                src="https://www.bigbasket.com/media/uploads/p/l/40128384_5-fresho-apple-pink-lady.jpg"/>
                <h6>Red Apple</h6>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='item text-center cursor'>
            <img 
                style={{width: "60px", height: "60px"}}
                src="https://www.bigbasket.com/media/uploads/p/l/40128384_5-fresho-apple-pink-lady.jpg"/>
                <h6>Red Apple</h6>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='item text-center cursor'>
            <img 
                style={{width: "60px", height: "60px"}}
                src="https://www.bigbasket.com/media/uploads/p/l/40128384_5-fresho-apple-pink-lady.jpg"/>
                <h6>Red Apple</h6>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='item text-center cursor'>
            <img 
                style={{width: "60px", height: "60px"}}
                src="https://www.bigbasket.com/media/uploads/p/l/40128384_5-fresho-apple-pink-lady.jpg"/>
                <h6>Red Apple</h6>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='item text-center cursor'>
            <img 
                style={{width: "60px", height: "60px"}}
                src="https://www.bigbasket.com/media/uploads/p/l/40128384_5-fresho-apple-pink-lady.jpg"/>
                <h6>Red Apple</h6>
            </div>
        </SwiperSlide>

    </Swiper>
 </div>
  
</div>
}

export default HomeCat;