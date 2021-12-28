import React from 'react'
import pic7 from '../assets/classic-chicken-fajita.jpg';
import '../Styles/About.css'

function About() {
  return (
    <div className='about'>
    <div className='aboutTop'style={{backgroundImage:`url(${pic7})`}} ></div>
    <div className='aboutBottom'>
        <h3>ABOUT US</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
         Dolores laborum iure recusandae molestias, facere vitae error dicta, sit ab, 
        iusto molestiae neque culpa dolorum. Vero quis suscipit ab eum consectetur!</p>
    </div>
      
    </div>
  )
}

export default About
