import Link from 'next/link';
import React from 'react'
import Container from './Container';
type TText = {
    h2: string;
    link: string;
    textLink: string;
}
export default function ProductSection({ text }: { text: TText }) {
    return (
        <Container>
            <div className='flex justify-between py-5 text-gray-500 text-2xl items-end'>
                <div className='flex flex-col'>
                    <h2 className='mb-2'>
                        {text.h2}
                    </h2>
                    <div className='bg-blue-300 w-40 h-1'></div>
                </div>
                <div className='flex flex-col '>
                    <Link href={`/${text.link}`} className='text-gray-500 text-2xl text-left'>{text.textLink}</Link>
                    <div className='bg-fuchsia-300 w-120 h-1'></div>
                </div>
            </div>
        </Container>
    )
}
