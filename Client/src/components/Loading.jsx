import React from 'react'
import loading from '../assets/gifts.gif'

const Loading = ({text}) => {
  return (
    <div className='flex justify-center items-center flex-col text-white bg-gray-900 h-screen'>
        <img src={loading} className='w-52 md:w-96' alt="" />
        <h2 className='text-2xl font-playwrite-ng'>{text}</h2>
    </div>
  )
}

export default Loading
