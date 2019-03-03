import React from 'react';
import styled from 'styled-components';
import logo from './header-logo-large.png';

const Header = styled.div`
  background: #1e282d;
  padding: 20px 40px;
  text-align: center;
  margin-bottom: 50px;
  position: sticky;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 2;
`;

const Image = styled.img`
  width: 140px;
`;

export const MovieHeader = () => {
  return (
    <Header>
      <Image src={logo} alt="" />
    </Header>
  );
};
