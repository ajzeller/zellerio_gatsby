import React from 'react'
import { graphql } from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import Project from '../components/project'
import SEO from '../components/seo'
import Layout from '../containers/layout'

export const query = graphql`
  query ProjectTemplateQuery($id: String!) {
    project: sanityProject(id: { eq: $id }) {
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
      imageMobile2 {
        asset {
          fluid {
            ...GatsbySanityImageFluid
          }
          fixed(width: 400) {
            ...GatsbySanityImageFixed
          }
        }
      }
      imageMobile3 {
        asset {
          fluid {
            ...GatsbySanityImageFluid
          }
          fixed(width: 400) {
            ...GatsbySanityImageFixed
          }
        }
      }
      imageDesktop {
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
`

const ProjectTemplate = props => {
  const { data, errors } = props
  const project = data && data.project
  return (
    <Layout>
      {errors && <SEO title='GraphQL Error' />}
      {project && <SEO title={project.name || 'Untitled'} />}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}
      {project && <Project {...project} />}
    </Layout>
  )
}

export default ProjectTemplate
