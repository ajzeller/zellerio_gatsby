import React from 'react'
import { lightTheme, darkTheme } from '../styles/theme';
import { ThemeProvider } from 'styled-components'
import useDarkMode from 'use-dark-mode'

export default ({ children }) => {
  let darkMode = useDarkMode(true)
  const theme = darkMode.value ? darkTheme : lightTheme
  darkMode = {...darkMode, theme} 


  return(
    <ThemeProvider theme={darkMode} toggleTheme={darkMode.toggle}>
      {children}
    </ThemeProvider>
  )
}