import React from 'react'
import Button from './Button'
import InputField from '../components/InputField'

const Salary = ({haddleChange,haddleClick}) => {
  return (
    <div>
        <h4 className='text-lg font medium mb-2'>Salary</h4>
        {/* <div className='mb-4'>
            <Button onClickHaddler={haddleClick} value="" tittle="Hourly"/>
            <Button onClickHaddler={haddleClick} value="Monthly" tittle="Monthly"/>
            <Button onClickHaddler={haddleClick} value="Yearly" tittle="Yearly"/>
        </div> */}
        <div>
        <label className='sidebar-label-container'>
                <input
                 type="radio" 
                 name="test2" 
                 id="test2" value="" 
                 onChange={haddleChange} 
                 />
                <span className='checkmark'></span>All
            </label>
            <InputField
             haddleChange={haddleChange} 
             value={30000} 
             tittle=" Rs. 30,000"
             name="test2"
             />
            <InputField
             haddleChange={haddleChange} 
             value={50000} 
             tittle=" Rs. 50,000"
             name="test2"
             />
            <InputField
             haddleChange={haddleChange} 
             value={80000} 
             tittle=" Rs. 80,000"
             name="test2"
             />
            <InputField
             haddleChange={haddleChange} 
             value={100000} 
             tittle=" Rs. 100,000"
             name="test2"
             />  
             <InputField
             haddleChange={haddleChange} 
             value={120000} 
             tittle=" Rs. 120,000"
             name="test2"
             />            
        </div>
    </div>
  )
}

export default Salary



















