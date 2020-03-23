import { Link } from 'gatsby'
import React from 'react'
import { buildImageObj, cn, getBlogUrl } from '../lib/helpers'
import { imageUrlFor } from '../lib/image-url'
import BlockText from './block-text'
import Img from "gatsby-image"
import styled from 'styled-components'
import { motion } from "framer-motion";
import { H1, H2, H3, H4, H5, Paragraph } from '../components'
import { format, distanceInWords, differenceInDays, getMinutes } from 'date-fns'

import styles from './blog-post-preview.module.css'
import { responsiveTitle3 } from './typography.module.css'

const BlogPostPreviewGrid = styled(motion.div)`
  background-color: ${props => props.theme.theme.bg.secondary};
  display: grid;
  width: 100%;
  grid-template-columns: auto 1fr;
  grid-gap: 24px;
  justify-content: left;
  /* border: 1px solid ${props => props.theme.theme.border.secondary}; */
  border-radius: 12px;
  overflow: hidden;

  &:hover{
    /* background-color: ${props => props.theme.theme.border.secondary}; */
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    grid-gap: 12px;
  }
`

const BlogPostInfo = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 12px;

  @media (max-width: 700px) {
    padding: 0 12px 12px 12px;
  }
`

const Title = styled(H3)`
  margin: 6px 0 12px 0;
`

const Image = styled(Img)`
  /* width: 100%;
  height: 100%; */
  width: 200px;
  max-height: 250px;
  /* height: 200px; */

  @media (max-width: 700px) {
    width: 100%;
  }
`

const ImageWrapper = styled.div`
  overflow-y: hidden;
  width: 200px;
  height: 200px;
`

const PublishedDate = styled(H4)`
  font-family: 'IBM Plex Mono', monospace;
  text-transform: uppercase;
  font-weight: 400;
  margin: 0;
`

function BlogPostPreview (props) {
  console.log(props)

  return (
    <Link to={getBlogUrl(props.publishedAt, props.slug.current)}>
      <BlogPostPreviewGrid 
        whileHover={{
          scale: 1.02,
          boxShadow: '0px 0px 20px 0px rgba(0,0,0,0.05)'
        }}>
        {/* <ImageWrapper> */}
          {props.mainImage && props.mainImage.asset && (
            <Image 
              fluid={props.mainImage.asset.fluid}
              alt={props.mainImage.alt}
              objectFit="contain"
              objectPosition="center top"
            />
          )}
        {/* </ImageWrapper> */}
        <BlogPostInfo>
          <Title>
            {props.title}
          </Title>
          <PublishedDate>
              {props.publishedAt && (
                differenceInDays(new Date(), new Date(props.publishedAt)) <= 14
                  ? `${distanceInWords(new Date(props.publishedAt), new Date())} ago`
                  : format(new Date(props.publishedAt), 'MMMM Do YYYY')
              )}
            </PublishedDate>
          {/* <p>{format(new Date(props.publishedAt), 'MMMM Do YYYY')}</p> */}

        </BlogPostInfo>

      </BlogPostPreviewGrid>
      {/* <div className={styles.leadMediaThumb}>
        {props.mainImage && props.mainImage.asset && (
          <img
            src={imageUrlFor(buildImageObj(props.mainImage))
              .width(600)
              .height(Math.floor((9 / 16) * 600))
              .url()}
            alt={props.mainImage.alt}
          />
        )}
      </div>
      <h3 className={cn(responsiveTitle3, styles.title)}>{props.title}</h3>
      {props._rawExcerpt && (
        <div className={styles.excerpt}>
          <BlockText blocks={props._rawExcerpt} />
        </div>
      )} */}
    </Link>
  )
}

export default BlogPostPreview
