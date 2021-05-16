import React, { Component } from 'react';
import './Register.css'
import axios from 'axios';

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeFullname = this.onChangeFullname.bind(this);
    this.onChangeGmail = this.onChangeGmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      full_name: '',
      username: '',
      gmail: '',
      password: ''
    }
  }


  onChangeFullname(e) {
    this.setState({
      full_name: e.target.value
    })
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onChangeGmail(e) {
    this.setState({
      gmail: e.target.value
    })
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    })
  }

  onSubmit = async e => {
    e.preventDefault();
    const full_name = this.state.full_name;
    const username = this.state.username;
    const gmail = this.state.gmail;
    const password = this.state.password;

    const register = {
      full_name,
      username,
      gmail,
      password
    }

    axios.post('http://localhost:8888/api/register', register)
      .then(res => console.log(res.data));
    this.setState({
      full_name: '',
      username: '',
      gmail: '',
      password: '',
    })
  }

  render() {
    return (

      <div className='cont'>
        <form className='registration_form' onSubmit={this.onSubmit}>

          <div className="form-group">
            <input type="text" required value={this.state.full_name} onChange={this.onChangeFullname} placeholder="Full Name" />
          </div>
          <div className="form-group">
            <input type="text" required value={this.state.username} onChange={this.onChangeUsername} placeholder="Username" />
          </div>
          <div className="form-group">
            <input type="text" required value={this.state.gmail} onChange={this.onChangeGmail} placeholder="E-mail" />
          </div>
          <div className="form-group">
            <input type="password" required value={this.state.password} onChange={this.onChangePassword} placeholder="Password" />
          </div>

          <div className="form-group">
            <input type="submit" value="Register" className="btn btn-danger" />
          </div>

        </form>


      </div>

    )
  }
}