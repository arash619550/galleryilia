"use client";
import { createContext, useState } from "react";

type TLogin = {
    login: boolean;
    setLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

export const loginContext = createContext<TLogin>({
    login: false,
    setLogin: () => { }
});
export const LoginFunction = ({ children }: { children: React.ReactNode }) => {
    const [login, setLogin] = useState(false);
    return (
        <loginContext.Provider value={{ login, setLogin }}>
            {children}
        </loginContext.Provider>
    );
};
