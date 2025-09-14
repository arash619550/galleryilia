'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Container from './Container';
type TSmartWatch = {
    id: number;
    name: string;
    src: string;
    alt: string;
    price: number;
}
type TPowerbank = TSmartWatch;
export default function CarouselTemplate({ product, banner }: { product: TSmartWatch[], banner: string }) {

    return (
        <div >
            <Container>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={20}
                    navigation
                    modules={[Navigation]}
                    loop={true}
                    className="mySwiper">
                    {product.map((p) => (
                        <SwiperSlide key={p.id} >
                            <div className="p-4 border rounded-lg text-center min-h-72 flex flex-col  ">
                                <img src={p.src} alt={p.alt} className="w-full h-40 object-cover rounded-md mb-1" />
                                <h3 className="font-medium min-h-16">{p.name}</h3>
                                <h4 className='text-left'><span className='font-bold '>{p.price}&nbsp;</span>تومان</h4>
                            </div>
                        </SwiperSlide >
                    ))}
                </Swiper >
                <img src={banner} alt="banner1" className='mt-4 rounded-lg object-cover w-full max-h-72' />
            </Container >
        </div >
    );
}
