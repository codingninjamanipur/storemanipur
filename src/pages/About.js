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
            An aim is a goal or objective to achieve in life. 
            In order to succeed in life, one must have a goal. 
            My aim in life is to be a teacher. 
            Teaching is a noble and responsible profession.
             I have come to know that the ever-increasing 
             misery and distress, are due to the ignorance and
              illiteracy of the people of our country. So I have 
              decided to spread education among the masses as much 
              as possible within my humble power.

As a teacher, I shall try my best to impart man-making education.
 Some say that money is the honey of life. But 
 I do not agree with them. Rather, I think that morality is the 
 real honey of life. I want to be a lovable and respectable
  person as a teacher in the future.
            </p>
        </div>
    </div>
  )
}

export default About