import React from 'react'
import Button from './Button'
import InputField from '../components/InputField'

const JobPostingData = ({haddleChange}) => {
    return (
        <div>
        <h4 className='text-lg font medium mb-2'>Work Experience</h4>
        <div>
            <label className='sidebar-label-container'>
                <input
                 type="radio" 
                 name="test" 
                 id="test" value="" 
                 onChange={haddleChange} 
                 />
                <span className='checkmark'></span>Any Experience
            </label>
            <InputField
             haddleChange={haddleChange} 
             value="Internship" 
             tittle="Internship" 
             name="test"
             />
            <InputField
             haddleChange={haddleChange} 
             value="work remotely" 
             tittle="Work remotely" 
             name="test"
             />
        </div>
    </div>
    
    
      )
    }
export default JobPostingData