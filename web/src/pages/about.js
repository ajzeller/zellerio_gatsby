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
import ListItem from '../components/list-item'

const Image = styled(Img)`
  margin: 0 auto;
  width: 150px;
  height: 150px;
  border-radius: 200px;
  justify-self: center;
`

const ToolsList = styled.ul`
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
    <Layout currentPage='about'>
      <SEO title={page.title} />
      <ContainerMain>
        <Image fluid={profileImage.asset.fluid} />
        <BlockContent blocks={page._rawBody || []} />
        <H2>My Toolbox</H2>
        <p>These are the tools I have experience using to build apps and sites. I'm constantly learning new tools so this list is subject to change 🤓.</p>
        <H3>Frameworks & Libraries</H3>
        <ToolsList>
          <ListItem name='React' link='' detail='Javascript UI Library' link='https://reactjs.org/' />
          <ListItem name='Redux' link='' detail='State management' link='https://redux.js.org/' />
          <ListItem name='Next.js' link='' detail='Framework for React apps' link='https://nextjs.org/' />
          <ListItem name='Gatsby.js' link='' detail='Framework for React static sites' link='https://www.gatsbyjs.org/' />
          <ListItem name='Node.js' link='' detail='Javascript Runtime' link='https://nodejs.org/en/' />
          <ListItem name='Express.js' link='' detail='Web framework for Node.js' link='https://expressjs.com/' />
        </ToolsList>
        <H3>Data</H3>
        <ToolsList>
          <ListItem name='Sanity.io' link='' detail='Headless CMS' link='https://www.sanity.io/' />
          <ListItem name='MongoDB' link='' detail='NoSQL database' link='https://www.mongodb.com/' />
          <ListItem name='D3.js' link='' detail='Javascript library for data visualization' link='https://d3js.org/' />
        </ToolsList>
        <H3>Design tools and libraries</H3>
        <ToolsList>
          <ListItem name='Sketch App' link='' detail='User Interface design' link='https://www.sketch.com/' />
          <ListItem name='Styled Components' link='' detail='CSS-in-JS Library for React' link='https://styled-components.com/' />
          <ListItem name='Framer Motion' link='' detail='Animation library for React' link='https://www.framer.com/motion/' />
          <ListItem name='SASS' link='' detail='CSS with superpowers' link='https://sass-lang.com/' />
        </ToolsList>

      </ContainerMain>
    </Layout>
  )
}

export default AboutPage

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
