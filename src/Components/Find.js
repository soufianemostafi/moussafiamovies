import React, { Component } from 'react';
import axios from 'axios';
import './Find.css'

export default class Find extends Component {

  constructor(props) {
    super(props);

    this.onChangeMovieName = this.onChangeMovieName.bind(this);
    this.onChangeMovieName = this.onChangeMovieName.bind(this);
    this.onChangeMovieName = this.onChangeMovieName.bind(this);
    this.onChangeMovieName = this.onChangeMovieName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      u: [],
      upload: [],
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8888/api/upload')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            u: response.data,
            upload: response.data.map(upload => upload.movie_name),
            movie_name: response.data[0].movie_name
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }

  onChangeMovieName(e) {
    this.setState({
      movie_name: e.target.value
    })
  }


  onSubmit = async (e) => {
    e.preventDefault();


    for (var i = 0; i < this.state.u.length; i++) {
      if (this.state.u[i].movie_name === this.state.movie_name) {
        this.state.movie_name2 = this.state.u[i].movie_name;
        console.log('1')
        this.state.director = this.state.u[i].director;
        console.log(2)
        this.state.initial_release = this.state.u[i].initial_release;
        console.log(3)
        this.state.box_office = this.state.u[i].box_office;
        console.log('4')

      }
    }
  }

  render() {
    return (
      <div >
        <form onSubmit={this.onSubmit}>
          <div className='forms'>
            <label className='movie'>Movie name: </label>
            <select ref="userInput"
              required
              className="form-control"
              value={this.state.movie_name}
              onChange={this.onChangeMovieName}>
              {
                this.state.upload.map(function (upload) {
                  return <option
                    key={upload}
                    value={upload}>{upload}
                  </option>;
                })
              }
            </select>
          </div>

          <div className="aaa">
            <input type="submit" value="Find By Movie Name" className="btn btn-danger" />
          </div>
        </form>

        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Movie Name</th>
              <th>Director</th>
              <th>Initial release</th>
              <th>Box office</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.state.movie_name2}</td>
              <td>{this.state.director}</td>
              <td>{this.state.initial_release}</td>
              <td>{this.state.box_office}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
