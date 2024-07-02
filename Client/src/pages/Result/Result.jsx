import React, { useEffect, useState } from 'react'
import Heading from '../../components/Heading'
import Details from '../../components/Details'
import { useLocation, useNavigate } from 'react-router-dom'
import Loading from '../../components/Loading'
import { toast } from 'sonner'

const Result = ({flag}) => {

    const [isLoading,setIsLoading] = useState(true)

    const navigate = useNavigate()
    const location = useLocation();

    const {wish} = location?.state || {}

    console.log('state pased',`${window.location.protocol}//${window.location.hostname}${window.location.port ? `:${window.location.port}` : ''}`)
    const baseUrl = `${window.location.protocol}//${window.location.hostname}${window.location.port ? `:${window.location.port}` : ''}`
    const link = `${baseUrl}/wish/${wish.params}`

    useEffect(()=>{
        if(!location?.state){
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

        const copyToClipboard = () => {
          navigator.clipboard.writeText(link).then(() => {
            toast.success('Link copied to clipboard')
          }).catch((err) => {
            console.error('Failed to copy: ', err);
          });
        };





    return (
        <div className='flex items-center w-full min-h-screen flex-col bg-gray-900 p-10'>
            <Heading />
            <Details />
            <div className='py-10 text-white font-playwrite-au'>
                <h2 className='text-xl md:text-4xl'>Your wish page generated</h2>
                <div className='flex justify-center py-6 gap-3'>
                    <div className='bg-black p-2 rounded-md cursor-pointer' onClick={copyToClipboard}>
                        <h2 >Copy Link</h2>
                    </div>
                    <div className='bg-black p-2 rounded-md cursor-pointer'>
                        <a href={`/wish/${wish.params}`} target='_blank'>Go to page</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Result
