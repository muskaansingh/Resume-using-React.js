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
                            <Row>Drum-Kit</Row>
                            <Row>Calculator</Row>
                            <Row>Lightbox Gallery</Row>
                            <Row>Login Page</Row>
                            <Row>Quiz App</Row>
                            <Row>TodoList App</Row>
                        </Col>
                        <Col sm={7}>
                            <Row>HTML, CSS, JAVASCRIPT</Row>
                            <Row>HTML, CSS, JAVASCRIPT</Row>
                            <Row>HTML, CSS, JAVASCRIPT</Row>
                            <Row>ReactJs</Row>
                            <Row>ReactJs, HTML, CSS, Bootstrap</Row>
                            <Row>ReactJs, Bootstrap</Row>
                        </Col>
                    </Row>
                </Container>
                </center>
            </div>
        )
    }
}

export default projects
