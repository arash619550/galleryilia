import React from 'react'

export default function Footer() {
    return (
        <div className='bg-[#edeff1]'>
            <div className="grid grid-cols-4 items-baseline gap-4 py-8">
                <div className="flex flex-col items-center">
                    <img src="/images/footer/ersal.svg" alt="ersal" className="w-16 h-16 mb-2" />
                    <span className="text-center">ارسال ویژه</span>
                </div>
                <div className="flex flex-col items-center">
                    <img src="/images/footer/poshtibani.svg" alt="poshtibani" className="w-16 h-16 mb-2" />
                    <span className="text-center">پشتیبانی ۲۴ ساعته</span>
                </div>
                <div className="flex flex-col items-center">
                    <img src="/images/footer/telegram-svgrepo-com.svg" alt="telegram" className="w-16 h-16 mb-2" />
                    <span className="text-center">کانال تلگرام مخصوص عمده<br></br> فروشان همکار</span>
                </div>
                <div className="flex flex-col items-center">
                    <img src="/images/footer/zemanat.svg" alt="zemanat" className="w-16 h-16 mb-2" />
                    <span className="text-center">ضمانت اصالت کالا</span>
                </div>
            </div>
            <hr className='text-gray-300 ' />
            <div className='grid grid-cols-5 place-items-center py-8 px-6 text-[18px]'>
                <div className=' h-24 flex md:items-center'><span>تماس با ما</span></div>
                <div className=' h-24 flex items-end md:items-center'><span>شکایات</span></div>
                <div className=' h-24 flex md:items-center'><span>درباره ما</span></div>
                <div className=' h-24 flex items-end md:items-center'><span>قوانین و مقررات</span></div>
                <div className=' h-24 flex md:items-center'><span>سیاست حریم خصوصی</span></div>
            </div>
            <hr className='text-gray-300 ' />
            <div className='flex justify-between px-10 py-4 md:justify-center md:gap-5'><span>هفت روز هفته ، از ساعت 1 ظهر تا 12 شب پاسخگوی شما هستیم</span><span>شماره تماس 09052936399</span></div>
            <div className='flex justify-center gap-1.5 items-center pb-4'>
                <img src="/images/footer/whatsapp-svgrepo-com.svg" alt="whatsapp" className='w-10 ' /><img src="/images/footer/telegram-svgrepo-com.svg" alt="telegram" className='w-10 ' />
            </div>
            <div className=' pt-6 bg-[#d8dee0] '>
                <div className='md:flex md:justify-between'>
                    <div className='pr-10 '>
                        <span>واردکننده بهترین برندهای لوازم دیجیتال<br />انواع هدفون، هدست ، ساعت هوشمند و... با نازل ترین قیمت بازار</span>
                    </div>
                    <div className='md:flex-col '>
                        <div className='flex gap-x-2 justify-center pt-12 md:pl-80 md:p-0'>
                            <img src="/images/footer/enamad.png" alt="enamad" className='bg-white' />
                            <img src="/images/footer/pardakht.svg" alt="pardakht" className='bg-white p-8' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#d8dee0] pt-2'>
                <hr className='mb-2 ' />
                <span className='text-center block pb-2'>استفاده از مطالب فروشگاه گالری ایلیا فقط برای مقاصد غیرتجاری و با ذکر منبع بلامانع است. کلیه حقوق این سایت محفوظ می‌باشد.</span>
            </div >
        </div>
    )
}
