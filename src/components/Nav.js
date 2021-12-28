import React from 'react'
import logo from '../assets/pizzaLogo.png';
import {Link} from 'react-router-dom';
import '../Styles/Nav.css';
import ReorderIcon from '@material-ui/icons/Reorder';
import {useState} from 'react';


function Nav() {
    const [data,setLink]=useState(false);
    function toggleNavbar()
    {
        setLink(!data)
    }
    //or
    //const toggleNavbar=()=>{
      //  setLink(!data);
    //}

  return (
    <div className='navbar' >
        <div className='leftSide'id={data ? 'open':'close'}>
        <img  src={logo}  alt='s'/>
        <div className='hiddenLinks'>
        <Link to='/'>Home</Link>
        <Link to='/menu'>Menu</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        &nbsp;
        <Link to='/signup'>SignUp</Link>
        <Link to='/login'>Login</Link>
        
        
       </div>     
        </div>
        <div className='rightSide' >
        <Link to='/'>Home</Link>
        <Link to='/menu'>Menu</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/signup'>SignUp</Link>
        
        <button onClick={toggleNavbar}><ReorderIcon/></button>
        
         
        
       
        
        
        </div>
    </div>
  );
}

export default Nav;
