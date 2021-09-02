import React from 'react'
import { Button, Col, Container, Form, FormControl, FormGroup, FormLabel, FormText, Row } from 'react-bootstrap';

const LogginPage  =()=>{

    return(
        //header ()=>{}
        <Container>
            <Row >
                <Form>
                    <FormGroup>
                       <Row>

                        <FormText>{"imput"}</FormText>
                        <FormControl placeholder={"email"}></FormControl>
                       </Row>
                       <Row>
                       <FormText>{"imput"}</FormText>
                        <FormControl placeholder={"email"}></FormControl>
                           
                       </Row>
                       <Row>
                           <Col><Button variant="primary">{"loggin"}</Button></Col>
                           <Col><Button variant="primary">{"sign"}</Button></Col>
                       </Row>
                    </FormGroup>
                </Form>

            </Row>
        </Container>
        //footer = ()=>{@}
    );
}

export default LogginPage 