import React from 'react';
import { LogoUI } from '../../UI/LogoUI/LogoUI';
import { NavUI } from '../../UI/NavUI/NavUI';

export const HeaderLanding = () => {
  return (
    <header className=' sm:flex flex-col justify-center items-center border md:flex flex-row justify-center items-center'>
      <LogoUI />
      <NavUI />
    </header>
  )
}
