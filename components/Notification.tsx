import Link from 'next/link'
import React from 'react'
import styles from '../styles/animation.module.css'
export default function Notification() {
    return (
        <div className='bg-gray-400 overflow-hidden'>
            <Link href={'/'}>
                <p className={`text-center p-4 font-medium text-nowrap ${styles.marquee}`}>ساعت پاسخگویی از 13:00 ظهر به بعد جهت فروش عمده تماس بگیرید ۰۹۰۵۲۹۳۶۳۹۹ دوستان که نمیتوانند از درگاه استفاده کنند برای دریافت شماره کارت میتوانند تماس بگیرند
                </p>
            </Link>
        </div>
    )
}
