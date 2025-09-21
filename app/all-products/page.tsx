'use client';
import { useState } from 'react'
import Container from '@/components/Container'
import { smartWatch, headphone, powerbank, speaker, allProducts } from '@/data/products'
import Link from 'next/link'
export default function AllProducts() {
    const [minPrice, setMinPrice] = useState(0)
    const [maxPrice, setMaxPrice] = useState(100000000)
    const [sortOrder, setSortOrder] = useState<'cheap' | 'expensive'>('cheap')
    const allProducts = [...smartWatch, ...powerbank, ...headphone, ...speaker]
    const filteredProducts = allProducts.filter(p => p.price >= minPrice && p.price <= maxPrice)
        .sort((a, b) => sortOrder === "cheap" ? a.price - b.price : b.price - a.price)
    return (
        <div className='bg-fuchsia-100 pt-16'>
            <Container>
                <div className='md:grid md:grid-cols-7 md:gap-6'>
                    <div className='md:col-span-2'>
                        <div className=' bg-white py-2 px-4 mb-2 '>
                            <div className='flex flex-col gap-2'>
                                <span className='font-semibold'>جستجو در نتایج</span>
                                <hr className='text-gray-300' />
                                <div className='relative'>
                                    <img src="/images/navbar/search-alt-1-svgrepo-com.svg" alt="search" className='w-6 absolute top-1/2 -translate-y-1/2 right-1' />
                                    <input type="text" placeholder='نام محصول یا برند مورد نظر را بنویسید...' className='w-full outline-0 border-0 pr-8 bg-gray-100 py-1.5 px-2 rounded' />
                                </div>
                            </div>
                        </div>
                        <div className='bg-white p-2 mb-2'>
                            <h2 className='font-semibold mb-2'>دسته بندی</h2>
                            <ul className='text-gray-700'>
                                <li className='mb-1'><Link href="/all-products/smartwatch">ساعت هوشمند</Link></li>
                                <li className='mb-1'><Link href="/all-products/powerbank">پاور بانک</Link></li>
                                <li className='mb-1'><Link href="/all-products/headphone">هدفون</Link></li>
                                <li className='mb-1'><Link href="/all-products/speaker">اسپیکر</Link></li>
                            </ul>
                        </div>
                        <div className='bg-white p-2 mb-2'>
                            <h3 className='font-semibold mb-2'>محدوده قیمت</h3>
                            <hr className='text-gray-300 mb-2' />
                            <div className='flex justify-between md:gap-2'>
                                <span>از</span>
                                <input type="number" value={minPrice} onChange={e => setMinPrice(Number(e.target.value))} className='w-[45%] outline-0 text-center border-1 rounded border-gray-300' />
                                <span>تا</span>
                                <input type="number" value={maxPrice} onChange={e => setMaxPrice(Number(e.target.value))} className='w-[45%] outline-0 text-center border-1 rounded border-gray-300' />
                                <span>تومان</span>
                            </div>
                        </div>
                        <div className='bg-white px-2 pt-2 mb-2 md:hidden'>
                            <div className='flex justify-between items-center pb-2'>
                                <div className='flex gap-1.5'>
                                    <span>مرتب‌سازی براساس:</span>
                                    <select className='border rounded border-gray-300' value={sortOrder} onChange={e => setSortOrder(e.target.value as 'cheap' | 'expensive')}>
                                        <option value="cheap">ارزان‌ترین</option>
                                        <option value="expensive">گران‌ترین</option>
                                    </select>
                                </div>
                                <div>
                                    <span>{allProducts.length}&nbsp;کالا</span>
                                </div>
                            </div>
                            <hr className='text-gray-300' />
                        </div>
                    </div>
                    <div className='md:col-span-5'>
                        <div className='hidden md:flex justify-between bg-white p-4'>
                            <div className='flex gap-2.5'>
                                <span>مرتب سازی براساس:</span>
                                <span onClick={e => setSortOrder('cheap')} className='cursor-pointer'>ارزان‌ترین</span>
                                <span onClick={e => setSortOrder('expensive')} className='cursor-pointer'>گران‌ترین</span>
                            </div>
                            <h3>{allProducts.length}&nbsp;کالا</h3>
                        </div>
                        <div className='bg-white grid grid-cols-2 md:grid-cols-4'>
                            {filteredProducts.map(item => (
                                <div key={item.id} className='flex flex-col p-4 items-center pb-8 border border-gray-300 '>
                                    <img src={item.src} alt={item.alt} className='w-50 mb-1.5' />
                                    <h3 className='w-full mb-1.5'>{item.name}</h3>
                                    <div className='flex mr-auto items-baseline'>
                                        <h4 className='text-left w-full mb-1.5 font-semibold text-lg'>{item.price}</h4>&nbsp;<span>تومان</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </div >
    )
}
