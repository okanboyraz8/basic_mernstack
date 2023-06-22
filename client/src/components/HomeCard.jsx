import React from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import { GrUpdate } from 'react-icons/gr'
import { useDispatch } from 'react-redux'
import { deletePostAction } from '../redux/actions/post'
import { toast } from 'react-toastify'


const HomeCard = ({post}) => {
    const dispatch = useDispatch();

    const deletePost = (id) => {
        dispatch(deletePostAction(id))
        toast("It has been successfully deleted", {
            position: "top-right",
            autoClose: 5000,
        });  
    }

    const updatePost = (id) => {
        dispatch({type: 'MODAL', payload: {open: true, updateId: id}})
    }

  return (
    <div className='relative w-1/5 border p-3 m-3 rounded-md bg-sky-100'>
        <div className='font-bold text-xl'> {post?.title} </div>
        <div className='text-gray-700 text-sm'> {post?.description} </div>
        <div className='flex items-center justify-between mt-4'>
            <span className='text-xs text-gray-500'> {post?.user} </span>
            <span className='text-xs text-gray-500'> {(post?.date)?.substring(0,10)} </span>
        </div>
        <div className='absolute -top-3 -right-3 flex items-center space-x-4'>
            <AiOutlineDelete onClick={() => deletePost(post._id)} size={25} className='bg-red-500 rounded-full text-white p-1 cursor-pointer' />
            <GrUpdate onClick={() => updatePost(post._id)} size={25} className='bg-red-500 rounded-full text-white p-1 cursor-pointer' />         
        </div>
    </div>
  )
}

export default HomeCard