import React, { useRef, useState } from 'react'
import { toast } from 'sonner';
import Api from '../api/api';

const Form = () => {

  const [name,setName] = useState(null)
  const [songLink,setSongLink] = useState(null)
  const [startTime,setStartTime] = useState(null)
  const [image,setImage] = useState(null)
  const [wish,setWish] = useState(null)

  const fileInputRef = useRef(null);
  

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleImage = (e) => {
    let image = e.target.files[0]
    console.log(image)
    if (image.size > 1000000) {
      return toast.error('Please select image less than 1 mb.')
    }
    setImage(image)
  }


  const handleFormSubmit = async(e)=>{
    e.preventDefault()
    const formdata = new FormData()
    console.log(name)
    formdata.append('name',name)
    formdata.append('song',songLink)
    formdata.append('image',image)
    formdata.append('songStartTime',startTime)
    formdata.append('wish',wish)
    const res = await Api.post('/createWish',formdata)
  }

  return (
    <div className='bg-slate-400 bg-opacity-30 my-6 p-6 rounded-xl md:w-1/3 w-full'>
      <form className='space-y-4' onSubmit={handleFormSubmit}>
        <input type="text" className='outline-none bg-transparent border-b w-full p-2 text-white' name='name' placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)} />
        <input type="text" className='outline-none bg-transparent border-b w-full p-2 text-white' placeholder='Youtube Link For Song' value={songLink} onChange={(e)=>setSongLink(e.target.value)} />
        <input type="text" className='outline-none bg-transparent border-b w-full p-2 text-white' placeholder='Song Starting Time In Second' value={startTime} onChange={(e)=>setStartTime(e.target.value)}/>
        <textarea type="text" className='outline-none bg-transparent border-b w-full p-2 text-white resize-none' rows={2} placeholder='Wish' value={wish} onChange={(e)=>setWish(e.target.value)}/>
        <div className='flex flex-col md:flex-row gap-4 items-center md:items-start'>
          <div className='w-full md:w-1/2'>
            <input type="file" name='image' ref={fileInputRef} className='hidden' onChange={(e) => handleImage(e)} />
            <button 
              onClick={handleButtonClick}
              className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Select Image
            </button>
          </div>
          {image && 
          <div className=' overflow-hidden w-40 h-40 rounded-full'>
            <img className='object-cover h-full w-full' 
            src={URL.createObjectURL(image)}
            alt="" />
          </div>}
        </div>
        <div className=''>
          <button className='text-black mt-2 rounded-lg w-full font-bold bg-slate-400 p-3'>Generate Wish Page</button>
        </div>
      </form>
    </div>
  )
}

export default Form
