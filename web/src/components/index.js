import React from 'react'
import styled from 'styled-components'

export const H1 = styled.h1`
  font-size: 2.4rem;
`

export const H2 = styled.h2`
  font-size: 1.4rem;
`

export const H3 = styled.h3`
  font-size: 1.2rem;
`

export const H4 = styled.h4`
  font-size: 1rem;
`

export const Paragraph = styled.p`
  font-size: 1rem;

  a{
    color: ${props => props.theme.theme.text.primary};
    border-bottom: 4px solid ${props => props.theme.theme.border.secondary};

    &:hover {
      
    }
  }
`