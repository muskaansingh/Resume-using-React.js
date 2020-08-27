import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';

export class projects extends Component {
    render() {
        return (
            <div>
                <center>
                    <h3>PROJECTS</h3>
                    <hr/>
                <Container>
                    <Row>
                        <Col sm={5}>
                            <Row>Cetpa Infotech Pvt Ltd, Noida</Row>
                            <Row>Udemy</Row> 
                        </Col>
                        <Col sm={7}>
                            <Row>MEAN stack training</Row>
                            <Row>web Designing, python, react.js, node.js</Row>
                        </Col>
                    </Row>
                </Container>
                </center>
            </div>
        )
    }
}

export default projects
