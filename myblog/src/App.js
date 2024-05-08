import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import Navigation from './pages/Navigation';
import About from './pages/About';
import Experience from './pages/Experience';
import History from './pages/History';
import Projects from './pages/Projects';


const App = () => {
  return (
    <Container>
       <Navigation />
       <Row>
           <Col md={{span:9, offset:3}}>
           <About />
           <Experience />
           <History />
           <Projects />
           </Col>
       </Row>
    </Container>  
  )
}
export default App