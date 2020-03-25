import { Link } from 'gatsby'
import React, { useState } from 'react'
import { motion } from "framer-motion";
import styled from 'styled-components'

import Toggler from './toggler'
import { ContainerFullWidth, ContainerBodyWidth } from '../containers'
import { FaGithub, FaDribbble, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoMdMenu, IoMdClose } from "react-icons/io";

const HeaderContainerFullWidth = styled(ContainerFullWidth)`
  background-color: ${props => props.theme.theme.bg.primary};
`

const HeaderContainer = styled(ContainerBodyWidth)`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  height: 80px;
  padding: 24px;
  box-sizing: border-box;

  .logo {
    display: block;
    text-decoration: none;
    color: ${props => props.theme.theme.text.primary};
    font-weight: 500;
    font-size: 1rem;

    svg{
      height: 30px;
      width: 30px;
      vertical-align: bottom;
    }
  }
`

const Nav = styled.nav`
  width: 100%;
  display: grid;
  justify-items: right;
  align-items: center;
  grid-template-columns: auto auto 70px;
  justify-self: left;

  ul{
    justify-self: left;
    display: flex;
    justify-items: right;
    list-style-type: none;
    margin: 0;
    padding: 0;

    li{
      margin: 0 0 0 12px;
    }
  }

  a {
    color: ${props => props.theme.theme.text.tertiary};
    text-decoration: none;
    font-size: 1rem;
    /* text-transform: uppercase; */
    padding: 6px 0;

    &.current {
      /* color: blue; */
      border-bottom: 2px solid ${props => props.theme.theme.colors.blue};
    }

    &:hover {
      color: ${props => props.theme.theme.text.primary};
    }
  }

  @media (max-width: 700px) {
    display: none;
  }

`

const SocialIcons = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 12px;
  justify-items: center;
  align-items: center;

  .icon {
    display: block;
    /* margin: 0 0 0 12px; */
  }

  a {
    color: ${props => props.theme.theme.text.tertiary};
  }
`
const MobileNav = styled.div`
  display: none;
  justify-self: right;

  @media (max-width: 700px) {
    display: flex;
    align-items: center;
  }
`

const Hamburger = styled.div`
  margin: 0 0 0 12px;

  svg{
    display: block;
    color: ${props => props.theme.theme.text.primary};
  }
`

const Dropdown = styled(motion.div)`
  /* display: grid; */
  display: none;
  opacity: 0;
  z-index: 100;
  position: fixed;
  top: 0px;
  left: 0px;
  height: 100vh;
  width: 100%;
  background-color: ${props => props.theme.theme.bg.secondary};
  /* background-color: white; */
  /* align-items: center; */
  align-content: space-between;	
  justify-content: center;
  margin: 0;
  box-sizing: border-box;
  padding: 0 0 16px 0;

  ul{
    list-style-type: none;
    margin: 0;
    padding: 0;

    li {
      text-align: center;
      margin: 25px 0;

      a{
        color: ${props => props.theme.theme.text.tertiary};
        text-decoration: none;
        font-size: 1rem;
      }

      &.current{
          a {
            border-bottom: 0;
          }
    }
  }
}
`

const CloseBtn = styled.div`
  display: grid;
  width: 100vw;
  box-sizing: border-box;
  grid-template-columns: 1fr;
  align-items: center;
  justify-items: right;
  height: 80px;
  padding: 24px 24px 24px 0;
`

export const NavList = ({ currentPage }) => {

  return(
    <ul>
      <li>
        <Link to='/about/' className={currentPage == 'about' && `current`}>About</Link>
      </li>
      <li>
        <Link to='/projects/' className={currentPage == 'projects' && `current`}>Projects</Link>
      </li>
      <li>
        <Link to='/blog/' className={currentPage == 'blog' && `current`}>Blog</Link>
      </li>
      {/* <li>
        <Link to='/photo/'>Photography</Link>
      </li> */}
    </ul>
  )
}

export const socialList = (
  <SocialIcons>
    <a href="https://github.com/ajzeller" target="_blank" rel="noopener">
      <FaGithub size='24px' className='icon' />
    </a>
    <a href="https://dribbble.com/andrewjzeller" target="_blank" rel="noopener">
      <FaDribbble size='24px' className='icon' />
    </a>
    <a href="https://www.linkedin.com/in/andrewjzeller/" target="_blank" rel="noopener">
      <FaLinkedin size='24px' className='icon' />
    </a>
    <a href="https://twitter.com/andrewjzeller" target="_blank" rel="noopener">
      <FaTwitter size='24px' className='icon' />
    </a>
  </SocialIcons>)

const Header = ({ onHideNav, onShowNav, showNav, siteTitle, currentPage }) => {
  
  console.log(currentPage)

  const [isMenuVisible, setIsMenuVisible] = useState(false)

  const dropdown = (
    <Dropdown
      animate={
        isMenuVisible
          ? { x: 0, y: 0, display: 'grid', opacity: 100, scale: 1 }
          : { x: 0, y: '-100vh', display: 'grid', opacity: 0, scale: 1 }
      }
    >
      <CloseBtn>
        <Hamburger>
          <IoMdClose size='24px' onClick={() => setIsMenuVisible(prev => !prev)} />
        </Hamburger>
      </CloseBtn>
      <NavList currentPage={currentPage} />
      {socialList}
    </Dropdown>
  )

  return(
  <HeaderContainerFullWidth>
    <HeaderContainer>
      <Link to='/' className="logo">
          {/* <Logo className='logo' /> */}
          Andrew Zeller
      </Link>

      <Nav>
        <NavList currentPage={currentPage} />
        {socialList}
        <Toggler />
      </Nav>

      <MobileNav>
        <Toggler />
        <Hamburger>
              <IoMdMenu size='24px' onClick={() => setIsMenuVisible(prev => !prev)} />
        </Hamburger>
      </MobileNav>


    </HeaderContainer>

    {/* {isMenuVisible && dropdown} */}
    {dropdown}
  </HeaderContainerFullWidth>
  )
}

export default Header
