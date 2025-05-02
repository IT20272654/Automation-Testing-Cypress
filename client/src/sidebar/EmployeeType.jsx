import React from 'react'
import Button from './Button'
import InputField from '../components/InputField'

const EmployeeType = ({haddleChange}) => {
    return (
        <div>
        <h4 className='text-lg font medium mb-2'>Type of Employeement</h4>
        <div>
            <label className='sidebar-label-container'>
                <input
                 type="radio" 
                 name="test" 
                 id="test" value="" 
                 onChange={haddleChange} 
                 />
                <span className='checkmark'></span>Any Time
            </label>
            <InputField
             haddleChange={haddleChange} 
             value="full-time" 
             tittle="Full-time" 
             name="test"
             />
            <InputField
             haddleChange={haddleChange} 
             value="temporary" 
             tittle="Temporary" 
             name="test"
             />
             <InputField
             haddleChange={haddleChange} 
             value="part-time" 
             tittle="Part-time" 
             name="test"
             />
        </div>
    </div>
    
    
      )
    }
export default EmployeeType