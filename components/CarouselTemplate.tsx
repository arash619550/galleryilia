'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Container from './Container';
import { useParams } from 'next/navigation';
import Link from 'next/link';

type TProduct = {
    id: number;
    name: string;
    src: string;
    alt: string;
    price: number;
}
export default function CarouselTemplate({ product, banner }: { product: TProduct[], banner: string }) {

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
                                <div className="p-4 rounded-lg bg-white text-center flex flex-col hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-rose-200">
                                    <img src={p.src} alt={p.alt} className="w-full object-contain rounded-md mb-1" />
                                    <h3 className="font-medium min-h-16">{p.name}</h3>
                                    <h4 className='text-left'><span className='font-semibold'>{p.price}&nbsp;</span>تومان</h4>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <img src={banner} alt="banner1" className='mt-4 rounded-lg object-cover w-full max-h-72' />
            </Container>
        </div>
    );
}
