import { Button } from '@mui/material';
import React, { useState } from 'react';
import { Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import './Footer.css';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { animateScroll } from 'react-scroll';
import Alert from '@mui/material/Alert';

const Footer = () => {

    const [success, setSuccess] = useState();
    const handleFormSubmit = (e) =>{
        e.preventDefault();

        setSuccess(true);
        setTimeout(()=> setSuccess(false), 3000)

        e.target.reset();
    }
    return (
        <div id="footer" className="footer-section">
            <Container>
                <Row>
                    <Col md={5} className="">
                        <h1 className="mt-5 mb-5">Let us handle your project, professionally.</h1>
                        <p>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                    </Col>
                    <Col md={7}>
                        <Form onSubmit={handleFormSubmit} className="mt-5">
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Email address"
                                className="mb-3"
                            >
                                <Form.Control type="email" placeholder="name@example.com" required />
                            </FloatingLabel >
                            <FloatingLabel className="mb-3" controlId="floatingText" label="Your name / company's name">
                                <Form.Control type="text" placeholder="Your name / company's name" required />
                            </FloatingLabel>
                            <FloatingLabel  className="mb-3" controlId="exampleForm.ControlTextarea1" label="Your message">
                                <Form.Control as="textarea" style={{ height: '250px' }} placeholder="Your message" required />
                            </FloatingLabel>
                            <Button type='submit' class="brand-button">Send</Button>
                        </Form>
                        {
                            success && 
                            <Col md={4}>
                                <Alert className="mt-3" severity="success" color="info">
                                Email sent
                                </Alert>
                            </Col>
                        }
                    </Col>
                </Row>
                <div className="copyright-txt">  
                    <span></span>
                    <span>copyright Orange labs {new Date().getFullYear()} </span>
                    <span onClick={()=>{animateScroll.scrollToTop()}} className="arrow"><ArrowUpwardIcon /></span>
                </div>
            </Container>
        </div>
    );
};

export default Footer;