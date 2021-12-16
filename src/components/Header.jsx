import React from "react";
import styled from "styled-components";
import MenuIcon from '@mui/icons-material/Menu';
function Header() {
  return (
    <Conteiner>
      <a>
        <img src="/img/logo.svg" alt="logo" />
      </a>

      <Menu>
        <a href="#">Model S</a>
        <a href="#">Model Y</a>
        <a href="#">Model 3</a>
        <a href="#">Model X</a>
        <a href="#"></a>
      </Menu>

      <RightMenu>
      <a href="#">Shop</a>
      <a href="#">Tesla Account</a>
      <CustomMenu/>
      </RightMenu>
    </Conteiner>
  );
}

export default Header;

const Conteiner = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
  }


  @media (max-width: 768px) {
    display: none;
  }
`;


const RightMenu = styled.div`
display: flex;
align-items:center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`