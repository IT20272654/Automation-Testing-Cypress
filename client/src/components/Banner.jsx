//import {FiSearch} from "react-icon/fi"
import React, { useState } from 'react'

export const Banner = ({query,haddleInputChange}) => {
 
  return (
    <div className='bg-color'>
    <table align='center'>
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4 md:py-20 py-24'>
        <h1 className='Heading'>Find your <span className='text-blue'>New Job</span> today...</h1>
        <p className='text-lg text-black/70 mb-8'>Thousands of jobs in the computer, engineering and technology sectors are waiting for you.</p>

    </div>
    </table>
    </div>
  )
}
export default Banner















