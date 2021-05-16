import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Navbar from "./Components/Navbar"
import Upload from "./Components/Upload"
import Find from "./Components/Find"
import Show from "./Components/Show"
import Start from "./Components/Start"
import Login from "./Components/Login"
import Register from "./Components/Register"




function App({ usename }) {
  return (
    <Router>
      <div className="container">
        <Navbar username={usename} />
        <br />
        <Route path="/" exact component={Start} />
        <Route path="/upload" component={Upload} />
        <Route path="/show" component={Show} />
        <Route path="/find" component={Find} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </div>
    </Router>
  )
}

export default App
