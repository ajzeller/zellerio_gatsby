import { Link } from 'gatsby'
import React from 'react'
import BlogPostPreview from './blog-post-preview'
import styled from 'styled-components'

import styles from './blog-post-preview-grid.module.css'

const List = styled.ul`
  list-style: none;
  padding: 0;
`

function BlogPostPreviewGrid (props) {
  return (
    <List>
      {props.nodes &&
        props.nodes.map(node => (
          <li key={node.id}>
            <BlogPostPreview {...node} />
          </li>
        ))}
    </List>
    // <div className={styles.root}>
    //   {props.title && (
    //     <h2 className={styles.headline}>
    //       {props.browseMoreHref ? (
    //         <Link to={props.browseMoreHref}>{props.title}</Link>
    //       ) : (
    //         props.title
    //       )}
    //     </h2>
    //   )}
    //   <ul className={styles.grid}>
    //     {props.nodes &&
    //       props.nodes.map(node => (
    //         <li key={node.id}>
    //           <BlogPostPreview {...node} />
    //         </li>
    //       ))}
    //   </ul>
    //   {props.browseMoreHref && (
    //     <div className={styles.browseMoreNav}>
    //       <Link to={props.browseMoreHref}>Browse more</Link>
    //     </div>
    //   )}
    // </div>
  )
}

BlogPostPreviewGrid.defaultProps = {
  title: '',
  nodes: [],
  browseMoreHref: ''
}

export default BlogPostPreviewGrid
