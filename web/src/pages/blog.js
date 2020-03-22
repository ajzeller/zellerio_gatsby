import React from 'react'
import { graphql } from 'gatsby'
import { mapEdgesToNodes } from '../lib/helpers'
import BlogPostPreviewGrid from '../components/blog-post-preview-grid'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import { H1, H2, H3, H4, H5, Paragraph } from '../components'
import { ContainerFullWidth, ContainerBodyWidth, ContainerMain } from '../containers'

import { responsiveTitle1 } from '../components/typography.module.css'

export const query = graphql`
  query BlogPageQuery {
    posts: allSanityPost(limit: 12, sort: { fields: [publishedAt], order: DESC }) {
      edges {
        node {
          id
          publishedAt
          mainImage {
            asset {
              _id
              fluid {
                ...GatsbySanityImageFluid
              }
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

const BlogPage = props => {
  const { data, errors } = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const postNodes = data && data.posts && mapEdgesToNodes(data.posts)

  return (
    <Layout>
      <SEO title='Blog' />
      <ContainerMain>
        <H1>Blog</H1>
        {postNodes && postNodes.length > 0 && <BlogPostPreviewGrid nodes={postNodes} />}
      </ContainerMain>
    </Layout>
  )
}

export default BlogPage
