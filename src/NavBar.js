import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = (props) => {
    return(
    <ul>
    <li><Link to="/">Landing</Link></li>
    <li><Link to="/home">HOME</Link></li>
    <li><Link to="/about">ABOUT</Link></li>
    <li><Link to="/llama">LLAMA</Link></li>
  </ul>)
}

export default NavBar;