import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Navbar = (props) => {
  
  
    return (
    <div className="navbar1">
    <h4>Fun Text </h4>
    <ul className='nav-list'>
        <Link to="/"><li className='nav-items'>Home</li></Link>
        <Link to="/about"> <li className='nav-items'>About</li></Link>
        <Link to="/signin"><li className='nav-items'>Signin</li></Link>

    </ul>
    
{props.signoutBtn}
  </div>
  )
}

export default Navbar