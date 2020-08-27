import React from 'react';
import { Container, Row, Col } from 'react-grid-system';

export default function footer() {
    return (
        <div>
            <center>
                <h3>CONTACT ME!</h3>
                <hr/>
        <Container>
                <Row>
                   <Col sm={5}>
                    <Row>Mobile</Row>
                    <Row>Email</Row>
                   </Col>
                   <Col sm={7}>
                   <Row>8239388910</Row>
                   <Row>muskaansingh235@gmail.com</Row>
                   </Col>
               </Row>
             </Container>
            </center>
        </div>
    )
}
