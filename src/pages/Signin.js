import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Icon } from 'rsuite'

const Signin = (props) => {
  return (
   <div className={`${props.mode} container my-2 d-flex f-d-c align-items-center`}>
     <h1>This Page is under development...</h1>
    
    


{/* <sup> hello </sup><br />
<sub> hello </sub><br />
<small> hello </small><br />
	
<pre> hello </pre>	<br />
<blockquote> hello </blockquote><br />
<strong> hello </strong><br /> */}
{/* <em> hello </em><br /> */}
     <p className='mx-1 my-3'><Link to='/'><Button color='yellow'><Icon icon="page-previous" /></Button></Link> Click here to Route Back </p>
     <footer><pre className='my-1'>Sorry for Inconvinence</pre>
     <pre>you are <i>@Signin page</i></pre>
     
     </footer>
   </div>
  )
}

export default Signin