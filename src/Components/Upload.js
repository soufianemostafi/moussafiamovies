import React, { Component } from 'react';
import Uploader from './Uploader2'
import './Upload.css'

export default class Upload extends Component {

  render() {
    return (
      <div>
        <div className='uploader'>
          <Uploader />
        </div>
      </div>
    );
  }
}