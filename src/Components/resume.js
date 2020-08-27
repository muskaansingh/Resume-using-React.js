import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import Header from './header';
import Skills from './skills';
import Education from './education';
import Objective from './objective';
import Projects from './projects';
import Certificates from './certificates';
import Image from './image';
import Footer from './footer';
 
export default function resume() {
    return (
       
        <Container>
         <Row>
            <Col sm={9}>
                <Header/>
                <hr/>
                <Objective/>
                <hr/>
                <Skills/>
                <hr/>
                <Education/>
                <hr/>
                <Projects/>
                <hr/>
                <Certificates/>
                <hr/>
                <Footer/>
                <hr/>
            </Col>
            <Col sm={3}>
                <fieldset>
                <center>
                    <Image/>
                    <fieldset>
                    <h3>MUSKAAN SINGH</h3>
                    <p>Student Cum Web Developer</p>
                    </fieldset>
                </center>
                </fieldset>
                
            </Col>
        </Row>
      </Container>
       
    )
}
