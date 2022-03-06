import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import './ServiceCard.css';


const ServiceCard = ({serviceData}) => {

    return (
        <>
            <Col className="box-shadow m-4">
                <Card className="p-4 service-card-design">
                    <Image style={{height:"70px", width:"70px", margin:"auto"}} variant="top" src={`data:image/png;base64,${serviceData.icon}`} />
                    <Card.Body>
                    <Card.Title>{serviceData.service.serviceTitle}</Card.Title>
                    <Card.Text className="text-secondary">
                        {serviceData.service.serviceDesc}
                    </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
};

export default ServiceCard;