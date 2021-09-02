
import React from 'react'
import { Col ,Container, Row } from "react-bootstrap";
import '../scss/components.scss'
const Containers = () =>{
    return(
        <Container >
            <Row>
                <Col xs="9" >1<Col>2</Col></Col>
                <Col xs="9" >1 <Col>2</Col></Col>
                <Col xs="9">1<Row>2</Row></Col>
                

            </Row>
            
        </Container>
    )
}

export default Containers;