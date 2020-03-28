import { Link } from 'gatsby'
import React, { useState } from 'react'
import { motion } from "framer-motion";
import styled from 'styled-components'

import Toggler from './toggler'
import { ContainerFullWidth, ContainerBodyWidth } from '../containers'
import { FaGithub, FaDribbble, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoMdMenu, IoMdClose, IoIosMore } from "react-icons/io";

const HeaderContainerFullWidth = styled(ContainerFullWidth)`
  background-color: ${props => props.theme.theme.bg.secondary};
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
    padding: 6px 0;

    &.current {
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

const NavListWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  justify-self: left;

  ul{
    justify-self: left;
    display: flex;
    align-items: center;
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
    padding: 6px 0;

    &.current {
      border-bottom: 2px solid ${props => props.theme.theme.colors.blue};
    }

    &:hover {
      color: ${props => props.theme.theme.text.primary};
    }
  }

  svg{
    vertical-align: bottom;
    color: ${props => props.theme.theme.text.secondary};

    &:hover {
      cursor: pointer;
    }
  }

  @media (max-width: 700px) {
    justify-self: center;

    ul{
      flex-direction: column;
    }
  }
`

const OverflowMenuWrapper = styled(motion.div)`
  padding: 12px;
  background-color: ${props => props.theme.theme.bg.secondary};
  border: 1px solid ${props => props.theme.theme.border.secondary};
  border-radius: 12px;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);
  position: absolute;
  left: calc(100% - 35px);
  top: -150px;
  display: none;
  z-index: 100;

  ul{
    /* list-style: none; */
    display: grid;
    grid-gap: 8px;
    justify-items: left;

    li {
      -webkit-user-select: none; /* Chrome/Safari */        
      -moz-user-select: none; /* Firefox */
      -ms-user-select: none; /* IE10+ */
    }
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

const OverflowMenu = ( {currentPage} ) => {
  return(
    <>
      <li>
        <Link to='/uses/' className={currentPage == 'uses' && `current`}>Uses</Link>
      </li>
      <li>
        <a href='https://drive.google.com/file/d/1ZL3zTvsKfD4ryFdvCjFNsYC9TfhtYrm0/view?usp=sharing' target="_blank">
          Resume
        </a>
      </li>
    </>
  )
}

export const NavList = ({ currentPage, isMenuVisible }) => {
  const [isOverflowMenuVisible, setIsOverflowMenuVisible] = useState(false)

  return(
    <NavListWrapper>
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
        {
          !isMenuVisible && (
            <li>
              <IoIosMore size='24px' onClick={() => setIsOverflowMenuVisible(prev => !prev)} />
          </li>
          )
        }

        {
          isMenuVisible && <OverflowMenu />
        }
      </ul>
      <OverflowMenuWrapper animate={
        isOverflowMenuVisible ? {
          display: 'block',
          opacity: 1,
          scale: 1,
          top: '50px',
        } : {
          top: '-150px',
          opacity: 0,
        }
      }
      transition={{ duration: 0.2 }}
      >
        <ul>
          <OverflowMenu currentPage={currentPage} />
        </ul>
      </OverflowMenuWrapper>
    </NavListWrapper>
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
      <NavList currentPage={currentPage} isMenuVisible={isMenuVisible} />
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
