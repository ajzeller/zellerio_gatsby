import React from 'react'
import styled from 'styled-components'

const Tool = styled.div`
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};
  padding: 4px 8px;
  border-radius: 20px;
  margin: 0 8px 8px 0;
  font-size: 0.8rem;
`

const ToolItem = ({ toolData }) => {
  const { name, color, backgroundColor } = toolData

  return(
    <Tool color={color} backgroundColor={backgroundColor}>
      {name}
    </Tool>
  )
}

export default ToolItem