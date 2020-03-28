import React from 'react'
import styled from 'styled-components'
import Header from './header'
import Provider from './provider'
import Footer from './footer'
import '../styles/layout.css'
import styles from './layout.module.css'
import '../styles/styles.scss'
// import 'bootstrap/dist/css/bootstrap.min.css';

const Content = styled.div`
  color: ${props => props.theme.theme.text.primary};
  background-color: ${props => props.theme.theme.bg.secondary};
  min-height: calc(100vh - 80px - 167px);
  /* padding: 24px 0 0 0; */

  p, li{
    a{
      color: ${props => props.theme.theme.text.primary};
      border-bottom: 2px solid ${props => props.theme.theme.border.secondary};
      
      &:hover {
        /* background-color: ${props => props.theme.theme.border.tertiary}; */
        border-bottom: 2px solid ${props => props.theme.theme.colors.blue};
      }
    }
  }
`

const Layout = ({ children, companyInfo, onHideNav, onShowNav, showNav, siteTitle, logoText, projects, currentPage }) => (
  <Provider>
    <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} currentPage={currentPage} />

    <Content className={styles.content}>{children}</Content>
    <Footer logoText={logoText} projects={projects} />
  </Provider>
)

export default Layout
