import React from 'react'
// import { graphql } from 'gatsby'
import SEO from '../components/seo'
import Container from '../components/layout'
import Layout from '../containers/layout'
import { ContainerFullWidth, ContainerBodyWidth, ContainerMain } from '../containers'
import { H1, H2, H3, H4, H5, Paragraph } from '../components'

import { responsiveTitle1 } from '../components/typography.module.css'

export const query = graphql`
  query NotFoundPageQuery {
    page: sanityPage(_id: { regex: "/(drafts.|)about/" }) {
      id
      title
      _rawBody
    }
    people: allSanityPerson {
      edges {
        node {
          id
          image {
            asset {
              _id
            }
          }
          name
          _rawBio
        }
      }
    }
  }
`

const NotFoundPage = () => (
  <Layout>
    <SEO title='404: Not found' />
    <ContainerMain>
      <H1>404</H1>
      <p>Whoops, looks like you hit a route that doesn't exist.</p>
    </ContainerMain>
  </Layout>
)

export default NotFoundPage