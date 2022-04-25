import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Icon } from 'rsuite'

const About = (props) => {
  return (
    <div className={`${props.mode} container my-2 d-flex f-d-c align-items-center`}>
     <h1>This Page is under development...</h1>
     <p className='mx-1 my-2'><Link to='/'><Button color='yellow'><Icon icon="page-previous" /></Button></Link> Click here to Route Back </p>
     <pre>you are @<i>About page</i></pre>
     
   </div>
  )
}

export default About