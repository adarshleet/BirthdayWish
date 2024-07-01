import React, { useState } from 'react'
import Form from '../../components/Form'
import Details from '../../components/Details'
import Loading from '../../components/Loading'
import Heading from '../../components/Heading'

const Home = () => {

    const [isLoading,setIsLoading] = useState(true)

    setTimeout(() => {
        setIsLoading(false)
    }, 4000);

    if(isLoading){
        return(
            <Loading text={'Loading...'}/>
        )
    }

    return (
        <div className='flex items-center w-full min-h-screen flex-col bg-gray-900 p-10'>
            <Heading/>
            <Details/>
            <Form/>
        </div>
    )
}

export default Home
