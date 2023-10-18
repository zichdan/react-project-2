import React from 'react'

const Button = ({color, text}) => {
  return (
    <button style={{ backgroundColor: color}} 
    className='btn'
    >Add
    {text}
  </button>
  );
};



export default Button
