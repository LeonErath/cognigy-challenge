import React, { ReactElement } from "react";
import styled from "styled-components";

const Header = styled.div`
  height: 48px;
  display: flex;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
  border-bottom: 1px solid #e7e7e7;
`;

const NavBar: React.FC = (): ReactElement => {
  return <Header>Live Chat</Header>;
};

export default NavBar;
