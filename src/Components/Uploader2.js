import React, { Component } from 'react';
import './Uploader.css';
import axios from 'axios';

export default class Register extends Component {
  
      constructor(props) {
        super(props);
    
        this.onChangeMovieName = this.onChangeMovieName.bind(this);
        this.onChangeDirector = this.onChangeDirector.bind(this);
        this.onChangeInitialRelease = this.onChangeInitialRelease.bind(this);
        this.onChangeBoxOffice = this.onChangeBoxOffice.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
          movie_name: '',
          director: '',
          initial_release: '',
          box_office: ''
        }
      }

      onChangeMovieName(e) {
        this.setState({
          movie_name: e.target.value
        })
      }

      onChangeDirector(e) {
        this.setState({
          director: e.target.value
        })
      }

      onChangeInitialRelease(e) {
        this.setState({
          initial_release: e.target.value
        })
      }

      onChangeBoxOffice(e) {
        this.setState({
          box_office: e.target.value
        })
      }

      onSubmit=(e,session) =>{
        e.preventDefault();
        
        const upload = {
          movie_name: this.state.movie_name,
          director: this.state.director,
          initial_release: this.state.initial_release,
          box_office: this.state.box_office,
        }
    
        axios.post('http://localhost:8888/api/upload', upload)
          .then(res => console.log(res.data));
    
        this.setState({
          movie_name: '',
          director: '',
          initial_release: '',
          box_office: ''
        })
      }

    render() {
      return (
        <div className='conto'>
            <form className='registration_form' onSubmit={this.onSubmit}>
                
                <div className="form-group"> 
                    <input  type="text" required value={this.state.movie_name} onChange={this.onChangeMovieName} placeholder="Movie Name"/>
                </div>
                <div className="form-group"> 
                    <input  type="text" required value={this.state.director} onChange={this.onChangeDirector} placeholder="Director"/>
                </div>
                <div className="form-group"> 
                    <input  type="text" required value={this.state.initial_release} onChange={this.onChangeInitialRelease} placeholder="Initial Release"/>
                </div>
                <div className="form-group"> 
                    <input  type="text" required value={this.state.box_office} onChange={this.onChangeBoxOffice} placeholder="Box Office"/>
                </div>
                
                <div className="form-group">
                    <input type="submit" value="Add a Movie" className="btn btn-danger" />
                </div>
                
            </form>

            </div>
      )
    }
}
