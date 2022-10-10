import React from 'react';
import {Link} from 'react-router-dom';
import  Logoo  from '../assets/Logo.jpg';
import '../Styles/Home.css';
function Home() {
  return (
    <div className='home' style= {{ backgroundImage: `url(${Logoo})` }}>
        < div className='headerContainer'>
        <h1>Manipur Store</h1>
        <p>All your needs in one place</p>
        <Link>
        <button>Order now</button>
        </Link>
        </div>
    </div>
  )
}

export default Home