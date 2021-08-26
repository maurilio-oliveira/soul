import React ,{Component} from 'react';
import { Col, Container,Row } from 'react-bootstrap'
import '../header-portal/a.css'


class HeaderPortal extends Component{
constructor(props){
    super(props)
}

 style ={
"display":"inline-flex"
 }
    
render(style){
    return (
        <Container fluid="lg" >
            <Row>
                <Col lg="2" >
                1
                </Col>
                <Col lg="2">
                2
                </Col>
            </Row>
        </Container>
    );
}
}

export default HeaderPortal;