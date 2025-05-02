import React from 'react'

const Button = ({onClickHaddler, value, tittle}) => {
  return (
    <button onClick={onClickHaddler} value={value} className={`px-4 py text-base hover:text-blue`}>
        {tittle}
    </button>
  )
}

export default Button