"use client"

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';


const page = (params) => {
    const {id} = params;
    console.log(id);
    const [users, setUsers] = useState([])
    const getUsers = async ()=>{
      const {data} = await axios.get("https://jsonplaceholder.typicode.com/users");
      console.log(data);
      console.log(data.id);
    }
    // getUsers();
    useEffect(() => {
      getUsers();
    }, [])
  return (
    <div>page {id}</div>
  )
}

export default page