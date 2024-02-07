"use client"
import React, { useState } from 'react'

const page = () => {
    const [marks, setMarks] = useState(80)
  return (
    <>
        <h1 className='font-bold text-xl text-red-500'>My total marks are {marks}</h1>
        <button onClick={()=>{
            setMarks(50)
        }} className='bg-gray-400 px-5 py-2 rounded mt-5 text-white font-bold'>Update</button>
    </>
  )
}

export default page 