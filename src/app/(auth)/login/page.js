import LoginForm from '@/components/LoginComponents'
import React from 'react'

function page() {
  return (
    <div className="flex w-full h-screen">
    <div className="w-2/6 h-full">
       <img className="w-full h-full object-cover" src= "/assests/bn.png" alt ="auth preview" />
    </div>
    <div className="w-4/6 flex justify-center">
        <LoginForm/>
    </div>
    </div>
  )
}

export default page