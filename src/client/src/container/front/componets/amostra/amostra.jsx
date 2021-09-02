import React from 'react'
import { Button, Col, Container, Row, Spinner } from 'react-bootstrap';
import { Link,Route,Switch,BrowserRouter as Router } from 'react-router-dom';
//import { Router, Switch, Route } from 'react-router';
const Amostra = () =>{
    return(
        <div>
        {/*containes */}
        
        <Container >container</Container>
        <Row> row</Row>
        <Col>col</Col>

        <Row ><Col xl="4">{"R -> C"}</Col><Col>{"R -> C"}</Col></Row>
        <Col><Row>{"C -> R"}</Row></Col>
        
        {/* btn */}
        <Button variant="primary">'primary'</Button>
        <Button variant="secondary">'secondary'</Button>
        <Button variant="success">'success'</Button>
        <Button variant="danger">'danger'</Button>
        <Button variant="warning">warning'</Button>
        <Button variant="info">'info'</Button>
        <Button variant="dark">'dark'</Button>
        <Button variant="light">light'</Button>

        {/* headers */}
        <h1>1</h1>
        <h2>2</h2>
        <h3>3</h3>
        <h4>4</h4>
        <h5>5</h5>
        <h6>6</h6>

        {/* paragraph */}

        <p></p>
        <strong></strong>
        
        {/* link */}
        <Link to="a" >a</Link>
        
        {/* spinners */}
        <Spinner animation="grow">grow</Spinner>
        <Spinner animation="border">border</Spinner>

        {/* input */}
       

                    <Link to="/1">1</Link>
        
        <Router>
            <Switch>
                <Route path="/1">
                </Route>
            </Switch>
        </Router>
        </div>
    );
}

export default Amostra