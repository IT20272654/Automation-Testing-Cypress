import React from 'react'
import JobPostingData from './JobPostingData'
import Salary from './Salary'
import EmployeeType from './EmployeeType'

const Sidebar = ({haddleChange, haddleClick}) => {
  return (
    <div className='space-y-5'>
        {/* <h3 className='text-lg font-bold mb-2'>Filters</h3> */}
        <JobPostingData haddleChange={haddleChange} haddleClick = {haddleClick}/>
        <EmployeeType haddleChange={haddleChange} haddleClick = {haddleClick}/>
    </div>
  )
}

export default Sidebar