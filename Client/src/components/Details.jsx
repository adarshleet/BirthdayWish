import React from 'react'
import coffee from '../assets/coffee.png'

const Details = () => {
    return (
        <div className='flex pt-3 gap-2 text-xs md:text-base'>
            <div className='bg-[#d4ef0b] text-gray-700 font-semibold p-2 rounded-md '>
                <a href="https://www.adarshraveendran.in" target='_blank'>Adarshraveendran.in</a>
            </div>
            <div className='bg-[#d4ef0b] text-gray-700 font-semibold p-2 rounded-md'>
                <a href="https://github.com/adarshleet/BirthdayWish" target='_blank'>Contibute</a>
            </div>
            {/* <div className='bg-[#d4ef0b] text-gray-700 font-semibold p-2 rounded-md flex items-center'>
                <img className='w-[10px]' src={coffee} alt="" />
                <h2 className=''>Buy me a coffee</h2>
            </div> */}
        </div>
    )
}

export default Details
