"use client"
import axios from "axios"
import { useRouter } from "next/navigation"
import React, { useId, useState } from "react"
export default function Register() {
  const uniqueId = useId()
  const router = useRouter()
  const [mobile, setMobile] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await axios.post('https://nowruzi.top/api/User/Register', {
        mobile,
        password,
        firstName,
        lastName,
      })
      router.push('/login')
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
          <input type="tel" id={`${uniqueId}-mobile`} value={mobile} onChange={e => setMobile(e.target.value)} className="outline-0 border border-gray-300 rounded text-left p-1 focus:bg-gray-50 " />
          <label htmlFor={`${uniqueId}-password`} className="text-gray-500 outline-0">رمز عبور خود را وارد نمایید</label>
          <input type="password" id={`${uniqueId}-password`} value={password} onChange={e => setPassword(e.target.value)} className="outline-0 border border-gray-300 rounded text-left p-1 focus:bg-gray-50 mb-2" />
          <label htmlFor={`${uniqueId}-firstName`} className="text-gray-500 outline-0">اسم خود را وارد نمایید</label>
          <input type="text" id={`${uniqueId}-firstName`} value={firstName} onChange={e => setFirstName(e.target.value)} className="outline-0 border border-gray-300 rounded text-left p-1 focus:bg-gray-50 mb-2" />
          <label htmlFor={`${uniqueId}-lastName`} className="text-gray-500 outline-0">فامیلی خود را وارد نمایید</label>
          <input type="text" id={`${uniqueId}-lastName`} value={lastName} onChange={e => setLastName(e.target.value)} className="outline-0 border border-gray-300 rounded text-left p-1 focus:bg-gray-50 mb-2" />
          <button className="bg-rose-500 rounded text-white py-2" type="submit">ورود به گالری ایلیا</button>
        </form>
      </div>
    </div>
  )
}
