import BaseBlockContent from '@sanity/block-content-to-react'
import React from 'react'
import styled from 'styled-components'
// import SyntaxHighlighter from 'react-syntax-highlighter';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { H1, H2, H3, H4, H5, Paragraph } from '../'
import Figure from './figure'
import Slideshow from './slideshow'

import typography from '../typography.module.css'

const CodeWrapper = styled.div`
  display: grid;
  /* overflow-x: scroll; */
`

const serializers = {
  types: {
    block (props) {
      switch (props.node.style) {
        case 'h1':
          return <H1>{props.children}</H1>

        case 'h2':
          return <H2>{props.children}</H2>

        case 'h3':
          return <H3>{props.children}</H3>

        case 'h4':
          return <H4>{props.children}</H4>

        // case 'h1':
        //   return <h1 className={typography.responsiveTitle1}>{props.children}</h1>

        // case 'h2':
        //   return <h2 className={typography.responsiveTitle2}>{props.children}</h2>

        // case 'h3':
        //   return <h3 className={typography.responsiveTitle3}>{props.children}</h3>

        // case 'h4':
        //   return <h4 className={typography.responsiveTitle4}>{props.children}</h4>

        case 'blockquote':
          return <blockquote className={typography.blockQuote}>{props.children}</blockquote>

        // default:
        //   return <p className={typography.paragraph}>{props.children}</p>
        default:
          return <Paragraph>{props.children}</Paragraph>
      }
    },
    figure (props) {
      return <Figure {...props.node} />
    },
    slideshow (props) {
      return <Slideshow {...props.node} />
    },
    code ({ node = {} }) {
      const {code, language} = node

      if(!code){ return null }

      return(
        <CodeWrapper>
          <SyntaxHighlighter 
            language={language || 'text' } 
            style={tomorrow}
            customStyle={{padding: '12px', borderRadius: '12px'}}
          >
            {code}
          </SyntaxHighlighter>
        </CodeWrapper>
      )
    }
  },
  marks: {
    link: ({mark, children}) => {
      // Read https://css-tricks.com/use-target_blank/
      const { blank, href } = mark
      return blank ?
        <a href={href} target="_blank" rel="noopener">{children}</a>
        : <a href={href}>{children}</a>
    }
  }
}

const BlockContent = ({ blocks }) => <BaseBlockContent blocks={blocks} serializers={serializers} />

export default BlockContent
