import React, {useState} from 'react'
import styled from 'styled-components'
import { IoMdArrowForward } from "react-icons/io";
import { motion } from "framer-motion";

const StyledLi = styled.li`
  display: flex;
  align-items: center;
  margin: 0 0 4px 0;
  
  .a_reset {
    border-bottom: 0;

    &:hover {
      border-bottom: 0;
    }
  }
`

const Detail = styled.span`
  margin: 0 0 0 4px;
  color: ${props => props.theme.theme.text.tertiary};
`

const StyledLink = styled.a`
  display: flex;
  align-items: center;
  border-bottom: 0;

  .isHovered{
    color: ${props => props.theme.theme.colors.blue};
  }

  span {
    border-bottom: 2px solid ${props => props.theme.theme.border.secondary};
      
    &:hover {
      border-bottom: 2px solid ${props => props.theme.theme.colors.blue};
    }
  }
`

const IconWrapper = styled(motion.div)`
  display: flex;
  margin: 0 4px 0 0;
`

const ListItem = ({icon = <IoMdArrowForward size='20px' />, name, detail, link }) => {
  const [isHovered, setIsHovered] = useState(false)
  
  console.log(isHovered)

  return(
    <StyledLi>
      <StyledLink 
        href={link} 
        target="_blank"
        className='a_reset' 
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)}
      >
        <IconWrapper
          animate={ isHovered ? {
            x: [0, -5, 0]
          } : 
          {
            x: 0
          }} 
          transition={{ duration: 0.2 }}
          className={isHovered && `isHovered` } 
        >
          {icon}
        </IconWrapper>
        <span>{name}</span>
      </StyledLink>
        <Detail>
          { detail && `- ${detail}`}
        </Detail>
    </StyledLi>
  )
}

export default ListItem