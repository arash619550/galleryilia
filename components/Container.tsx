import React from 'react'

export default function Container({ children }: { children: React.ReactNode }) {
    return (
        <div className='mx-auto max-w-172 md:max-w-364'>
            {children}
        </div>
    )
}
