// import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header, Toggle } from 'rsuite';


const Navbar = (props) => {
  const style = ({
    
    fontSize: '30px'
  })
  
  
    return (
    <div className={`${props.mode} navStyle`}>
    <Header style={style}>Fun Text</Header>
    
    <ul className='nav-list'>
      
        <Link to="/"><li className={`${props.mode}`}>Home</li></Link>
        <Link to="/about"> <li className={`${props.mode}`}>About</li></Link>
        <Link to="/signin"><li className={`${props.mode}`}>Signin</li></Link>
        {/* {props.signoutBtn} */}
       
    </ul>
    <Toggle className="my-2 mx-2 switch" size="md" checkedChildren='Dark' unCheckedChildren="Light " onChange={props.toggleMode} />
<font size="1">Enable Dark Mode</font>
  </div>
  )
}

export default Navbar