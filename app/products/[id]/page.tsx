import React from 'react'
import { allProducts } from '@/data/products'
import Container from '@/components/Container'
import Link from 'next/link'

export default function page({ params }: { params: { id: number } }) {
  const { id } = params
  const product = allProducts.find(item => (item.id == id))
  if (!product) {
    return (
      <div className='bg-fuchsia-100 text-center md:text-2xl' >
        <div >محصول پیدا نشد</div>
        <Link href={'/'} >بازگشت به خانه</Link>
      </div>
    )
  }
  return (
    <div className='bg-fuchsia-100 pt-6'>
      <Container>
        <div className='bg-white'>
          <div className='pr-4'>
            <img src={product.src} alt={product.alt} className='w-96 mx-auto py-2 mb-4' />
            <h2 className='font-bold text-2xl pb-4'>{product.name}</h2>
          </div>
        </div>
      </Container>
      <div className='fixed bottom-0 w-full bg-white py-4 pr-2 flex justify-between pl-20 items-center'>
        <button className='bg-rose-500 text-white rounded py-3 px-24'>افزودن به سبد خرید</button>
        <h3>{product.price}&nbsp;تومان</h3>
      </div>
    </div>
  )
}
