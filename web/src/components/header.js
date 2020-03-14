import { Link } from 'gatsby'
import React, { useState } from 'react'
import Icon from './icons'
import { cn } from '../lib/helpers'
import styled from 'styled-components'
import styles from './header.module.css'
import Logo from '../assets/logo.svg'
import Toggler from './toggler'
import { ContainerFullWidth, ContainerBodyWidth } from '../containers'

import { FaGithub, FaDribbble, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoMdMenu, IoMdClose } from "react-icons/io";


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
  justify-items: center;
  align-items: center;

  .icon {
    display: block;
    margin: 0 0 0 12px;
  }

  a {
    color: ${props => props.theme.theme.text.tertiary};
  }
`

const Hamburger = styled.div`
  display: none;
  justify-self: right;

  svg{
    display: block;
    color: ${props => props.theme.theme.text.primary};
  }

  @media (max-width: 700px) {
    display: block;
  }
`

const Dropdown = styled.div`
  display: grid;
  z-index: 100;
  position: fixed;
  top: 0px;
  left: 0px;
  height: 100vh;
  width: 100%;
  /* background-color: ${props => props.theme.theme.bg.primary}; */
  background-color: white;
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

const Header = ({ onHideNav, onShowNav, showNav, siteTitle }) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false)

  const navList = (
    <ul>
      <li>
        <Link to='/about/'>About</Link>
      </li>
      <li>
        <Link to='/projects/'>Projects</Link>
      </li>
      <li>
        <Link to='/blog/'>Blog</Link>
      </li>
      <li>
        <Link to='/photo/'>Photo</Link>
      </li>
    </ul>)

  const socialList = (
    <SocialIcons>
      <Link to='#'>
        <FaGithub size='24px' className='icon' />
      </Link>
      <Link to='#'>
        <FaDribbble size='24px' className='icon' />
      </Link>
      <Link to='#'>
        <FaLinkedin size='24px' className='icon' />
      </Link>
      <Link to='#'>
        <FaTwitter size='24px' className='icon' />
      </Link>
    </SocialIcons>)

  const dropdown = (
    <Dropdown>
      <CloseBtn>
        <Hamburger>
          <IoMdClose size='24px' onClick={() => setIsMenuVisible(prev => !prev)} />
        </Hamburger>
      </CloseBtn>
      {navList}
      {socialList}
    </Dropdown>
  )

  return(
  <ContainerFullWidth>
    <HeaderContainer>
      <Link to='/' className="logo">
          {/* <Logo className='logo' /> */}
          Andrew Zeller
      </Link>

      <Nav>
        {navList}
        {socialList}
        <Toggler />
      </Nav>

    <Hamburger>
          <IoMdMenu size='24px' onClick={() => setIsMenuVisible(prev => !prev)} />
    </Hamburger>

    </HeaderContainer>

    {isMenuVisible && dropdown}
  </ContainerFullWidth>
  )
}



  // <div className={styles.root}>
  //   <div className={styles.wrapper}>
  //     <h1 className={styles.branding}>
  //       <Link to='/'>
  //         <Logo />
  //       </Link>
  //     </h1>

  //     <button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
  //       <Icon symbol='hamburger' />
  //     </button>

  //     <nav className={cn(styles.nav, showNav && styles.showNav)}>
  //       <ul>
  //         <li>
  //           <Link to='/about/'>About</Link>
  //         </li>
  //         <li>
  //           <Link to='/projects/'>Projects</Link>
  //         </li>
  //         <li>
  //           <Link to='/blog/'>Blog</Link>
  //         </li>
  //         <li>
  //           <Link to='/contact/'>Contact</Link>
  //         </li>
  //       </ul>
  //     </nav>
  //   </div>
  // </div>

export default Header
