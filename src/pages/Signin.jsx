import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import InputField from '../components/InputField'
import Button from '../components/Button'

const Signin = () => {
    const navigate = useNavigate();
  
    const accession = () => {
      navigate('/');
    };


  return (
    <div className='loginPage'>
    <img src="/images/logo 1.svg" alt="Logo" className='logo' />
    <p className='login-main-text'>Churead에서 소통해보세요</p>
    <form className='form'>
    <InputField type="Name" placeholder="name"/>
    <InputField type="email" placeholder="Email"/>
    <InputField type="Password" placeholder="Password"/>
    <Button text="Create Account" onClick={accession} className="loginButton" />
    </form>
    <p className='Account-Text'>계정이 있신가요?<Link to="/Login" className='Account-Link'> 로그인</Link></p>
    <p className='or'>or</p>
    <Button src="/images/google.svg" type="button" text="Continue wiuth googl >" onClick={accession} className="GoogleLogin"/>
    </div>
  )
}

export default Signin