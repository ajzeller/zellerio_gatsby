import { Link } from 'gatsby'
import React from 'react'
import { buildImageObj, cn, getBlogUrl } from '../lib/helpers'
import { imageUrlFor } from '../lib/image-url'
import BlockText from './block-text'
import Img from "gatsby-image"
import styled from 'styled-components'
import { H1, H2, H3, H4, H5, Paragraph } from '../components'
import { format, distanceInWords, differenceInDays, getMinutes } from 'date-fns'

import styles from './blog-post-preview.module.css'
import { responsiveTitle3 } from './typography.module.css'

const BlogPostPreviewGrid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: auto 1fr;
  grid-gap: 24px;
  justify-content: left;

  &:hover{
    background-color: ${props => props.theme.theme.border.secondary};
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`

const BlogPostInfo = styled.div`
  width: 100%;
`

const Image = styled(Img)`
  /* width: 100%;
  height: 100%; */
  width: 200px;
  height: 200px;
`

const ImageWrapper = styled.div`
  overflow-y: hidden;
  width: 200px;
  height: 200px;
`

function BlogPostPreview (props) {
  console.log(props)

  return (
    <Link to={getBlogUrl(props.publishedAt, props.slug.current)}>
      <BlogPostPreviewGrid>
        {/* <ImageWrapper> */}
          {props.mainImage && props.mainImage.asset && (
            <Image 
              fluid={props.mainImage.asset.fluid}
              alt={props.mainImage.alt}
              objectFit="cover"
              objectPosition="center top"
            />
          )}
        {/* </ImageWrapper> */}
        <BlogPostInfo>
          <H2>
            {props.title}
          </H2>
          <p>{format(new Date(props.publishedAt), 'MMMM Do YYYY')}</p>

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
