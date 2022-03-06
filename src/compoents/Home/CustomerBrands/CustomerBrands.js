import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import SlackIcon from '../../../images/logos/slack.png';
import GoogleIcon from '../../../images/logos/google.png';
import UberIcon from '../../../images/logos/uber.png';
import NetflixIcon from '../../../images/logos/netflix.png';
import AirbnbIcon from '../../../images/logos/airbnb.png';

const CustomerBrands = () => {
    return (
        <Container style={{marginTop:"180px"}} className="d-flex justify-content-around">
            <Row  className="d-flex align-items-center">
                <Col><Image style={{maxHeight:"40px"}} fluid src={SlackIcon}/> </Col>
                <Col><Image style={{maxHeight:"40px"}} fluid src={GoogleIcon}/> </Col>
                <Col><Image style={{maxHeight:"40px"}} fluid src={UberIcon}/> </Col>
                <Col><Image style={{maxHeight:"40px"}} fluid src={NetflixIcon}/> </Col>
                <Col><Image style={{maxHeight:"40px"}} fluid src={AirbnbIcon}/> </Col>
            </Row>
        </Container>
    );
};

export default CustomerBrands;