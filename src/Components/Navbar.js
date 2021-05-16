import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import axios from 'axios'

export default class Navbar extends Component {

  state = {
    session: ''
  };

  componentDidMount = () => {
    this.getsession();
  };

  getsession = () => {
    axios.get('http://localhost:8888/api/session')
      .then((response) => {
        const data = response.data;
        this.setState({ session: data });
        console.log('Data has been received!!');
      })
      .catch(() => {
        alert('Error retrieving data!!!');
      });
  }


  logout_function = () => {
    axios.delete('http://localhost:8888/api/logout')
      .then(response => { console.log(response.data) });
  }

  refreshPage = () => {
    this.logout_function();
    window.location.reload();
  }

  displaysession = (session) => {

    if (!session.length) return null;


    return session.map((session, index) => (
      <div key={index} className="blog-post__display">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link to="/upload" className="nav-link">Upload</Link>
          </li>

          <li className="navbar-item added">
            <Link to="#" className="nav-link">{session.username}</Link>
          </li>

          <li className="navbar-item added">
            <Link to="/" onClick={this.refreshPage} className="nav-link">Logout</Link>
          </li>
        </ul>
      </div>
    ));
  };

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Moussafia Movies</Link>
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">

            <li className="navbar-item">
              <Link to="/find" className="nav-link">Find</Link>
            </li>
            <li className="navbar-item">
              <Link to="/show" className="nav-link">Show</Link>
            </li>
            <li className="navbar-item">
              <Link to="/login" className="nav-link">Login</Link>
            </li>
            <li className="navbar-item">
              <Link to="/register" className="nav-link">Register</Link>
            </li>
            <li className="navbar-item profile">
              <p>{this.displaysession(this.state.session)}</p>
            </li>

          </ul>
        </div>
      </nav>
    );
  }
}