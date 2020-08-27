import React, { Component } from 'react'
import { Container, Row, Col } from 'react-grid-system';

export class education extends Component {
    render() {
        return (
            <div>
            <center>
                <h3>EDUCATION QUALIFICATION</h3>
                <hr/>

            <Container>
                <Row>
                   <Col sm={5}>
                    <Row>2015</Row>
                    <Row>2017</Row>
                    <Row>2017-2021 (PURSUING)</Row>
                   </Col>
                   <Col sm={7}>
                   <Row>SECONDARY</Row>
                   <Row>SENIOR SECONDARY</Row>
                   <Row>BTECH (COMPUTER SCIENCE)</Row>
                   </Col>
               </Row>
             </Container>
        </center>
            </div>
        )
    }
}

export default education
