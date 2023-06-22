import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { createPostAction, updatePostAction } from '../redux/actions/post'
import { toast } from 'react-toastify'

const Modal = () => {
    const [postData, setPostData] = useState({user: "", title: "", description: ""})

    const dispatch = useDispatch();

    const { modal } = useSelector(state => state.modal)
    console.log("modal", modal)

    const onchangeFunc = (e) => {
        setPostData({...postData, [e.target.name] : e.target.value})
    }

    const postCreate = () => {
        if(modal?.updateId){
            dispatch(updatePostAction(modal?.updateId, postData))
        }else{
            dispatch(createPostAction(postData))
        }
        dispatch({type: 'MODAL', payload: false})
        toast("It was successfully added", {
            position: "top-right",
            autoClose: 5000,
        });    
    }

  return (
    <div className='w-full h-screen bg-opacity-50 bg-black fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center'>
        <div className='bg-white w-1/3 p-2 rounded-md'>
            <div onClick={()=> dispatch({type: 'MODAL', payload: false})} className='flex items-center justify-between cursor-pointer'>
                <h1 className='font-bold text-2xl'>{modal?.updateId ? "UPDATE POST" : "CREATE POST"}</h1>
                <AiOutlineClose size={20} />
            </div>
            <div className='my-4 flex flex-col space-y-3'>
                <input value={postData.user} name="user" onChange={onchangeFunc} className='border p-2 rounded-md outline-none' type="text" placeholder='User' />
                <input value={postData.title} name="title" onChange={onchangeFunc} className='border p-2 rounded-md outline-none' type="text" placeholder='Title' />
                <input value={postData.description} name="description" onChange={onchangeFunc} className='border p-2 rounded-md outline-none' type="text" placeholder='Description' />
            </div>
            <div onClick={postCreate} className='w-full p-2 text-center bg-gradient-to-r from-green-400 to-blue-500 text-white cursor-pointer hover:from-pink-500 hover:to-yellow-500'>{modal?.updateId ? "Update" : "Share"}</div>
        </div>
    </div>
  )
}

export default Modal