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

const ToolsList = styled.ul`
  list-style: none;
`

const UsesPage = props => {
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
    <Layout currentPage='uses'>
      <SEO title={page.title} />
      <ContainerMain>
        <H1>Uses</H1>
        <p>Inspired by <a href="https://uses.tech/" target="_blank">uses.tech</a> by <a href="https://wesbos.com/" target="_blank">Wes Bos</a>. 
          These are the tools I use to build apps and sites.
        </p>
        <H2>Hardware</H2>
        <ToolsList>
          <ListItem name='MacBook Pro' detail='Late 2013 Retina 15 inch' link='https://manuel.bernhardt.io/2019/06/07/why-im-still-using-a-macbook-pro-late-2013/' />
          <ListItem name='32inch 4k monitor' detail='AOC' link='https://www.amazon.com/gp/product/B01N8ZIWM3/ref=ppx_yo_dt_b_asin_title_o06_s00?ie=UTF8&psc=1' />
          <ListItem name='Sony MDR7506 Headphone' link='https://www.amazon.com/Sony-MDR7506-Professional-Diaphragm-Headphone/dp/B000AJIF4E/'  />
        </ToolsList>

        <H2>Software</H2>
        <H3>Development</H3>
        <ToolsList>
          <ListItem name='VS Code' detail='Editor' link='https://code.visualstudio.com/' />
          <ListItem name='Hyper' detail='Terminal' link='https://hyper.is/' />
          <ListItem name='Notion.so' detail='Organization' link='https://www.notion.so/' />
          <ListItem name='Airtable' detail='Organization' link='https://airtable.com/' />

        </ToolsList>

        <H3>Frameworks & Libraries</H3>
        <ToolsList>
          <ListItem name='React' detail='Javascript UI Library' link='https://reactjs.org/' />
          <ListItem name='Redux' detail='State management' link='https://redux.js.org/' />
          <ListItem name='Next.js' detail='Framework for React apps' link='https://nextjs.org/' />
          <ListItem name='Gatsby.js' detail='Framework for React static sites' link='https://www.gatsbyjs.org/' />
          <ListItem name='Node.js' detail='Javascript Runtime' link='https://nodejs.org/en/' />
          <ListItem name='Express.js' detail='Web framework for Node.js' link='https://expressjs.com/' />
        </ToolsList>
        <H3>Data</H3>
        <ToolsList>
          <ListItem name='Sanity.io' detail='Headless CMS' link='https://www.sanity.io/' />
          <ListItem name='MongoDB' detail='NoSQL database' link='https://www.mongodb.com/' />
          <ListItem name='D3.js' detail='Javascript library for data visualization' link='https://d3js.org/' />
        </ToolsList>
        <H3>Design tools and libraries</H3>
        <ToolsList>
          <ListItem name='Sketch App' detail='User Interface design' link='https://www.sketch.com/' />
          <ListItem name='Styled Components' detail='CSS-in-JS Library for React' link='https://styled-components.com/' />
          <ListItem name='Framer Motion' detail='Animation library for React' link='https://www.framer.com/motion/' />
          <ListItem name='SASS' detail='CSS with superpowers' link='https://sass-lang.com/' />
        </ToolsList>
        <H3>Deployment</H3>
        <ToolsList>
          <ListItem name='Netlify' detail='JAMstack, serverless, Global CDN' link='https://www.netlify.com/' />
          <ListItem name='Zeit Now' detail='JAMstack, serverless, Global CDN' link='https://zeit.co/home' />
          <ListItem name='Heroku' detail='Platform-as-a-service' link='https://www.heroku.com/home' />
        </ToolsList>
        <H3>Typefaces</H3>
        <ToolsList>
          <ListItem name='IBM Plex Sans' link='https://fonts.google.com/specimen/IBM+Plex+Sans' />
          <ListItem name='IBM Plex Mono' link='https://fonts.google.com/specimen/IBM+Plex+Mono' />
          <ListItem name='IBM Plex Serif' link='https://fonts.google.com/specimen/IBM+Plex+Serif' />
          <ListItem name='Inter' link='https://fonts.google.com/specimen/Inter' />
          <ListItem name='Playfair Display' link='https://fonts.google.com/specimen/Playfair+Display' />
        </ToolsList>

      </ContainerMain>
    </Layout>
  )
}

export default UsesPage

export const query = graphql`
  query UsesPageQuery {
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
