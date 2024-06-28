import React from 'react'
import pastry from '../../assets/Pastry.gif'
import Form from '../../components/Form'

const Home = () => {
    return (
        <div className='flex items-center w-full min-h-screen flex-col bg-gray-900 p-10'>
            <div className='text-white font-playwrite-ng text-center space-y-4'>
                <div className='flex justify-center items-center'>
                    <img src={pastry} className='w-10 md:w-20' alt="candle" />
                    <h1 className='text-3xl md:text-5xl'>Birthday Wish</h1>
                    <img src={pastry} className='w-10 md:w-20' alt="candle" />
                </div>
                <p className='md:text-2xl'>Make your favourite ones birthday wishes different.</p>
            </div>
            <Form/>
        </div>
    )
}

export default Home
