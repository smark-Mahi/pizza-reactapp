import React from 'react'
import { useState } from 'react';
import '../Styles/Login.css'

function Login() {
    const [user,setuser]=useState('');
    const [userErr,setuserErr]=useState(false);
    const [pass,setpass]=useState('');
    const [passErr,setpassErr]=useState(false);
    function loginHandle(e){
        if(user.length<3 || pass.length<3){
            alert('type correct values')

        }
        else{
            alert("all good")
        }
        e.preventDefault()
    }
    function userHandler(e){
        let item=e.target.value;
        if (item.length<3){
            setuserErr(true)
        }
        else{
            setuserErr(false)
        }
        setuser(item)
    }
    function passHandler(e){
        let item=e.target.value;
        if (item.length<3){
            setpassErr(true)
        }
        else{
            setpassErr(false)
        }
        setpass(item)
    }
  return (
    <div className='form'>
    <h1 style={{textAlign:`center`}}>LOGIN</h1>
    <div style={{marginBottom:`80px`,margin:`auto`,padding:`3px`,boxSizzling:`10px`,borderRadius:`8px`,maxWidth:`20%`}}>
    <form onSubmit={loginHandle}>
        <input type="name" placeholder='Enter User Id.....' onChange={userHandler} />{userErr ? <span>invalid user</span>:''}
        <br/><br/><br />
        <input type="password" placeholder='Enter Password.....' onChange={passHandler} />{passErr ? <span>invalid password</span>:''}
        <br/><br/><br />
        <button className='button'>login</button>
    </form>
    </div>
    
      
    </div>
  )
}

export default Login
