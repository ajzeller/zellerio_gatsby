import React from 'react'
import styled from 'styled-components'
import Img from "gatsby-image"
import { Link } from 'gatsby'
import { motion } from "framer-motion";
import { IoMdArrowForward } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import ToolItem from './toolItem'
import { H1, H2, H3, H4, H5, Paragraph } from '../components'
import {
  useWindowSize,
  useWindowWidth,
  useWindowHeight,
} from '@react-hook/window-size'

const Card = styled(motion.div)`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 48px;
  grid-template-rows: 500px;
  /* background-color: ${props => props.theme.theme.bg.secondary}; */
  background-color: ${props => props.color};
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.15);
  border-radius: 20px;
  overflow: hidden;
  color: white;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`

const Image = styled(Img)`
  /* object-position: center top; */
`

const ImageWrapper = styled(motion.div)`
  width: 40vw;
  max-width: 350px;
  height: 500px;
  overflow: hidden;
  justify-self: right;
  box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.2);
  margin: 48px 0 0 48px;
  border-top-right-radius: 24px;
  border-top-left-radius: 24px;
  position: relative;
  top: 100px;

  @media (max-width: 700px) {
    margin: 24px auto 0 auto;
    height: 500px;
    max-width: 500px;
    top: 0px;
    width: 80vw;
    justify-self: center;
    border-radius: 24px;
  }
`

const ProjectInfo = styled.div`
  display: grid;
  grid-gap: 24px;
  align-items: start;
  align-content: start;
  padding: 24px 24px 24px 0;

  h2{
    font-size: 2rem;
    margin: 20px 0 0 0;
  }

  p{
    margin: 0;
  }

  @media (max-width: 700px) {
    padding: 16px;
  }
  
`

export const Button = styled(motion.button)`
  display: flex;
  border: 0;
  font-size: 1rem;
  font-weight: 500;
  padding: 5px 10px;
  align-items: center;
  border-radius: 5px;
  height: 40px;

  &:hover {
    cursor: pointer;
  }

  &:focus {outline:0;}

  svg{
    margin: 0 0 0 8px;
  }
`

const ButtonPrimary = styled(Button)`
  color: ${props => props.color};
  background-color: white;
  margin: 0 12px 0 0;
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.1);
`

const ButtonSecondary = styled(Button)`
  color: white;
  background-color: ${props => props.color};
  /* background-color: none; */
  border: 1px solid white;
  margin: 0 12px 0 0;
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.1);
`

const ToolGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-start;
`

const ProjectCard = ({projectData}) => {
  console.log(projectData)
  const { 
    name, 
    color,
    projectUrl,
    githubUrl,
    summary,
    slug,
    imageMobile1,
    tools
   } = projectData

   let [width, height] = useWindowSize()

   if(!width){
    width = 1000
   }

   console.log(`width: ${width}`)

  return(
    // <Link to={`/projects/${slug.current}`}>
      <Card color={color}>
        <a href={`${projectUrl}`} target="_blank">
          <ImageWrapper
            whileHover={width > 700 ? {
              scale: 1.05,
              y: -100
            } : { } }
          >
            <Image 
              fluid={imageMobile1.asset.fluid} 
              objectFit="fill"
              objectPosition="center top"
            />
          </ImageWrapper>
        </a>

        <ProjectInfo>
          <H2>{name}</H2>
          <p>{summary}</p>

          <ToolGrid>
            {tools.map(item => (<ToolItem toolData={item}/>) )}
          </ToolGrid>

          <ButtonGroup>

            <a href={githubUrl} target="_blank">
              <ButtonSecondary 
                color={color}
                whileHover={{
                  scale: 1.05,
                }}>
                  Github <FaGithub size="20px" />
              </ButtonSecondary>
            </a>
            <Link to={`/projects/${slug.current}`}>
              <ButtonPrimary 
                color={color}
                whileHover={{
                  scale: 1.05,
                }}>
                  Details <IoMdArrowForward size="20px" />
              </ButtonPrimary>
            </Link>

          </ButtonGroup>

        </ProjectInfo>
      </Card>
    // </Link>
  )
}

export default ProjectCard