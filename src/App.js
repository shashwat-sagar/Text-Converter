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
import { Alert } from "rsuite";
import Themes from "./components/Themes";

function App() {
  const [mode, setMode] = useState('navbarLight');
  const [theme, setTheme] = useState('themeL')

  const toggleMode = () => {
    if(mode === 'navbarLight') {
      setMode('navbarDark');
      setTheme('themeD')
      Alert.success("Dark Mode Enabled", 1000)
     
    }
    else {
      setMode('navbarLight');
      setTheme('themeL')
      Alert.info("Dark Mode Disabled", 1000)
    }
  }
  const apple = () => {
    setTheme('apple')
  }
  const rose= () => {
    setTheme('rose')
  }
  const orange = () => {
    setTheme('orange')
  }
  const green = () => {
    setTheme('green')
  }
  const yellow = () => {
    setTheme('yellow')
  }
  const violet = () => {
    setTheme('violet')
  }
  const blue = () => {
    setTheme('blue')
  }
  const cyan = () => {
    setTheme('cyan')
  }
  const red = () => {
    setTheme('red1')
  }

  return (
  <>
  <Themes apple={apple} red={red} rose={rose} orange={orange} green={green} cyan={cyan} violet={violet} blue={blue} yellow={yellow} />
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
