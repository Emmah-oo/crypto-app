import React from 'react'
import { BiCoinStack } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Link to='/'>
        <div className='flex items-center justify-center mb-10 mt-5 gap-2'>
            <BiCoinStack className='text-5xl'/>
            <h1 className='text-5xl'>Coin <span className='text-blue-700'>Info</span></h1>
        </div>
    </Link>
  )
}

export default Header