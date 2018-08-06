import React, { Component } from 'react'
import styled from 'styled-components';
import S_Header from './Styles/S_Header';

export default class Header extends Component {
  render() {
    return (
      <S_Header>
      <ul class='nav'>
        <li class='nav-items'>Home</li>
        <li class='nav-items'>About</li>
        <li class='nav-items'>Contact</li>
        <li class='nav-items'>Join</li>
      </ul>
      </S_Header>
    )
  }
}
