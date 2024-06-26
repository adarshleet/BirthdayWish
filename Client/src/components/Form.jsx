import React, { useRef } from 'react'

const Form = () => {

  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className='bg-slate-400 bg-opacity-30 my-6 p-6 rounded-xl md:w-1/3 w-full'>
      <div className='space-y-4'>
        <input type="text" className='outline-none bg-transparent border-b w-full p-2 text-white' placeholder='Name' />
        <input type="text" className='outline-none bg-transparent border-b w-full p-2 text-white' placeholder='Youtube Link For Song' />
        <input type="text" className='outline-none bg-transparent border-b w-full p-2 text-white' placeholder='Song Starting Time In Second' />
        <textarea type="text" className='outline-none bg-transparent border-b w-full p-2 text-white resize-none' rows={2} placeholder='Description' />
        <div>
          <input type="file" ref={fileInputRef} className='hidden' />
          <button
            onClick={handleButtonClick}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Upload Image
          </button>
        </div>
      </div>
    </div>
  )
}

export default Form
