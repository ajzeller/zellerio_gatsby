import React from 'react'
import styled from 'styled-components'
import Header from './header'
import Provider from './provider'
import Footer from './footer'
import '../styles/layout.css'
import styles from './layout.module.css'
import '../styles/styles.scss'

const Content = styled.div`
  color: ${props => props.theme.theme.text.primary};
  background-color: ${props => props.theme.theme.bg.primary};
  /* padding: 24px 0 0 0; */

  p, li{
    a{
      color: ${props => props.theme.theme.text.primary};
      border-bottom: 4px solid ${props => props.theme.theme.border.secondary};
      
      &:hover {
        
      }
    }
  }
`

const Layout = ({ children, companyInfo, onHideNav, onShowNav, showNav, siteTitle, logoText, projects }) => (
  <Provider>
    <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />

    <Content className={styles.content}>{children}</Content>
    <Footer logoText={logoText} projects={projects} />

    {/* <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.companyAddress}>
          {companyInfo && (
            <div>
              {companyInfo.name}
              <br />
              {companyInfo.address1}
              <br />
              {companyInfo.address2 && (
                <span>
                  {companyInfo.address2}
                  <br />
                </span>
              )}
              {companyInfo.zipCode} {companyInfo.city}
              {companyInfo.country && <span>, {companyInfo.country}</span>}
            </div>
          )}
        </div>

        <div className={styles.siteInfo}>
          © {new Date().getFullYear()}, Built with <a href='https://www.sanity.io'>Sanity</a> &amp;
          {` `}
          <a href='https://www.gatsbyjs.org'>Gatsby</a>
        </div>
      </div>
    </footer> */}
  </Provider>
)

export default Layout
