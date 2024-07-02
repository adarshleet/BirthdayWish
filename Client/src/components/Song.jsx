import React from 'react'
import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player/youtube'

const Song = () => {

    const [flag, setFlag] = useState(false)
    const [link, setLink] = useState('')
    const [time, setTime] = useState('')


    return (
        <>
            <div className='p-4 flex gap-4'>
                <input type="text" placeholder='song link' className='p-2' onChange={(e) => setLink(e.target.value)} value={link} />
                <input type="text" placeholder='start time' className='p-2' onChange={(e) => setTime(e.target.value)} value={time} />
                <button className='bg-green-600 p-4 text-white' onClick={() => setFlag(true)}>Play</button>
            </div>
            <ReactPlayer url={`${link}?start=${time}`} playing={true} loop={true} width={0} height={0} controls={true} />
            <div onClick={() => setFlag(true)}>
                <p>{flag ? 'true' : 'false'}</p>
            </div>
        </>
    )
}

export default Song
