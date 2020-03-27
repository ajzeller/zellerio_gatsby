import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'
import { ContainerFullWidth, ContainerBodyWidth } from '../containers'
import { navList, socialList } from './header'

import { FaGithub, FaDribbble, FaLinkedin, FaTwitter } from "react-icons/fa";

const FooterContainerFullWidth = styled(ContainerFullWidth)`
  background-color: ${ props => props.theme.theme.bg.primary};
  /* background-color: ${ props => props.theme.theme.colors.footerBg}; */
  border-top: 1px solid ${ props => props.theme.theme.border.secondary};
`

const FooterGrid = styled(ContainerBodyWidth)`
  display: grid;
  grid-gap: 24px;
  grid-template-columns: auto auto 1fr;
  align-items: start;
  justify-items: left;
  /* margin: -20px 0 0 0; */
  padding: 24px 24px 24px 24px;
  /* color: white; */

  a {
    color: ${props => props.theme.theme.text.tertiary};
    /* color: white; */
    text-decoration: none;
    font-size: 1rem;
    /* text-transform: uppercase; */

    &:hover {
      color: ${props => props.theme.theme.text.primary};
    }
  }

  span {
    font-weight: 600;
    margin: 0;
    font-size: 1rem;
  }

  .bold{
    font-weight: 600;
    color: ${props => props.theme.theme.text.primary};
  }

  ul{
    /* display: flex; */
    list-style-type:none;
    margin: 0;
    padding: 0;

    li{
      margin: 10px 10px 0 0px;
      a {
        /* color: ${props => props.theme.theme.text.secondary}; */

        &:hover {
          color: ${props => props.theme.theme.text.primary};
        }
      }
    }
  }

  @media (min-width: 401px) and (max-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 400px){
    grid-template-columns: 1fr;
  }
`

const Social = styled.div`
  justify-self: right;

  @media (max-width: 600px){
    justify-self: left;
  }
`


const Footer = ( { logoText, projects } ) => {
  const linksList = (<ul>
    <li>
      <Link to='/about'>About</Link>
    </li>
    <li>
      <Link to='/blog'>Blog</Link>
    </li>
    <li>
      <Link to='/uses'>Uses</Link>
    </li>
    {/* <li>
      <Link to='/photo'>Photography</Link>
    </li> */}

  </ul>)

  console.log(projects)

  return(
    <FooterContainerFullWidth>
      <FooterGrid>
        <div>
          <Link to='/'>
            <span className='bold' >{ logoText }</span>
          </Link>
          {linksList}
        </div>

        <div>
          <Link to='/projects/'>
            <span className='bold' >Projects</span>
          </Link>
          <ul>
            {projects.map(project => (
              <li key={`${project.name}-footer`}>
                <Link to={`/projects/${project.slug.current}/`}>{project.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <Social>
          {socialList}
        </Social>
        
      </FooterGrid>
    </FooterContainerFullWidth>
  )

}

export default Footer