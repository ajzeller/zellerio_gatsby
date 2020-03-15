import React from 'react'
import styled from 'styled-components'
import Img from "gatsby-image"
import { FaReact, FaDatabase } from "react-icons/fa";
import { motion } from "framer-motion";
import { ContainerFullWidth, ContainerBodyWidth } from '../containers'

const MastheadContainer = styled.div`
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

const MastheadText = styled.div`
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

const Label = styled.h3`
  font-size: 0.7rem;
  text-transform: uppercase;
  font-weight: 700;
  margin: 10px 0 20px 0;
`

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 12px;
  align-items: start;

  p {
    margin: 0;
  }
`

const MotionContainer = styled.div`
  background-color: blue;
  padding: 20px;

`

const Masthead = ( {data} ) => {
  // console.log(data)

  return(
    <ContainerBodyWidth>
      <MastheadContainer>
        <Image fluid={data.myInfo.mainImage.asset.fluid} />
        <MastheadText>
          <p>Hey there, I'm Andrew.</p>

          <p>I am a <span className="bold">frontend developer</span> living in Mountain View, California.</p>

          <p>I love designing and building web apps that are fast, useful and elegant.</p>
          
          <Label style={{marginTop: '50px'}}>My Toolbox</Label>
          <SkillsGrid>
            <FaReact size='24px' />
              <div>
                <p><span className="bold">Frontend</span></p>
                <p>React, Redux, Next, Gatsby, D3, SASS, Styled-Components</p>
              </div>
            <FaDatabase size='24px' />
              <div>
                <span className="bold">Backend</span>
                <p>Express, Node, Chai, MongoDB</p>
              </div>

          </SkillsGrid>
          
        </MastheadText>

      </MastheadContainer>
    </ContainerBodyWidth>
  )
}

export default Masthead