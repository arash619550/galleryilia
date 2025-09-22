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
    <div className='bg-fuchsia-100 pt-3.5'>
      <Container>
        <div className='bg-white pt-6 md:grid grid-cols-9'>
          <div className='bg-white md:flex col-span-3'>
            <div className='pr-4 md:flex '>
              <img src={product.src} alt={product.alt} className='w-96 mx-auto py-2 mb-4 ' />
              <h2 className='font-bold text-2xl pb-4 md:text-nowrap'>{product.name}</h2>
            </div>
          </div>
          <div className='hidden md:flex flex-col justify-around p-4 bg-white border border-gray-300 max-h-52 col-span-6 rounded mr-auto ml-4'>
            <div className='flex flex-col gap-2'>
              <div className='flex gap-2'>
                <img src={'/images/ect-photo/available-calendar-date-svgrepo-com.svg'} alt="available" className='w-6' />
                <h4>موجود در انبار گالری ایلیا</h4>
              </div>
              <div className='flex gap-2'>
                <img src={'/images/ect-photo/clock-svgrepo-com.svg'} alt="clock" className='w-6' />
                <h4>ارسال از امروز</h4>
              </div>
            </div>
            <hr className='text-gray-300' />
            <div className='hidden md:flex items-center gap-4'>
              <button className='text-white text-2xl bg-rose-500 rounded py-2 px-3 '>افزودن به سبد خرید</button>
              <div className='flex'>
                <h4 className='font-semibold'>{product.price}&nbsp;</h4>
                <span>تومان</span>
              </div>
            </div>
            <h4 className='hidden md:block'>مشاهده محصول در <Link href={'/cart'} className='text-cyan-500'>سبد خرید</Link></h4>
          </div>
        </div>
      </Container>
      <div className='border-0 md:hidden'>
        <div className='fixed bottom-0 w-full bg-white py-4 pr-2 flex justify-between pl-20 items-center '>
          <button className='bg-rose-500 text-white rounded py-3 px-24'>افزودن به سبد خرید</button>
          <h3>{product.price}&nbsp;تومان</h3>
        </div>
      </div>
    </div>
  )
}
