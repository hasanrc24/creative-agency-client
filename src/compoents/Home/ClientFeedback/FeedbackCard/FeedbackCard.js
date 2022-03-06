import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import './FeedbackCard.css';
import client2 from '../../../../images/customer-2.png';

const FeedbackCard = ({feedbackData}) => {
    return (
        <Col>
            <Card className="feed-card mx-3">
                <Card.Body>
                    <Card.Title className="d-flex card-img"><Image className="img-fluid" src={client2}/>
                        <div className="client-card-title">{feedbackData.reviewName}<br />
                        <small className="client-position">{feedbackData.reviewCompany}</small></div>
                    </Card.Title>
                    <Card.Text className="pt-3 text-secondary">
                        {feedbackData.reviewDesc}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default FeedbackCard;