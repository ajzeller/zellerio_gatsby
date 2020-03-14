import React from 'react'
import styled from 'styled-components'
import Img from "gatsby-image"
import { ContainerFullWidth, ContainerBodyWidth } from '../containers'

const ProjectsPanelContainer = styled(ContainerFullWidth)`
  /* border-radius: 30px; */
  background-color: ${props => props.theme.theme.bg.secondary};
  box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.15);
`

const BodyContainer = styled(ContainerBodyWidth)`
  padding: 24px;
  min-height: 500px;
`

const ProjectsPanel = ({data}) => {

  return(
    <ProjectsPanelContainer>
      <BodyContainer>

      </BodyContainer>
    </ProjectsPanelContainer>
  )
}

export default ProjectsPanel