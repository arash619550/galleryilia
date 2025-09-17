import Container from '@/components/Container'
import React from 'react'

export default function page() {
    return (
        <div className='bg-fuchsia-100 pt-16 '>
            <Container>
                <div className='grid grid-cols-1 bg-white py-2 px-4'>
                    <div className='flex flex-col gap-2'>
                        <span className='font-semibold'>جستجو در نتایج</span>
                        <hr className='text-gray-300' />
                        <div className='relative '>
                            <img src="/images/navbar/search-alt-1-svgrepo-com.svg" alt="search" className='w-6 absolute top-1/2 -translate-y-1/2 right-1' />
                            <input type="text" placeholder='نام محصول یا برند مورد نظر را بنویسید...' className='w-full outline-0 border-0 pr-8 bg-gray-100 py-1.5 px-2 rounded' />
                        </div>
                    </div>
                </div>
                <div></div>
            </Container>

        </div>
    )
}
