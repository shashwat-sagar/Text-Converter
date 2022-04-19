import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Toggle } from 'rsuite';


const Navbar = (props) => {
  
  
    return (
    <div className={`${props.mode}`}>
    <h4>Fun Text </h4>
    
    <ul className='nav-list'>
      
        <Link to="/"><li className='nav-items'>Home</li></Link>
        <Link to="/about"> <li className='nav-items'>About</li></Link>
        <Link to="/signin"><li className='nav-items'>Signin</li></Link>
        {/* {props.signoutBtn} */}
       
    </ul>
    <Toggle className="my-2 mx-2 switch" size="md" checkedChildren='Dark' unCheckedChildren="Light " onChange={props.toggleMode} />
<font size="1">Enable Dark Mode</font>
  </div>
  )
}

export default Navbar