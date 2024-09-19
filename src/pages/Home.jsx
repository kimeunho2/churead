import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    
    const history = useNavigate()
  
    const login = () => {
        history('/Login')
    };
  
    return (
    <div>
    <h2 className='button'>Home</h2>
    
    <button type='button' onClick={login}>로그인 하기</button>
    </div>
  )
}

export default Home

