"use client"

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const page = () => {
  const [users, setUsers] = useState([])
  const getUsers = async ()=>{
    const {data} = await axios.get("https://jsonplaceholder.typicode.com/users");
    // const data = res.data;
    setUsers(data);
    // console.log(users);
  }
  // getUsers();
  useEffect(() => {
    getUsers();
  }, [])
  
  return (
    <>
      <button onClick={getUsers} className='bg-green-400 text-white px-4 py-2 rounded font-bold'>Get Images</button>
      <div className='p-8 bg-slate-100 mt-5'></div>
      <ul>
        {users.map((e, key)=>{
          return <li key={key}>{e.username} --- <a href={`/${e.id}`}>Explore {e.id}</a></li>
        })}
      </ul>
    </>
  )
}

export default page