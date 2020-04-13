import React, { useState } from 'react'
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
import ProjectCard, { Button } from '../components/projectCard'
import { FaEyeSlash, FaEye  } from "react-icons/fa";
import { MdRadioButtonChecked, MdRadioButtonUnchecked } from "react-icons/md";
import ProjectsGrid from '../components/projectsGrid'
import { responsiveTitle1 } from '../components/typography.module.css'

const ProjectsPage = props => {
  const { data, errors } = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  return (
    <Layout currentPage='projects'>
      <SEO title='Projects' />
      <ContainerMain>
        <H1>Projects</H1>
        <ProjectsGrid data={data} />
      </ContainerMain>
    </Layout>
  )
}

export default ProjectsPage

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

    categories: allSanityCategory {
      edges {
        node {
          title
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
`

