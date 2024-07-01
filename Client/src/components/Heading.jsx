import React from 'react'
import pastry from '../assets/Pastry.gif'


const Heading = () => {
  return (
    <div className='text-white font-playwrite-ng text-center space-y-4'>
                <div className='flex justify-center items-center'>
                    <img src={pastry} className='w-10 md:w-20' alt="candle" />
                    <h1 className='text-3xl md:text-5xl font-bold'>Birthday Wish</h1>
                    <img src={pastry} className='w-10 md:w-20' alt="candle" />
                </div>
                <p className='md:text-2xl'>Make your favourite ones birthday wishes different.</p>
            </div>
  )
}

export default Heading
