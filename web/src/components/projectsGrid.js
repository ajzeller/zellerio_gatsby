import React, { useState } from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Container from './container'
import GraphQLErrorList from './graphql-error-list'
import ProjectPreviewGrid from './project-preview-grid'
import SEO from './seo'
import Layout from '../containers/layout'
import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from '../lib/helpers'
import { ContainerFullWidth, ContainerBodyWidth, ContainerMain } from '../containers'
import { H1, H2, H3, H4, H5, Paragraph } from '.'
import ProjectCard, { Button } from './projectCard'
import { FaEyeSlash, FaEye  } from "react-icons/fa";
import { MdRadioButtonChecked, MdRadioButtonUnchecked } from "react-icons/md";

import { responsiveTitle1 } from '../components/typography.module.css'

const ProjectGridContainer = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-gap: 48px;
  box-sizing: border-box;
`

const ToggleButton = styled(Button)`
  margin: 0 8px 8px 0;

  &.isVisible{
    color: ${props => props.theme.theme.bg.secondary};
    background-color: ${props => props.theme.theme.text.primary};
  }

  &.isNotVisible{
    color: ${props => props.theme.theme.text.primary};
    background-color: ${props => props.theme.theme.border.secondary};
  }
`

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 0 24px 0;
`

const CategoryButton = (props) => {
  return(
    <ToggleButton onClick={() => props.handleClick(props.name)} className={props.visibility ? 'isVisible' : 'isNotVisible'}>
      {props.name}
      {props.visibility ? <MdRadioButtonChecked size='16px' /> : <MdRadioButtonUnchecked size='16px' /> }
    </ToggleButton>
  )
}

const ProjectsGrid = ( {data} ) => {
  
  const [categories , setCategories ] = useState(
    data.categories.edges.map(elem => ({
      name: elem.node.title,
      visibility: true
    })
  ))

  console.log(categories)

  const handleCategoryClick = (categoryName) => {
    setCategories(prev => prev.map(category => {
      if(category.name == categoryName){
        return ({
          ...category,
          visibility: !category.visibility
        })
      } else {
        return category
      }
    }))
  }

  return (
    <div>
      <ButtonContainer>
        {categories.map(category => (
          <CategoryButton 
            key={`btn-${category.name}`} 
            name={category.name} 
            visibility={category.visibility} 
            handleClick={handleCategoryClick} />
          ))
        }
      </ButtonContainer>

      <ProjectGridContainer>
        {data.site.projects.filter(project => {
          let includeProject = false

          project.categories.forEach(elem => {
            categories.forEach(item => {
              if(elem.title == item.name && item.visibility){
                includeProject = true
              }
            })
          })
          return includeProject
        }).map(project => (<ProjectCard projectData={project} key={project.slug.current} />) )}
      </ProjectGridContainer>
    </div>
  )
}

export default ProjectsGrid