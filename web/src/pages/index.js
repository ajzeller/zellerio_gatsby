import React from 'react'
import { graphql } from 'gatsby'
import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from '../lib/helpers'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import styled from 'styled-components'
import Masthead from '../components/masthead.js'
import ProjectsPanel from '../components/projectsPanel.js'


const IndexPage = props => {
  const { data, errors } = props

  console.log(data)

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const site = (data || {}).site
  const postNodes = (data || {}).posts
    ? mapEdgesToNodes(data.posts).filter(filterOutDocsWithoutSlugs)
    : []
  const projectNodes = (data || {}).projects
    ? mapEdgesToNodes(data.projects).filter(filterOutDocsWithoutSlugs)
    : []

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    )
  }

  return (
    <Layout currentPage='index'>
      <SEO title={data.site.title} description={data.site.description} keywords={data.site.keywords} />
        <Masthead data={data} />
        <ProjectsPanel data={data} />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
      projects {
        githubUrl
        color
        name
        projectUrl
        summary
        slug {
          _key
          _type
          current
        }
        year
        tools {
          name
          color
          backgroundColor
        }
        categories {
          title
        }
        imageMobile1 {
          asset {
            fluid {
              ...GatsbySanityImageFluid
            }
            fixed(width: 400) {
              ...GatsbySanityImageFixed
            }
          }
        }
      }
    }

    categories: allSanityCategory {
      edges {
        node {
          title
        }
      }
    }

    projects: allSanityProject {
      edges {
        node {
          _rawBody
          githubUrl
          color
          name
          projectUrl
          summary
          slug {
            _key
            _type
            current
          }
          year
          tools {
            name
            color
            backgroundColor
          }
          categories {
            title
          }
          imageMobile1 {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
              fixed(width: 400) {
                ...GatsbySanityImageFixed
              }
            }
          }
        }
      }
    }

    page: sanityPage(_id: { regex: "/(drafts.|)home/" }) {
      id
      title
      _rawBody
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

    posts: allSanityPost(limit: 6, sort: { fields: [publishedAt], order: DESC }) {
      edges {
        node {
          id
          publishedAt
          mainImage {
            crop {
              _key
              _type
              top
              bottom
              left
              right
            }
            hotspot {
              _key
              _type
              x
              y
              height
              width
            }
            asset {
              _id
            }
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`