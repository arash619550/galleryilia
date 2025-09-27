"use client"
import axios from "axios"
import Link from "next/link"
import { useRouter } from "next/navigation"
import React, { useContext, useId, useState } from "react"
import { loginContext } from "@/hooks/LoginFunction"
export default function Login() {
  const uniqueId = useId()
  const router = useRouter()
  const [mobile, setMobile] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const { login, setLogin } = useContext(loginContext)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await axios.post('https://nowruzi.top/api/User/Login', {
        mobile,
        password
      })
      if (res.data.isSuccess) {
        setLogin(true)
        router.push('/')
      }
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div className="bg-fuchsia-100 flex justify-center">
      <div className="flex flex-col bg-white rounded items-center min-w-96 mt-12 p-6 gap-4">
        <img src={'/images/logo/logo.webp'} alt="logo" className="w-28" />
        <h2 className="font-semibold text-2xl ml-auto">ورود / ثبت‌نام</h2>
        <form className="flex flex-col min-w-full px-2 gap-1" onSubmit={handleSubmit}>
          <label htmlFor={`${uniqueId}-mobile`} className="text-gray-500 outline-0">شماره موبایل خود را وارد نمایید</label>
          <input type="tel" value={mobile} id={`${uniqueId}-mobile`} className="outline-0 border border-gray-300 rounded text-left p-1 focus:bg-gray-50 " onChange={e => setMobile(e.target.value)} />
          <label htmlFor={`${uniqueId}-password`} className="text-gray-500 outline-0">رمز عبور خود را وارد نمایید</label>
          <input type="password" value={password} id={`${uniqueId}-password`} className="outline-0 border border-gray-300 rounded text-left p-1 focus:bg-gray-50 mb-2" onChange={e => setPassword(e.target.value)} />
          <button className="bg-rose-500 rounded text-white py-2" type="submit">ورود به گالری ایلیا</button>
        </form>
        <Link href={'/register'} className="bg-fuchsia-300  py-0.5 px-1.5 rounded text-white">ثبت نام</Link>
      </div>
    </div>
  )
}
