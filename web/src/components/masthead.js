import React from 'react'
import styled from 'styled-components'
import Img from "gatsby-image"
import { FaReact, FaDatabase } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from 'gatsby'
import { IoMdArrowForward } from "react-icons/io";

import { motion } from "framer-motion";
import { ContainerFullWidth, ContainerBodyWidth } from '../containers'
import { H1, H2, H3, H4, H5, Paragraph } from './'

const Intro = styled(H1)`
  /* font-size: 2rem; */
  margin: 0 0 12px 0;
`

const ToolsIntro = styled(H2)`
  font-size: 1.2rem;
  margin: 50px 0 12px 0;
`

const MastheadContainer = styled.div`
  /* background-color: ${props => props.theme.theme.bg.primary}; */
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 30px;
  max-width: 800px;
  margin: 0 auto;
  padding: 100px 16px 50px 16px;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    padding: 50px 16px 30px 16px;
  }
`

const MastheadText = styled(motion.div)`
  margin: 0px 0 0 0;
  font-size: 1rem;

  .bold {
    font-weight: 700;
  }

  p{
    margin: 10px 0;
  }
`

const Image = styled(Img)`
  width: 150px;
  height: 150px;
  border-radius: 200px;
  justify-self: center;
`

export const Label = styled(H4)`
  font-weight: 700;
  text-transform: uppercase;
  margin: 10px 0 12px 0;
`

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 12px;
  align-items: start;

  p {
    margin: 0;
  }

  a {
    display: flex;
    align-items: center;
    color: ${props => props.theme.theme.text.primary};

    &:hover {
      color: ${props => props.theme.theme.colors.blue};
    }

    svg {
      margin: 0 0 0 4px;
    }
  }
`

const LinkWrapper = styled(motion.div)`
`

const SvgWrapper = styled(motion.div)`
  display: flex;
`

const EmptyCell = styled.div``

const Masthead = ( {data} ) => {
  // console.log(data)

  return(
    <ContainerBodyWidth>
      <MastheadContainer>
        <Image fluid={data.myInfo.mainImage.asset.fluid} />
        <MastheadText
          initial={{y: 50}}
          animate={{y: 0 }}
        >
          <Intro>I'm Andrew Zeller 👋</Intro>

          <p>A self-taught <span className="bold">frontend engineer</span> living in Mountain View, California.</p>

          <p>I love designing and developing web apps that are fast, useful and elegant.</p>
          
          {/* <Label style={{marginTop: '50px'}}>My Toolbox</Label> */}
          <ToolsIntro>My Toolbox</ToolsIntro>
          <SkillsGrid>
            <FaReact size='24px' />
              <div>
                <p><span className="bold">Frontend</span></p>
                <p>React, Redux, Next.js, Gatsby.js, D3, SASS, Styled-Components</p>
              </div>
            <FaDatabase size='24px' />
              <div>
                <span className="bold">Backend</span>
                <p>Express, Node, Chai, MongoDB</p>
              </div>
              <EmptyCell />
              <LinkWrapper 
                whileHover={{
                  x: 5
                }}>
                <Link to='/about/'>
                  Learn more about my skills
                  <SvgWrapper>
                    <IoMdArrowForward size='20px' />
                  </SvgWrapper>
                </Link>
              </LinkWrapper>

          </SkillsGrid>
          
        </MastheadText>

      </MastheadContainer>
    </ContainerBodyWidth>
  )
}

export default Masthead