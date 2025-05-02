import React from 'react'
import InputField from '../components/InputField'


const Location = ({haddleChange}) => {
  return (
    <div>
        <h4 className='text-lg font medium mb-2'>Location</h4>
        <div>
            <label className='sidebar-label-container'>
                <input
                 type="radio" 
                 name="test" 
                 id="test" value="" 
                 onChange={haddleChange} 
                 />
                <span className='checkmark'></span>All
            </label>
            <InputField
             haddleChange={haddleChange} 
             value="Western Province" 
             tittle="Western Province" 
             name="test"
             />
            <InputField
             haddleChange={haddleChange} 
             value="Southern Province" 
             tittle="Southern Province" 
             name="test"
             />
            <InputField
             haddleChange={haddleChange} 
             value="Central Province" 
             tittle="Central Province" 
             name="test"
             />
             <InputField
             haddleChange={haddleChange} 
             value="Eastern Province" 
             tittle="Eastern Province " 
             name="test"
             /> 
             <InputField
             haddleChange={haddleChange} 
             value="Northern Province" 
             tittle="Northern Province" 
             name="test"
             /> 
             <InputField
             haddleChange={haddleChange} 
             value="North Western Province" 
             tittle="North Western Province" 
             name="test"
             /> 
            <InputField
             haddleChange={haddleChange} 
             value="North Central Province" 
             tittle="North Central Province" 
             name="test"
             /> 
            <InputField
             haddleChange={haddleChange} 
             value="Uva Province" 
             tittle="Uva Province" 
             name="test"
            /> 
            <InputField
             haddleChange={haddleChange} 
             value="Sabaragamuwa Province" 
             tittle="Sabaragamuwa Province" 
             name="test"
            /> 
        </div>
        
        
    </div>
  )
}

export default Location