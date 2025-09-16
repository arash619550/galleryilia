"use client"
import Link from 'next/link'
import React, { useState } from 'react'

export default function Navbar() {
    const [search, setSearch] = useState("")
    return (
        <div>
            <div className='bg-gray-200 flex gap-2 py-2 px-4 items-center md:justify-between'>
                <div className='flex items-center gap-2 '>
                    <img src={'/images/navbar/burger-bar.png'} alt="burger bar" className='w-6 md:hidden' />
                    <img src={'/images/logo/logo.webp'} alt="logo" className='hidden md:block md:w-10' />
                    <div className='relative bg-white w-150 rounded-md'>
                        <img src="/images/navbar/search-alt-1-svgrepo-com.svg" alt="search" className='w-6 top-1/2 -translate-y-1/2 right-4 absolute' />
                        <input type="text" placeholder='جستجو در محصولات...' value={search} onChange={e => setSearch(e.target.value)} className='py-2 px-11 h-11 w-full border-0 outline-0' />
                    </div>
                </div>
                <div className='flex items-center gap-2 '>
                    <Link href={'/users/login'} className='bg-white p-2.5 rounded-md md:flex md:gap-1'>
                        <img src={'/images/navbar/person-svgrepo-com(1).svg'} alt="person" className='w-6' />
                        <span className='hidden md:inline '>ورود به حساب کاربری</span>
                    </Link>
                    <span>
                        <img src={'/images/navbar/shop-cart-svgrepo-com.svg'} alt="cart" className='w-6' />
                    </span>
                </div>
            </div>
            <div className='hidden md:flex bg-gray-200 gap-4 px-4 py-2'>
                <img src={'/images/navbar/burger-bar.png'} alt="burger bar" className='w-6' />
                <Link href={'/'}>دسته بندی کالا ها</Link>
                <Link href={'/'}>خانه</Link>
                <Link href={'/'}>همه محصولات</Link>
            </div>
        </div>
    )
}
