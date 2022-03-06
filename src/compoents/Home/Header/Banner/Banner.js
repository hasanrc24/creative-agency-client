import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import './Banner.css';
import bannerImg from '../../../../images/logos/Frame.png';
import Button from '@mui/material/Button';
import { Link as ReactLink} from 'react-router-dom';

const Banner = () => {
    return (
        <Container className="banner-section d-flex align-items-center">
            <Row>
                <Col md='5' style={{paddingTop:"10%"}}>
                    <h1 className="banner-h1">Let’s Grow Your Brand To The Next Level</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                    <ReactLink to="/user/order"> <Button class="brand-button">Hire Us</Button></ReactLink>
                </Col>
                <Col md='7'>
                    <Image fluid src={bannerImg}/>
                </Col>
            </Row>
        </Container>
    );
};

export default Banner;