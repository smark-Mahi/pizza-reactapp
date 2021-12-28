import React from 'react';
import '../Styles/Signup.css';
//import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom';
import Login from '../pages/Login'
import {useState} from 'react'
//import Footer from '../components/Footer';

function Signup() {
     /* {<Router>
        <Link to='/Login'><button>Login</button></Link>
      <Switch>
        <Route exact path='/Login' component={Login}/>
      </Switch>
    
    </Router>
    */
    const [data,setdata]=useState(false)
    function lognhandler(){
        setdata(!data)
    }
  return (
    
      <div style={{textAlign:`center`,marginTop:`30px`}}>
      <h1>SIGn UP</h1>
     <div className='blog'>
     <label htmlFor="name">FIRST NAME</label>
     <br/><input type="text" /><br /><br /><br />
     <label htmlFor="name">MIDDLE NAME</label>
      <br/><input type="text" /><br /><br /><br />
      <label htmlFor="name">LAST NAME</label>
      <br/><input type="text" /><br /><br /><br /> 
      <label htmlFor="name">PASSWORD</label>
      <br/><input type="password" required/><br /><br /><br />
      <label htmlFor="name">CONFIRM PASSWORD</label>
      :<br/><input type="password" required/><br /><br />
      <button>SIGN UP</button>
      </div>
      <br/> 
      <div><button className='button' onClick={lognhandler}>login</button>
      <div>
      {data ?<Login/>:''}
      </div><br /> 
      </div><br />
     </div>
  
  )
}

export default Signup
