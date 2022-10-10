import React from 'react'
import AboutImg from '../assets/one.jpg';
import '../Styles/About.css';

function About() {
  return (
    <div className='About'>
        <div className='aboutTop'  style= {{ backgroundImage: `url(${AboutImg})` }}>
        </div>
        <div className='aboutBottom'>
            <h1>About us</h1>
            <p>
                Paste some random paragraphs here!
            </p>
        </div>
    </div>
  )
}

export default About