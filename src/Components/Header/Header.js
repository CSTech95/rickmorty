import React, { Component } from 'react'
import styled from 'styled-components';

const Wrapper = styled.section`
padding: 4em;
background: red;
`;

export default class Header extends Component {
  render() {
    return (
      <Wrapper>
      <ul class='nav'>
        <li class='nav-items'>Home</li>
        <li class='nav-items'>About</li>
        <li class='nav-items'>Contact</li>
        <li class='nav-items'>Join</li>
      </ul>
      </Wrapper>
    )
  }
}
