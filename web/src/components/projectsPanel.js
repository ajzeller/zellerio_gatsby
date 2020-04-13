import React from 'react'
import styled from 'styled-components'
import Img from "gatsby-image"
import { motion } from "framer-motion";

import { H1, H2, H3, H4, H5, Paragraph } from '../components'
import { ContainerFullWidth, ContainerBodyWidth } from '../containers'
import ProjectCard from './projectCard'
import ProjectsGrid from './projectsGrid'

const ProjectsPanelContainer = styled(motion.div)`
  /* border-radius: 20px; */
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  width: 100%;
  background-color: ${props => props.theme.theme.bg.primary};
  /* box-shadow: 0px -10px 0px 0px rgba(0,0,0,0.05); */
  border-top: 1px solid ${ props => props.theme.theme.border.secondary};
  position: relative;
  top: 500px;
  min-height: 500px;
  margin: 0 0 0px 0;
`

const BodyContainer = styled(ContainerBodyWidth)`
  padding: 24px 24px 48px 24px;
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
`

const Title = styled(H2)`
  margin: 0 0 24px 0;
  text-align: center;
  font-size: 1.8rem;
`

const ProjectsPanel = ({data}) => {
  console.log(data)

  return(
    <ProjectsPanelContainer
      animate={{y: -500}}
    >
      <BodyContainer>
        <Title>My Projects</Title>

        <ProjectsGrid data={data} />

      </BodyContainer>
    </ProjectsPanelContainer>
  )
}

export default ProjectsPanel