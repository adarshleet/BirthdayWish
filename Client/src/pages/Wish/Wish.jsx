import React from 'react'
import background from '../../assets/friend-background.jpg'
import './wish.css'

const Wish = () => {
    return (
        <div className="wish-container">
            <div className="background-blur"></div>
            <div className="content flex flex-col items-center">
                <div className='rounded-full overflow-hidden w-52 h-52 mb-4'>
                    <img
                        src="https://media.istockphoto.com/id/1445226966/photo/girl-friends-hug-and-travel-summer-vacation-outdoors-on-safari-diverse-happy-gen-z-women.jpg?s=612x612&w=0&k=20&c=z_DETd4pW-4bdmIu57CDRqZ56Y6uydUl55VPRsoKXtM="
                        alt=""
                        className="object-cover w-full h-full"
                    />
                </div>
               <div className='font-playwrite-au p-4 space-y-3 md:w-1/3 bg-white bg-opacity-10'>
               <h1 className='text-3xl md:text-4xl text-red-700  font-bold'>Happy Birthday Alice</h1>
               <p className='text-slate-500'>Biscuit macaroon gummies danish bear claw wafer. Muffin shortbread chupa chups chupa chups jujubes pie jelly beans topping. Cupcake cupcake biscuit liquorice toffee sweet. Chupa chups brownie sesame snaps lollipop shortbread biscuit macaroon pie caramels.</p>
               </div>
            </div>
        </div>
    )
}

export default Wish
