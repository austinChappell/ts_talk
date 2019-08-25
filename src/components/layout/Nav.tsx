import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';
import { colors } from '../../constants';

const NavWrapper = styled.nav({
  backgroundColor: colors.grays.dark,
  height: 60,
  left: 0,
  position: 'fixed',
  right: 0,
  top: 0,
});
const Link = styled(NavLink)({
  color: colors.common.white,
  margin: 8,
  textDecoration: 'none',

  '&:visited': {
    color: colors.common.white,
  }
})

const Nav: React.FC = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <Link to="/">
            Home
          </Link>
          <Link to="/teams">
            Teams
          </Link>
        </li>
      </ul>
    </NavWrapper>
  )
}

export default Nav;
