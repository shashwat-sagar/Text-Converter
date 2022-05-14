// eslint-disable-next-line
import React, { useState } from "react";
import 'rsuite/dist/styles/rsuite-default.css';
import './styles/main.scss'
import { Switch, Route } from 'react-router';
// import { Button, Icon } from "rsuite";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import About from "./pages/About";


function App() {
  const [mode, setMode] = useState('navbarLight');
  const [theme, setTheme] = useState('themeL')

  const toggleMode = () => {
    if(mode === 'navbarLight') {
      setMode('navbarDark');
      setTheme('themeD')
     
    }
    else {
      setMode('navbarLight');
      setTheme('themeL')
    }
  }

  return (
  <>
    <Navbar mode={mode} toggleMode={toggleMode}  />
    
  <Switch>

    <Route path="/signup">
    
      <Signup />
    </Route>
    <Route path="/signin">
    
      <Signin mode={theme} />
    </Route> 
    <Route path="/about">
   
      <About mode={theme} />
    </Route>
    <Route path="/">
     
      <Home heading={<h1>shivansh</h1>} modeagain={theme} />
    </Route>
  </Switch>
  </>
  );
}

export default App;
