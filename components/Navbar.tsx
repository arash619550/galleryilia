"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function Navbar() {
    const [search, setSearch] = useState("")
    const [menuOpen, setMenuOpen] = useState(false)
    const [vh, setVh] = useState(0)
    const [scrollY, setScrollY] = useState(0)


    useEffect(() => {
        setVh(window.innerHeight)
        const handleScroll = () => setScrollY(window.scrollY)
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])
    return (
        <div>
            <div className='bg-gray-200 flex gap-2 py-2 px-4 items-center md:justify-between'>
                <div className='flex items-center gap-2 '>
                    <img src={'/images/navbar/burger-bar.png'} alt="burger bar" className='w-6 md:hidden' onClick={() => setMenuOpen(!menuOpen)} />
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
                <div onClick={() => setMenuOpen(!menuOpen)}>
                    <Link href={'/'} className='flex gap-1' ><img src={'/images/navbar/burger-bar.png'} alt="burger bar" className='w-6 ' /> دسته بندی کالا ها</Link>
                </div>
                <Link href={'/'}>خانه</Link>
                <Link href={'/'}>همه محصولات</Link>
            </div>
            {menuOpen && vh >= scrollY &&
                <div className='flex flex-col p-4 z-2 bg-fuchsia-200 max-w-140 fixed top-0 w-140 h-screen md:hidden'>
                    <img src="/images/navbar/close-circle-svgrepo-com.svg" alt="close" className='w-8 md:hidden' onClick={() => setMenuOpen(!menuOpen)} />
                    <img src="/images/logo/logo.webp" alt="logo" className='w-16 self-center md:hidden' />
                    <ul>
                        <li><Link href={'/smartwatch'}>ساعت هوشمند</Link></li>
                        <li><Link href={'/powerbank'}>پاور بانک</Link></li>
                        <li><Link href={'/headphone'}>هدفون</Link></li>
                        <li><Link href={'/speaker'}>اسپیکر</Link></li>
                    </ul>
                </div>
            }
            {
                menuOpen &&
                <div className='hidden md:block relative'>
                    <div className='absolute bg-white w-40 pr-6'>
                        <img src="/images/navbar/close-circle-svgrepo-com.svg" alt="close" className='w-8 md:hidden' onClick={() => setMenuOpen(!menuOpen)} />
                        <img src="/images/logo/logo.webp" alt="logo" className='w-16 self-center md:hidden' />
                        <ul className=''>
                            <li className='py-4 '>
                                <Link href={'/smartwatch'} className='flex'>ساعت هوشمند
                                    <img src="/images/navbar/arrow-sm-left-svgrepo-com.svg" className='w-6 mr-auto ml-1.5' alt="arrow" />
                                </Link>
                            </li>
                            <li className='py-4 '>
                                <Link href={'/powerbank'} className='flex' >پاور بانک
                                    <img src="/images/navbar/arrow-sm-left-svgrepo-com.svg" className='w-6  mr-auto ml-1.5' alt="arrow" /></Link>
                            </li>
                            <li className='py-4 '>
                                <Link href={'/headphone'} className='flex'>هدفون
                                    <img src="/images/navbar/arrow-sm-left-svgrepo-com.svg" className='w-6  mr-auto ml-1.5' alt="arrow" /></Link>
                            </li>
                            <li className='py-4 '>
                                <Link href={'/speaker'} className='flex ' >اسپیکر
                                    <img src="/images/navbar/arrow-sm-left-svgrepo-com.svg" className='w-6 mr-auto ml-1.5' alt="arrow" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            }
        </div >
    )
}
