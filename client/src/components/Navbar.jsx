import React from 'react'
import { BiLogOut } from 'react-icons/bi'
import { BsFilePost } from 'react-icons/bs'
import { AiOutlineSearch } from 'react-icons/ai'
import { useDispatch } from 'react-redux'


const Navbar = () => {
  const dispatch = useDispatch();

  const logoutFunc = () => {
    localStorage.clear();
    window.location = "/auth"
  }

  const openModal = () => {
    dispatch({type: 'MODAL', payload: true})
  }

  return (
    <div className='h-30 bg-gradient-to-r from-cyan-400 to-sky-400 flex items-center justify-between px-5'>
        <div className='flex items-center justify-center'>
            <img className='w-[80px] rounded-full' src="https://images.unsplash.com/photo-1528329140527-75853b1e1650?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80" alt="" />
            <BsFilePost size={30} className='text-black' />
            <div className='decoration-stone-700 font-bold text-2xl underline decoration-indigo-900 cursor-pointer'>SharesPost</div>
        </div>
        <div className='flex items-center space-x-5'>
            <div className='flex items-center justify-center'>
                <input className='p-2 outline-none rounded-md' type="text" placeholder='Search' />
                <AiOutlineSearch size={30} className='text-black' />
            </div>
            <div onClick={openModal} className='w-36 border border-stone-900 p-2 rounded-md text-center font-bold cursor-pointer hover:opacity-30'>Create Post</div>
            <BiLogOut onClick={logoutFunc} size={30} className='text-black cursor-pointer' />
        </div>
    </div>
  )
}

export default Navbar