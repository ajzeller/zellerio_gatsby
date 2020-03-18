import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import ProjectPreviewGrid from '../components/project-preview-grid'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from '../lib/helpers'
import { ContainerFullWidth, ContainerBodyWidth, ContainerMain } from '../containers'
import { H1, H2, H3, H4, H5, Paragraph } from '../components'
import ProjectCard from '../components/projectCard'

import { responsiveTitle1 } from '../components/typography.module.css'

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-gap: 48px;
  box-sizing: border-box;
`

export const query = graphql`
  query ProjectsPageQuery {
    projects: allSanityProject{
      edges {
        node {
          id
          slug {
            current
          }
        }
      }
    }

    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
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
`

const ProjectsPage = props => {
  const { data, errors } = props
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }
  const projectNodes =
    data && data.projects && mapEdgesToNodes(data.projects).filter(filterOutDocsWithoutSlugs)
  return (
    <Layout>
      <SEO title='Projects' />
      <ContainerMain>
        <H1>Projects</H1>
        <ProjectGrid>
          {data.site.projects.map(project => (<ProjectCard projectData={project} key={project.slug.current} />) )}
        </ProjectGrid>
        {/* {projectNodes && projectNodes.length > 0 && <ProjectPreviewGrid nodes={projectNodes} />} */}
      </ContainerMain>
    </Layout>
  )
}

export default ProjectsPage
