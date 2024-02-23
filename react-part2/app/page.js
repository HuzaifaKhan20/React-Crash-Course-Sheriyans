"use client"
import Header from '@/Components/Header'
import React, { useState } from 'react'

const page = () => {
  const [num, setNum] = useState(10)
  return (
    <div>
      <Header num={num} />
    </div>
  )
}

export default page