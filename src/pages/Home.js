import React from 'react'
import {Link} from 'react-router-dom';
import Banner from '../assets/https___specials-images.forbesimg.com_imageserve_5f98cbc2af157b759b3a6272_Panera-pizza_960x0.jpg_fit=scale'
import '../Styles/Home.css'
function Home() {
  return (
    <div className='home' style={{backgroundImage:`url(${Banner})`}}>
    <div className='headerContainer'>
    <h3 style={{color:`white`,margin:`3px 40px 20px 40px `}}>sumeria smark pizza world</h3>
    <Link to='/menu'>
      <button>ORDER NOW</button>
    </Link>


    </div>
      
    </div>
  )
}

export default Home;
