import React from 'react'
import styled from 'styled-components'
import Img from "gatsby-image"
import { graphql } from 'gatsby'
import BlockContent from '../components/block-content'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import { ContainerFullWidth, ContainerBodyWidth, ContainerMain } from '../containers'
import { H1, H2, H3, H4, H5, Paragraph } from '../components'
import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from '../lib/helpers'

import { responsiveTitle1 } from '../components/typography.module.css'

const Image = styled(Img)`
  margin: 0 auto;
  width: 150px;
  height: 150px;
  border-radius: 200px;
  justify-self: center;
`

export const query = graphql`
  query AboutPageQuery {
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
    myInfo: sanityMyInfo {
      mainImage {
        asset {
          fluid {
            base64
            aspectRatio
            src
            srcSet
            srcWebp
            srcSetWebp
            sizes
          }
        }
        alt
      }
    }
  }
`

const AboutPage = props => {
  const { data, errors } = props
  console.log(data)

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const page = data && data.page
  const profileImage = data && data.myInfo.mainImage

  if (!page) {
    throw new Error(
      'Missing "About" page data. Open the studio at http://localhost:3333 and add "About" page data and restart the development server.'
    )
  }

  return (
    <Layout>
      <SEO title={page.title} />
      <ContainerMain>
        <Image fluid={profileImage.asset.fluid} />
        <BlockContent blocks={page._rawBody || []} />
      </ContainerMain>
    </Layout>
  )
}

export default AboutPage
