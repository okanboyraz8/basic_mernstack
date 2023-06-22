import React, { useState } from 'react'
import { loginAction, registerAction } from '../redux/actions/auth'
import { useDispatch } from 'react-redux'

const Auth = () => {
    const [signUp, setSignUp] = useState(true)
    const [authData, setAuthData] = useState({username: "", email: "", password: ""})
    const dispatch = useDispatch();

    const onChangeFunc = (e) => {
        setAuthData({...authData, [e.target.name] : e.target.value})                
    }
    console.log("authData", authData)

    const authFunc = () => {
        if(signUp){
            dispatch(registerAction(authData))
        }else{
            dispatch(loginAction(authData))
        }
    }

  return (
    <div className='w-full h-screen bg-gradient-to-r from-cyan-200 to-sky-200 flex items-center justify-center fixed top-0 right-0 bottom-0 left-0 z-50'>
        <div className='w-1/3 bg-slate-50 p-3 rounded-md'>
            <div className='flex items-center justify-center'>
                <img className='w-[150px]' src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
                <img className='w-[150px]' src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
            </div>
            <h1 className='text-center text-5xl font-bold text-gray-600 hover:text-blue-600'>{signUp ? "REGISTER" : "LOGIN"}</h1>
            <div className='flex flex-col space-y-3 my-5'>
                {signUp && <input value={authData.username} name="username" onChange={onChangeFunc} className='border p-2 rounded-md outline-none' type="text" placeholder='Username' />}
                <input value={authData.email} name="email" onChange={onChangeFunc} className='border p-2 rounded-md outline-none' type="text" placeholder='Email' />
                <input value={authData.password} name="password" onChange={onChangeFunc} className='border p-2 rounded-md outline-none' type="text" placeholder='Password' />
            </div>
            <div className='text-red-500 italic text-sm text-center cursor-pointer mb-2'>
                {
                    signUp ? <span onClick={()=>setSignUp(false)}>Have you logged in before?</span> : <span onClick={()=>setSignUp(true)}>Click to Register</span>
                }
            </div>
            <div onClick={authFunc} className='w-full p-2 text-center bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-md cursor-pointer hover:from-pink-500 hover:to-yellow-500'>{signUp ? "Register" : "Login"}</div>
        </div>
    </div>
  )
}

export default Auth