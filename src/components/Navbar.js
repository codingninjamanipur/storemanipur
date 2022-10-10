import React, {useState} from 'react';
import Logo from '../assets/IlDdyc-4.jpg';
import { Link } from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import '../Styles/Navbar.css';
function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);
  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className='navbar'>
        <div className='leftSide' id={openLinks ? "open" : "close"}>
            <img src={Logo} className='image'/>
            <div className='hiddenLinks'>
            <Link to="/"> Home </Link>
            <Link to="/menu"> Menu </Link>
            <Link to="/about"> About </Link>
            <Link to="/login"> <button>Login</button> </Link>
            </div>
        </div>
        <div className='rightSide'>
            <Link to="/"> Home </Link>
            <Link to="/menu"> Menu </Link>
            <Link to="/about"> About </Link>
            <Link to="/contact"> Contact </Link>
            <Link to="/login"> <buton>Login</buton> </Link>
            <button onClick={toggleNavbar}>
              <ReorderIcon/>
            </button>
        </div>
    </div>
  )
}

export default Navbar