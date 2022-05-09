import React from 'react';
import { HeaderLanding } from '../../Layouts/HeaderLanding/HeaderLanding';

export const Landing = () => {
  return (
    <>
    <HeaderLanding />
    <h1 className='text-center text-2xl text-primary'>Probando Color primario</h1>    
    <h1 className='text-center text-2xl text-secondary'>Probando Color secundario</h1>    
    <h1 className='text-center text-2xl text-fontsColor'>Probando Color para fuentes</h1>    
    </>
  )
}
