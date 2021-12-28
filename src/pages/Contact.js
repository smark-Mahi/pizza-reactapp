import React from 'react'
import pic8 from '../assets/flatten.jfif';
import '../Styles/Contact.css'

function Contact() {
  return (
    <div className='contact'>
    <div className='leftSide'style={{backgroundImage:`url(${pic8})`}}></div>
    <div className='rightSide'>
    <h1>CONTACT US</h1>
    <form id='contact-form' method='POST'>
        <label htmlFor="name">Full Name</label>
        <input type="text" placeholder='Enter Full Name...' />
        <label htmlFor="name">Email</label>
        <input type="email" placeholder='Enter Email...' />
        <label htmlFor="Message"></label>
        <textarea name="message" placeholder='Enter message...'  rows="10" required></textarea>
        <button>Send Message</button>
    </form>
      
    </div>
    </div>
  )
}

export default Contact
