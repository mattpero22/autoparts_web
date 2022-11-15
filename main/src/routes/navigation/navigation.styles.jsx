import styled from "styled-components";

import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  height: 70px;
  width: 150%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;

  &hover:
  
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  padding: 100px 45px;
  cursor: pointer;
  text-decoration: none;
`