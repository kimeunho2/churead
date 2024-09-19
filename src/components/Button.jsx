import React from 'react'
import { useNavigate } from 'react-router-dom'






const Button = ({type, text, onClick, className, src}) => {

  
  const handleClick = () => {
    onClick(text)
  }
  
  return (
    <button type={type} className={`w-96 border mx-19 ${className}`} onClick={handleClick}><img src={src} className='loginButton-Img'/><span>{text}</span></button>
  )
}

export default Button