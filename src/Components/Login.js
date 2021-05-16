import React, { Component } from 'react';
import './Register.css'
import axios from 'axios';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      password: ''
    }
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const register = {
      username: this.state.username,
      password: this.state.password
    }



    axios.post('http://localhost:8888/api/login', register)
      .then(res => console.log(res.data));

    this.setState({
      username: '',
      password: ''
    })

    window.location.reload();
  }


  render() {

    return (
      <div className='cont'>
        <form className='registration_form' onSubmit={this.onSubmit}>

          <div className="form-group">
            <input type="text" placeholder="Username" required value={this.state.username} onChange={this.onChangeUsername} />
          </div>
          <div className="form-group">
            <input type="password" placeholder="Password" required value={this.state.password} onChange={this.onChangePassword} />
          </div>

          <div className="form-group">
            <input type="submit" value="Login" className="btn btn-danger" />
          </div>


        </form>
      </div>

    );
  }
}
