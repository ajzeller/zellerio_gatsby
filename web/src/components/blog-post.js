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
import { H1, H2, H3, H4, H5, Paragraph } from '../components'

import styles from './blog-post.module.css'

function BlogPost (props) {
  const { _rawBody, authors, categories, title, mainImage, publishedAt } = props
  return (<>
    <article>

    </article>

    <article className={styles.root}>
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
    </article>
    </>
  )
}

export default BlogPost
