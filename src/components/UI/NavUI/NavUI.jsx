import React from 'react'

export const NavUI = () => {
  return (
    <nav className='flex flex-col justify-center items-center'>
      <a className='my-2 text-red-700 text-xl italic' href="">Home</a>
      <a className='linkNav' href="">AboutUS</a>
      <a className='linkNav' href="">ContactUS</a>
    </nav>
  )
}
