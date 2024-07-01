import React, { useEffect, useState } from 'react'
import Heading from '../../components/Heading'
import Details from '../../components/Details'
import { useNavigate } from 'react-router-dom'
import Loading from '../../components/Loading'

const Result = ({flag}) => {

    const [isLoading,setIsLoading] = useState(true)

    const navigate = useNavigate()

    useEffect(()=>{
        if(!flag){
            navigate('/')
        }
    },[])
    

    setTimeout(() => {
        setIsLoading(false)
    }, 4000);

    if(isLoading){
        return(
            <Loading text={'Generating your wish...'}/>
        )
    }





    return (
        <div className='flex items-center w-full min-h-screen flex-col bg-gray-900 p-10'>
            <Heading />
            <Details />
            <div className='py-10 text-white font-playwrite-au'>
                <h2 className='text-xl md:text-4xl'>Your wish page generated</h2>
                <div className='flex justify-center py-6 gap-3'>
                    <div className='bg-black p-2 rounded-md cursor-pointer'>
                        <h2>Copy Link</h2>
                    </div>
                    <div className='bg-black p-2 rounded-md cursor-pointer'>
                        <h2>Go to page</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Result
