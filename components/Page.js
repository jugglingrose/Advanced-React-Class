import React, { Component } from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import styled from 'styled-components';

const MyButton = styled.button`
  background: red;
  font-size: 100px;
`;

class Page extends Component{
  render() {
    return (
      <div>
        <Header />
        <Nav />
        <MyButton>Click Me</MyButton>
        {this.props.children}
      </div>
    )
  }
}

export default Page;