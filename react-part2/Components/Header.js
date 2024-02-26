import React, { useContext } from 'react'
import Nav from './Nav'
import { MyContext } from '@/Helper/Context'

const Header = (props) => {
  // console.log(props.num)
  const user = useContext(MyContext)
  return (
    <div className='bg-green-200 p-5'>
        {user}
        <Nav num={props.num} />
    </div>
  )
}

export default Header