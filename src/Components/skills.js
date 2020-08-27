import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';

export class skills extends Component {
    render() {
        return (
            <div>
            <center>
                <h3>SKILLS</h3>
                <hr/>

            <Container>
                <Row>
                   <Col sm={5}>
                    <Row>Language</Row>
                    <Row>Database</Row>
                    <Row>Web Technology</Row>
                    <Row>Tools</Row>
                   </Col>
                   <Col sm={7}>
                   <Row>C, C++, JavaScript</Row>
                   <Row>MongoDB, MySql</Row>
                   <Row>HTML5, CSS3, Bootstrap, React.js</Row>
                   <Row>VsCode, Postman</Row>
                   </Col>
               </Row>
             </Container>
             </center>
            </div>
        )
    }
}

export default skills
