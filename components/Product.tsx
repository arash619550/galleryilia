import React, { Children } from 'react'
import Container from './Container'

export default function Product() {
    const product1 = [
        {
            id: 1,
            name: 'محصول ۱',
            src: '/images/products/product1/1.webp',
            alt: 'عکس محصول ۱'
        },
        {
            id: 2,
            name: 'محصول ۲',
            src: '/images/products/product1/2.webp',
            alt: 'عکس محصول ۲'
        },
        {
            id: 3,
            name: 'محصول ۳',
            src: '/images/products/product1/3.webp',
            alt: 'عکس محصول ۳'
        },
        {
            id: 4,
            name: 'محصول ۴',
            src: '/images/products/product1/4.webp',
            alt: 'عکس محصول ۴'
        },

    ]
    return (
        <Container>
            <div className='flex flex-row justify-center gap-x-2 pt-6'>
                {product1.map(item => (
                    <img src={item.src} alt={item.alt} className='w-52' />
                ))}
            </div>

        </Container>
    )
}
