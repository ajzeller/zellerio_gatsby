import React from 'react'
import styled from 'styled-components'
import useDarkMode from 'use-dark-mode'
import Toggle from 'react-toggle'
import '../styles/ToggleStyle.scss'
import { FiMoon, FiSun } from "react-icons/fi"

const Toggler = () => {
  const darkMode = useDarkMode()
  console.log(darkMode.value)
  // console.log(theme)

  return(
    <Toggle
          checked={darkMode.value}
          onChange={darkMode.toggle} 
          icons={{
            checked: <FiSun />,
            unchecked: <FiMoon />
          }}
          />
  )
  
}

export default Toggler