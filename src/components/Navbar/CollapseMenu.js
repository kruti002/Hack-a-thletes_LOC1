import React from "react";
import styled from "styled-components";

import { useSpring, animated } from "react-spring";

const CollapseMenu = (props) => {
  const { open } = useSpring({ open: props.navbarState ? 0 : 1 });

  if (props.navbarState === true) {
    return (
      <CollapseWrapper
        style={{
          transform: open
            .interpolate({
              range: [0, 0.2, 0.3, 1],
              output: [0, -20, 0, -200],
            })
            .interpolate((openValue) => `translate3d(0, ${openValue}px, 0`),
          zIndex: 1000,
        }}
      >
        <NavLinks>
          <li>
            <a href="/" onClick={props.handleNavbar}>
              Home
            </a>
          </li>
          <li>
            <a href="/about" onClick={props.handleNavbar}>
              AboutUs
            </a>
          </li>
          <li>
            <a href="/contact" onClick={props.handleNavbar}>
              ContactIs
            </a>
          </li>
          <li>
            <a href="/signup" onClick={props.handleNavbar}>
              Signup/Login
            </a>
          </li>
        </NavLinks>
      </CollapseWrapper>
    );
  }
  return null;
};

export default CollapseMenu;

const CollapseWrapper = styled(animated.div)`
  background: black;
  position: fixed;
  top: 4.5rem;
  left: 0;
  right: 0;
`;

const NavLinks = styled.ul`
  list-style-type: none;
  padding: 2rem 1rem 2rem 2rem;

  & li {
    transition: all 300ms linear 0s;
  }

  & a {
    font-size: 1.4rem;
    line-height: 2;
    color: #67b7d1;
    transition: all 300ms linear 0s;
    border-bottom: 1px solid transparent;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #ffffff;
      border-bottom: 1px solid #ffffff;
    }
  }
`;
