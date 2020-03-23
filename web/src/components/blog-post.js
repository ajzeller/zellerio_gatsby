import { format, distanceInWords, differenceInDays } from 'date-fns'
import React from 'react'
import styled from 'styled-components'
import { buildImageObj } from '../lib/helpers'
import { imageUrlFor } from '../lib/image-url'
import BlockContent from './block-content'
import Container from './container'
import RoleList from './role-list'
import { ContainerFullWidth, ContainerBodyWidth, ContainerMain } from '../containers'
import Img from "gatsby-image"
import { H1, H2, H3, H4, Paragraph } from '../components'

import styles from './blog-post.module.css'

const PublishedDate = styled(H4)`
  font-family: 'IBM Plex Mono', monospace;
  font-weight: 400;
  margin: 0;
  font-size: 0.9rem;
`

const CoverImage = styled(Img)`
  max-height: 600px;
  width: 100%;
`

const ArticleGrid = styled(ContainerBodyWidth)`
  box-sizing: border-box;
  padding: 24px;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: left;
`

const MetaInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`

const AuthorImg = styled(Img)`
  width: 50px;
  border-radius: 50px;
  margin: 0;
`

const AuthorName = styled.span`
  margin:  0 0 0 12px; 
  font-family: 'IBM Plex Mono', monospace;
`

const VerticalDivider = styled.span`
  margin: 0 16px;
  color: ${props => props.theme.theme.border.secondary};
`

const ArticleFullWidth = styled(ContainerFullWidth)`
  background-color: ${props => props.theme.theme.bg.secondary};
`

const AuthorItem = ({ author }) => {
  return(
    <>
      <AuthorImg fluid={author.person.image.asset.fluid} />
      <AuthorName>{author.person.name}</AuthorName>
    </>
  )
}

function BlogPost (props) {
  const { _rawBody, authors, categories, title, mainImage, publishedAt } = props
  console.log(authors)
  return (<>
    <article>
      {mainImage && mainImage.asset && (
          <CoverImage 
            fluid={mainImage.asset.fluid} 
            alt={props.mainImage.alt}
          />
      )}
    <ArticleFullWidth>
      <ArticleGrid>
        <H1>{title}</H1>
        <MetaInfo>
        {authors.map(author => (<AuthorItem author={author} key={author._key} />))}
        <VerticalDivider>|</VerticalDivider>

          <PublishedDate>
            {publishedAt && (
              differenceInDays(new Date(), new Date(publishedAt)) <= 14
                ? `Updated ${distanceInWords(new Date(publishedAt), new Date())} ago`
                : format(new Date(publishedAt), 'MMMM Do YYYY')
            )}
          </PublishedDate>

        </MetaInfo>
      </ArticleGrid>
    </ArticleFullWidth>

      {/* <ArticleFullWidth> */}
        <ArticleGrid>
          {_rawBody && <BlockContent blocks={_rawBody} />}
        </ArticleGrid>
      {/* </ArticleFullWidth> */}
    </article>

    {/* <article className={styles.root}>
      {mainImage && mainImage.asset && (
        <div className={styles.mainImage}>
          <img
            src={imageUrlFor(buildImageObj(mainImage))
              .width(1200)
              .height(Math.floor((9 / 16) * 1200))
              .fit('crop')
              .url()}
            alt={mainImage.alt}
          />
        </div>
      )}
      <Container>
        <div className={styles.grid}>
          <div className={styles.mainContent}>
            <h1 className={styles.title}>{title}</h1>
            {_rawBody && <BlockContent blocks={_rawBody} />}
          </div>
          <aside className={styles.metaContent}>
            {publishedAt && (
              <div className={styles.publishedAt}>
                {differenceInDays(new Date(), new Date(publishedAt)) <= 14
                  ? `${distanceInWords(new Date(publishedAt), new Date())} ago`
                  : format(new Date(publishedAt), 'MMMM Do YYYY')}
              </div>
            )}
            {authors && <RoleList items={authors} title='Authors' />}
            {categories && (
              <div className={styles.categories}>
                <h3 className={styles.categoriesHeadline}>Categories</h3>
                <ul>
                  {categories.map(category => (
                    <li key={category._id}>{category.title}</li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </Container>
    </article> */}
    </>
  )
}

export default BlogPost
