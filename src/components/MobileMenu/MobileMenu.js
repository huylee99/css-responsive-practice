/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import { COLORS, WEIGHTS, BREAKPOINTS } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <MenuOverlay>
      <MenuContent>
        <Wrapper>
          <Button onClick={onDismiss}>
            <VisuallyHidden>Close menu</VisuallyHidden>
            <Icon id="close" />
          </Button>
          <Side />

          <Nav>
            <NavLink href="/sale">Sale</NavLink>
            <NavLink href="/new">New&nbsp;Releases</NavLink>
            <NavLink href="/men">Men</NavLink>
            <NavLink href="/women">Women</NavLink>
            <NavLink href="/kids">Kids</NavLink>
            <NavLink href="/collections">Collections</NavLink>
          </Nav>
          <Footer>
            <FooterLink href="/terms">Terms and Conditions</FooterLink>
            <FooterLink href="/privacy">Privacy Policy</FooterLink>
            <FooterLink href="/contact">Contact Us</FooterLink>
          </Footer>
        </Wrapper>
      </MenuContent>
    </MenuOverlay>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 32px;
`

const Side = styled.div`
  flex: 1;
`

const Button = styled(UnstyledButton)`
  position: absolute;
  top: 26px;
  right: 18px;
`

const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 12px;
`

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 32px;
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
`
const FooterLink = styled.a`
  text-decoration: none;
  font-size: 0.875rem;
  color: ${COLORS.gray[700]};
`

const MenuOverlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: hsl(0, 0%, 0%, .5);
`

const MenuContent = styled(DialogContent)`
  width: 300px;
  height: 100%;
  background-color: white;
  position: absolute;
  right: 0;
`





export default MobileMenu;
