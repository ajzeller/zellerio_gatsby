import React from 'react'
import styled from 'styled-components'
import Img from "gatsby-image"
import { motion } from "framer-motion";

import { ContainerFullWidth, ContainerBodyWidth } from '../containers'
import ProjectCard from './projectCard'

const ProjectsPanelContainer = styled(motion.div)`
  border-radius: 20px;
  width: 100%;
  background-color: ${props => props.theme.theme.bg.tertiary};
  box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.15);
  position: relative;
  top: 500px;
  min-height: 500px;
`

const BodyContainer = styled(ContainerBodyWidth)`
  padding: 48px 24px;
  min-height: 1000px;
  /* box-sizing: border-box; */

  @media (max-width: 400px) {
    padding: 48px 12px;
  }
`

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-gap: 48px;
  box-sizing: border-box;

  /* @media (max-width: 700px) {
    grid-template-columns: 1fr;
  } */
`

const ProjectsPanel = ({data}) => {
  console.log(data)

  return(
    <ProjectsPanelContainer
      animate={{y: -500}}
    >
      <BodyContainer>
        <ProjectGrid>
          {data.site.projects.map(project => (<ProjectCard projectData={project} key={project.slug.current} />) )}
        </ProjectGrid>
      </BodyContainer>
    </ProjectsPanelContainer>
  )
}

export default ProjectsPanel