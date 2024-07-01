import React, { useEffect, useState } from 'react'
import background from '../../assets/friend-background.jpg'
import balloons from '../../assets/blackRedBalloons.png'
import './wish.css'
import Api from '../../api/api'
import { useParams } from 'react-router-dom'

const Wish = () => {
    const [wish,setWish] = useState(null)

    const { id } = useParams();

    useEffect(()=>{
        const fetchData = async()=>{
            const res = await Api.get(`/getWish?id=${id}`)
            console.log(res.data.wish)
            setWish(res.data.wish)
        }
        fetchData()
    },[])

    return (
        <div className="wish-container overflow-hidden ">
            <div className="background-blur"></div>
            <div className="content flex flex-col items-center">
                <div className='rounded-full overflow-hidden w-52 h-52 drop-shadow-2xl floating border '>
                    <img
                        src={`http://localhost:3000/images/${wish?.image?.filename}`}
                        // src="https://media.istockphoto.com/id/1445226966/photo/girl-friends-hug-and-travel-summer-vacation-outdoors-on-safari-diverse-happy-gen-z-women.jpg?s=612x612&w=0&k=20&c=z_DETd4pW-4bdmIu57CDRqZ56Y6uydUl55VPRsoKXtM="
                        alt="dd"
                        className="object-cover w-full h-full"
                    />
                </div>
                <div className='font-playwrite-au p-4 space-y-3 lg:w-1/2 '>
                    <h1 className='text-3xl lg:text-5xl   font-bold -mb-6'>Happy Birthday <span className='capitalize'>{wish?.name}</span></h1>
                    <div className=''>
                    {/* <img src={balloons} width={200} alt="" className='relative -left-20 bottom-20'/> */}
                    <div className='bg-white bg-opacity-70 pt-8 p-4 rounded-xl'>
                        <p className='text-slate-500 lg:text-xl'>{wish?.wish}</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Wish
