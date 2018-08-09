import React, { Component } from 'react'
import S_Characters from './S_Characters/S_Characters';

export default class Characters extends Component {
  render() {
    return (
        <div className='cWrap'>
      <ul>
        <img src={this.props.image} />  
        <li>{this.props.name} is {this.props.status}</li>
      </ul>
      </div>
    )
  }
}