// import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header, Toggle } from 'rsuite';



const Navbar = (props) => {
  const style = ({
    
    margin: '30px'
  })
  
  
    return (
    <div className={`${props.mode} navStyle`}>
    <Header style={style}></Header>
    
    <ul className='nav-list'>
      
        <Link to="/"><li className={`${props.mode}`}>Home</li></Link>
        <Link to="/about"> <li className={`${props.mode}`}>About</li></Link>
        <Link to="/signin"><li className={`${props.mode}`}>Signin</li></Link>
       
       
    </ul>
    <Toggle className="my-2 mx-2 switch" size="md" checkedChildren='Dark' unCheckedChildren="Light " onChange={props.toggleMode} />

  </div>
  )
}

export default Navbar