import React, { ReactNode } from 'react'

import { ThemeProvider } from 'styled-components'
import { theme } from 'src/styles/theme'

import Header from 'src/components/Header'
import Footer from 'src/components/Footer'

import GlobalStyles from 'src/styles/globals'
import { Container } from './styles'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <Header />
        <main>{children}</main>
        <Footer />
      </Container>
    </ThemeProvider>
  )
}

export default Layout
