import { format, distanceInWords, differenceInDays } from 'date-fns'
import React from 'react'
import styled from 'styled-components'
import Img from "gatsby-image"
import { motion } from "framer-motion";
import { Link } from 'gatsby'

import { ContainerFullWidth, ContainerBodyWidth } from '../containers'
import ToolItem from './toolItem'
import { Button, ButtonGroup } from './projectCard'
import { FaGithub, FaExternalLinkSquareAlt, FaLink } from "react-icons/fa";
import { IoMdArrowForward } from "react-icons/io";
import { Label } from './masthead'
import { H1, H2, H3, H4, H5, Paragraph } from './'

import { buildImageObj } from '../lib/helpers'
import { imageUrlFor } from '../lib/image-url'
import BlockContent from './block-content'
// import Container from './container'
import RoleList from './role-list'

import styles from './project.module.css'

const ProjectContainer = styled.article`
  display: grid;
  grid-gap: 0;
  max-width: ${props => props.theme.theme.contentWidths.body};
  margin: 0 auto;
  padding: 24px;
  box-sizing: border-box;
`

const Image = styled(Img)`

`

const ImageMobileWrapper = styled(motion.div)`
  /* width: 300px; */
  width: 100%;
  /* height: 450px; */
  max-width: 400px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);
  overflow: hidden;
  transform: scale(0.9, 0.9);
`

const ImageDesktopWrapper = styled.div`
  max-height: 500px;
  overflow: hidden;
`

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  grid-gap: 24px;
  margin: 0 0 12px 0;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`

const Title = styled(H1)`
  margin: 24px 0 12px 0;
`

const SummaryText = styled.p`
  margin: 0 0 12px 0;
`

const ToolGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const ProjectButtonGroup = styled(ButtonGroup)`
  margin: 12px 0 24px 0;
`

const ButtonPrimary = styled(Button)`
  color: white;
  background-color: ${props => props.color};
  margin: 0 12px 0 0;
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.1);
`

const ButtonSecondary = styled(Button)`
  color: ${props => props.color};
  /* background-color: ${props => props.theme.theme.bg.primary}; */
  background-color: white;
  /* border: 2px solid ${props => props.color}; */
  margin: 0 12px 0 0;
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.1);
`

const Project = (props) => {
  console.log(props)
  const { 
    name, 
    summary,
    color,
    projectUrl,
    githubUrl,
    year,
    tools,
    imageMobile1,
    imageMobile2,
    imageMobile3,
    imageDesktop,
    _rawBody
   } = props

  return(
    <ContainerFullWidth>
        <ProjectContainer>
          <Title>{name}</Title>
          <SummaryText>{summary}</SummaryText>

          <ProjectButtonGroup>
            <a href={githubUrl} target="_blank">
              <ButtonSecondary 
                color={color}                 
                whileHover={{
                  scale: 1.05,
                  }}>
                Github <FaGithub size="20px" />
              </ButtonSecondary>
            </a>

            <a href={`${projectUrl}`} target="_blank">
              <ButtonPrimary 
                color={color}
                whileHover={{
                  scale: 1.05,
                  }}>
                Live Project <IoMdArrowForward size="20px" />
              </ButtonPrimary>
            </a>
          </ProjectButtonGroup>

          <ImageGrid>
            <ImageMobileWrapper       
              animate={{scale: [0.9, 1]}}
              transition={{ duration: 0.5, ease: 'easeIn' }}
            >
              <Image fluid={imageMobile1.asset.fluid} />
            </ImageMobileWrapper>

            <ImageMobileWrapper
              animate={{scale: [0.9, 1]}}
              transition={{ duration: 0.5, ease: 'easeIn' }}
            >
              <Image fluid={imageMobile2.asset.fluid} />
            </ImageMobileWrapper>

            <ImageMobileWrapper
              animate={{scale: [0.9, 1]}}
              transition={{ duration: 0.5, ease: 'easeIn' }}
            >
              <Image fluid={imageMobile3.asset.fluid} />
            </ImageMobileWrapper>

          </ImageGrid>
          
          <div>
            <Label>Built with:</Label>
            <ToolGrid>
              {tools.map(item => (<ToolItem toolData={item} key={`tool-${name}-${item.name}`} />) )}
            </ToolGrid>
          </div>             
          
          {_rawBody && <BlockContent blocks={_rawBody || []} />}

        </ProjectContainer>
    
        <ImageDesktopWrapper>
          <Image fluid={imageDesktop.asset.fluid} />
        </ImageDesktopWrapper>
    </ContainerFullWidth>
  )
}

// function Project (props) {
//   const { _rawBody, title, categories, mainImage, members, publishedAt, relatedProjects } = props
//   return (
//     <article className={styles.root}>
//       {props.mainImage && mainImage.asset && (
//         <div className={styles.mainImage}>
//           <img
//             src={imageUrlFor(buildImageObj(mainImage))
//               .width(1200)
//               .height(Math.floor((9 / 16) * 1200))
//               .fit('crop')
//               .url()}
//             alt={mainImage.alt}
//           />
//         </div>
//       )}
//       <Container>
//         <div className={styles.grid}>
//           <div className={styles.mainContent}>
//             <h1 className={styles.title}>{title}</h1>
//             {_rawBody && <BlockContent blocks={_rawBody || []} />}
//           </div>
//           <aside className={styles.metaContent}>
//             {publishedAt && (
//               <div className={styles.publishedAt}>
//                 {differenceInDays(new Date(publishedAt), new Date()) > 3
//                   ? distanceInWords(new Date(publishedAt), new Date())
//                   : format(new Date(publishedAt), 'MMMM Do YYYY')}
//               </div>
//             )}
//             {members && <RoleList items={members} title='Authors' />}
//             {categories && (
//               <div className={styles.categories}>
//                 <h3 className={styles.categoriesHeadline}>Categories</h3>
//                 <ul>
//                   {categories.map(category => (
//                     <li key={category._id}>{category.title}</li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//             {relatedProjects && (
//               <div className={styles.relatedProjects}>
//                 <h3 className={styles.relatedProjectsHeadline}>Related projects</h3>
//                 <ul>
//                   {relatedProjects.map(project => (
//                     <li key={`related_${project._id}`}>
//                       <Link to={`/project/${project.slug.current}`}>{project.title}</Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//           </aside>
//         </div>
//       </Container>
//     </article>
//   )
// }

export default Project
