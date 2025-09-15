"use client"
import React from 'react'


export default function Top() {
    return (
        <div className="bg-fuchsia-100">
            <div className='py-8 flex items-center justify-center cursor-pointer max-w-fit mx-auto' onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                <img src={'/images/footer/arrow-circle-up-svgrepo-com.svg'} alt="arrow" className='w-16' />
                <span className='text-[20px]'>برگشت به بالا</span>
            </div>
        </div>
    )
}
