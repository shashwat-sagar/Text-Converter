// eslint-disable-next-line
import React from "react";
import 'rsuite/dist/styles/rsuite-default.css';
import './styles/main.scss'
import { Switch, Route } from 'react-router';
import { Button, Icon } from "rsuite";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import About from "./pages/About";

function App() {
  return (
  <>
  <Switch>
    <Route path="/signup">
    <Navbar signoutBtn={<Button color="blue">Join <Icon icon="facebook" /></Button>} />
      <Signup />
    </Route>
    <Route path="/signin">
    <Navbar signoutBtn={<Button color="red">Signout</Button>} />
      <Signin />
    </Route> 
    <Route path="/about">
    <Navbar signoutBtn={<Button color="green">Download <Icon icon="cloud-download" /></Button>} />
      <About />
    </Route>
    <Route path="/">
      <Navbar />
      <Home heading={<h1>shivansh</h1>} />
    </Route>
  </Switch>
  </>
  );
}

export default App;
