"use client"

import React, { createContext, useState } from "react";

type TName = {
    firstNameC: string;
    setFirstNameC: React.Dispatch<React.SetStateAction<string>>
}

export const nameContext = createContext<TName>({
    firstNameC: '',
    setFirstNameC: () => { }
})
export default function Name({ children }: { children: React.ReactNode }) {
    const [firstNameC, setFirstNameC] = useState('')
    return (
        <nameContext.Provider value={{ firstNameC, setFirstNameC }}>
            {children}
        </nameContext.Provider>
    )
}
