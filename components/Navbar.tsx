"use client"
import Link from 'next/link'
import React, { useState } from 'react'

export default function Navbar() {
    const [search, setSearch] = useState("")
    return (
        <div>
            <div className='bg-gray-200 flex gap-4 py-2 px-4 items-center'>
                <img src={'/images/navbar/burger-bar.png'} alt="burger bar" className='w-6 ' />
                <div className='relative bg-white w-150 rounded-md'>
                    <img src="/images/navbar/search-alt-1-svgrepo-com.svg" alt="search" className='w-6 top-1/2 -translate-y-1/2 right-4 absolute' />
                    <input type="text" placeholder='جستجو در محصولات...' value={search} onChange={e => setSearch(e.target.value)} className='py-2 px-11 h-11 w-full border-0 outline-0' />
                </div>
                <Link href={'/users/login'} className='bg-white p-2 rounded-md'>
                    <img src={'/images/navbar/person-svgrepo-com(1).svg'} alt="person" className='w-6' />
                </Link>
                <span>
                    <img src={'/images/navbar/shop-cart-svgrepo-com.svg'} alt="cart" className='w-6' />
                </span>
            </div>
        </div>
    )
}
