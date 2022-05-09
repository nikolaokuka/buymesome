import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
   height: 70px;
   width: 100%;
   display: flex;
   justify-content: space-between;
   margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  margin: 15px 15px 10px 15px;
  cursor: pointer;
`;
