import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <ContainerHeader>
      <Title>Router-dom test</Title>
      <Menu>
        <NavLink to="/" exact={true}>
          Home
        </NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/info">Info</NavLink>
      </Menu>
    </ContainerHeader>
  );
};
const ContainerHeader = styled.header`
  text-align: center;
  margin-bottom: 40px;
`;
const Title = styled.header`
  margin-bottom: 10px;
  font-size: 26px;
  text-transform: uppercase;
`;
const Menu = styled.nav`
  a {
    text-decoration: none;
    color: #00d4ff;
    margin: 0 10px;
  }
  a:hover {
    color: #d90318;
  }
  a.active {
    border-bottom: 2px solid #02f799;
    padding-bottom: 3px;
  }
`;
export default Header;
