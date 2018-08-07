import React, { Component } from 'react'

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