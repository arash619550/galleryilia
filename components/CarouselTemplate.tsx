'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Container from './Container';
import store from '@/store/store';
import Link from 'next/link';
type TProduct = {
    id: number;
    name: string;
    src: string;
    alt: string;
    price: number;
}
export default function CarouselTemplate({ product, banner }: { product: TProduct[], banner: string }) {
    const { count, increase, decrease, reset } = store()

    return (
        <div>
            <Container>
                <Swiper
                    spaceBetween={20}
                    navigation
                    modules={[Navigation]}
                    loop={true}
                    className="mySwiper"
                    breakpoints={{
                        0: { slidesPerView: 3 },
                        768: { slidesPerView: 6 }
                    }}
                >
                    {product.map((p) => (
                        <SwiperSlide key={p.id}>
                            <Link href={`/products/${p.id}`}>
                                <div className="p-4 rounded-t-lg bg-white text-center flex flex-col">
                                    <img src={p.src} alt={p.alt} className="w-full object-contain rounded-md mb-1" />
                                    <h3 className="font-medium min-h-14">{p.name}</h3>
                                </div>
                            </Link>
                            <div className='flex justify-between items-center bg-white rounded-b-lg px-4 pb-1'>
                                <div className='flex items-center gap-1'>
                                    <button className='py-1 px-2 bg-rose-500 text-white rounded' onClick={increase}>+</button>
                                    <h3>{count}</h3>
                                    <button className='py-1 px-2 bg-rose-500 text-white rounded' onClick={decrease}>-</button>
                                </div>
                                <div className='flex'>
                                    <h4 className='text-left'><span className='font-semibold'>{p.price}&nbsp;</span>تومان</h4>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <img src={banner} alt="banner1" className='mt-4 rounded-lg object-cover w-full max-h-72' />
            </Container>
        </div>
    );
}
