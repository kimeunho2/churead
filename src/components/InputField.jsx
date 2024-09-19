import React from 'react'

const InputField = ({type, placeholder}) => {
  return (
    <input type={type} placeholder={placeholder} className="border w-96 Input-Field"/> 
  )
}

export default InputField