import React from 'react'
import background from '../../assets/friend-background.jpg'
import balloons from '../../assets/blackRedBalloons.png'
import './wish.css'

const Wish = () => {
    return (
        <div className="wish-container overflow-hidden ">
            <div className="background-blur"></div>
            <div className="content flex flex-col items-center">
                <div className='rounded-full overflow-hidden w-52 h-52'>
                    <img
                        src="https://media.istockphoto.com/id/1445226966/photo/girl-friends-hug-and-travel-summer-vacation-outdoors-on-safari-diverse-happy-gen-z-women.jpg?s=612x612&w=0&k=20&c=z_DETd4pW-4bdmIu57CDRqZ56Y6uydUl55VPRsoKXtM="
                        alt=""
                        className="object-cover w-full h-full"
                    />
                </div>
                <div className='font-playwrite-au p-4 space-y-3 lg:w-1/2 '>
                    <h1 className='text-3xl lg:text-5xl text-red-700  font-bold -mb-6'>Happy Birthday Alice</h1>
                    <div className=''>
                    {/* <img src={balloons} width={200} alt="" className='relative -left-20 bottom-20'/> */}
                    <div className='bg-white bg-opacity-70 pt-8 p-4 rounded-xl'>
                        <p className='text-slate-500 lg:text-xl'>You are mine forever. Wishing you all the success in your life. I will be there at every step as your supporter. We will be together for life, through the fights and the love. We will make our dreams come true. Happy birthday, my love.</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Wish
