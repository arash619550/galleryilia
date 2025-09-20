import Container from '@/components/Container'
import { smartWatch, headphone, powerbank, speaker } from '@/data/products'
import Link from 'next/link'
export default function AllProducts() {
    return (
        <div className='bg-fuchsia-100 pt-16 '>
            <Container>
                <div className='grid grid-cols-1 bg-white py-2 px-4 mb-2'>
                    <div className='flex flex-col gap-2'>
                        <span className='font-semibold'>جستجو در نتایج</span>
                        <hr className='text-gray-300' />
                        <div className='relative '>
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
                    <div className='flex justify-between'>
                        <span>از</span>
                        <input type="number" value={0} max={100000000} className='w-[45%] text-center border-1 rounded border-gray-300' />
                        <span>تا</span>
                        <input type="number" value={100000000} min={0} className='w-[45%] text-center border-1 rounded border-gray-300' />
                        <span>تومان</span>
                    </div>
                </div>
                <div className='bg-white px-2 pt-2'>
                    <div className='flex justify-between items-center pb-2'>
                        <div className='flex gap-1.5'>
                            <span>مرتب‌سازی براساس:</span>
                            <select className='border rounded border-gray-300'>
                                <option value="">ارزانترین</option>
                                <option value="">گرانترین</option>
                            </select>
                        </div>
                        <div>
                            <span>کالا</span>
                        </div>
                    </div>
                    <hr className='text-gray-300' />
                </div>
                <div className='bg-white grid grid-cols-2 '>
                    {smartWatch.map(item => (
                        <div className='flex flex-col p-4 items-center pb-8 border border-gray-300'>
                            <img src={item.src} alt={item.alt} className='w-50 mb-1.5' />
                            <h3 className='w-full mb-1.5'>{item.name}</h3>
                            <div className='flex mr-auto'><h4 className='text-left w-full mb-1.5 font-semibold'>{item.price}</h4>&nbsp;<span>تومان</span>
                            </div>
                        </div>
                    ))}
                    {powerbank.map(item => (
                        <div className='flex flex-col p-4 items-center pb-8 border border-gray-300'>
                            <img src={item.src} alt={item.alt} className='w-50 mb-1.5' />
                            <h3 className='w-full mb-1.5'>{item.name}</h3>
                            <div className='flex mr-auto'><h4 className='text-left w-full mb-1.5 font-semibold'>{item.price}</h4>&nbsp;<span>تومان</span>
                            </div>
                        </div>
                    ))}
                    {headphone.map(item => (
                        <div className='flex flex-col p-4 items-center pb-8 border border-gray-300'>
                            <img src={item.src} alt={item.alt} className='w-50 mb-1.5' />
                            <h3 className='w-full mb-1.5'>{item.name}</h3>
                            <div className='flex mr-auto'><h4 className='text-left w-full mb-1.5 font-semibold'>{item.price}</h4>&nbsp;<span>تومان</span>
                            </div>
                        </div>
                    ))}
                    {speaker.map(item => (
                        <div className='flex flex-col p-4 items-center pb-8 border border-gray-300'>
                            <img src={item.src} alt={item.alt} className='w-50 mb-1.5' />
                            <h3 className='w-full mb-1.5'>{item.name}</h3>
                            <div className='flex mr-auto'><h4 className='text-left w-full mb-1.5 font-semibold'>{item.price}</h4>&nbsp;<span>تومان</span>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}
