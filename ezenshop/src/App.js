import React from 'react'
import { Container } from '@mui/material';

import Top from './pages/Top'
import Navigation from './pages/Navigation'
import Carousel from './pages/Carousel'
import CustomContainer from './pages/Container'
import Service from './pages/Service'
import Footer from './pages/Footer'

const App = () => {
  return (
      <>
        <Top />
        <Navigation />
        <Carousel /> 
        <Container>
           <CustomContainer />
           <Service />
        </Container>
        <Footer />
      </>
  )
}

export default App