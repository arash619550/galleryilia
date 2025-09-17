import React from 'react'
import Container from './Container'
import Link from 'next/link'

export default function Product() {
    const product1 = [
        {
            id: 1,
            name: 'محصول ۱',
            src: '/images/products/product1/1.webp',
            alt: 'عکس محصول ۱',
            link: '/smartwatch'
        },
        {
            id: 2,
            name: 'محصول ۲',
            src: '/images/products/product1/2.webp',
            alt: 'عکس محصول ۲',
            link: '/powerbank'

        },
        {
            id: 3,
            name: 'محصول ۳',
            src: '/images/products/product1/3.webp',
            alt: 'عکس محصول ۳',
            link: '/headphone'

        },
        {
            id: 4,
            name: 'محصول ۴',
            src: '/images/products/product1/4.webp',
            alt: 'عکس محصول ۴',
            link: '/speaker'

        },

    ]
    return (
        <Container >
            <div className='flex flex-row justify-center gap-x-2 pt-6 '>
                {product1.map(item => (
                    <Link href={`${item.link}`} key={item.id}>
                        <img src={item.src} alt={item.alt} className='w-42 rounded-3xl md:w-84' />
                    </Link>
                ))}
            </div>

        </Container>
    )
}
