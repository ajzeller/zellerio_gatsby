import { graphql, StaticQuery } from 'gatsby'
import React, { useState } from 'react'
import Layout from '../components/layout'

const query = graphql`
  query SiteTitleQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      logoText
      projects {
        name
        slug {
          _key
          _type
          current
        }
      }
    }
  }
`

function LayoutContainer (props) {

  const [showNav, setShowNav] = useState(false)
  function handleShowNav () {
    setShowNav(true)
  }
  function handleHideNav () {
    setShowNav(false)
  }
  return (
    <StaticQuery
      query={query}
      render={data => {
        if (!data.site) {
          throw new Error(
            'Missing "Site settings". Open the studio at http://localhost:3333 and add "Site settings" data'
          )
        }
        
        return (
          <Layout
            {...props}
            showNav={showNav}
            companyInfo={data.companyInfo}
            siteTitle={data.site.title}
            logoText={data.site.logoText}
            projects={data.site.projects}
            onHideNav={handleHideNav}
            onShowNav={handleShowNav}
            currentPage={props.currentPage}
          />
        )
      }}
    />
  )
}

export default LayoutContainer
