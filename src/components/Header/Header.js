import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS, BREAKPOINTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Filler />
        <SideMobileMenu>
          <UnstyledButton>
            <SideMobileMenuIcon id="shopping-bag" strokeWidth={1} />
            <VisuallyHidden>Open cart</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton>
            <SideMobileMenuIcon id="search" strokeWidth={1} />
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <SideMobileMenuIcon id="menu" strokeWidth={1} />
          </UnstyledButton>
        </SideMobileMenu>
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid ${COLORS.gray[300]};
  overflow: auto;

  @media (max-width: ${BREAKPOINTS.tablet}) {
    border-top: 4px solid ${COLORS.gray[900]};
  }

  @media (max-width: ${BREAKPOINTS.phone}) {
    padding: 18px 16px;
  }
`;

const Nav = styled.nav`
  display: flex;
  margin: 0px 48px;
  gap: clamp(2rem, 5vw - 1.25rem, 3rem);

  @media (max-width: ${BREAKPOINTS.tablet}) {
    display: none;
  }
`;

const LogoWrapper = styled.div`
  flex: 1;

  @media (max-width: ${BREAKPOINTS.tablet}) {
    flex: revert;
  }
`;

const Filler = styled.div`
  flex: 1;
`

const SideMobileMenu = styled.nav`
  display: none;
  align-items: center;
  gap: 32px;

  @media (max-width: ${BREAKPOINTS.tablet}) {
    display: flex;
  }
`

const SideMobileMenuIcon = styled(Icon)`
  width: 24px;
  height: 24px;
  color: black;
`

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
