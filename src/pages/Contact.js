import React from 'react'
import ContactImg from '../assets/two.jpg';
import '../Styles/Contact.css';

function Contact() {
  return (
    <div className='contact'>
        <div className='leftSide' style= {{ backgroundImage: `url(${ContactImg})` }}></div>
        <div className='rightSide'>
            <h1>Contact Us</h1>
            <form id='contact-form' method='POST'>
                <label htmlFor='name'>Full Name</label>
                <input name='name' placeholder='Enter full Name' type='text'/>
                <label htmlFor='email'>Email</label>
                <input name='email' placeholder='Enter your Email' type='email'/>
                <label htmlFor='message'>Message</label>
                <textarea required rows='6' placeholder='Enter message' name='message'></textarea>
                <button type='submit'>Send Message</button>
            </form>
        </div>
    </div>
  )
}

export default Contact