import React from 'react'

const InputField = ({haddleChange, value, tittle, name}) => {
  return (
    <label className='sidebar-label-container'>
                <input
                 type="radio" 
                 name={name} 
                 value={value}
                 onChange={haddleChange} 
                 />
                <span className='checkmark'></span>{tittle}
    </label>
    );
};

export default InputField