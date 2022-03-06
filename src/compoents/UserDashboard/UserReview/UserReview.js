import React, { useEffect, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { Button } from '@mui/material';
import './UserReview.css';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

const UserReview = () => {
    useEffect(() => {
        document.title = "Review"
    }, [])

    const [reviewName, setReviewName] = useState("");
    const [reviewCompany, setReviewCompany] = useState("");
    const [reviewDesc, setReviewDesc] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleReviewSubmit = (e) =>{
        e.preventDefault();
        const data = {
            reviewName,
            reviewCompany,
            reviewDesc
        }
        setLoading(true);
        fetch('https://safe-inlet-61017.herokuapp.com/addReview', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(success=>{
            setLoading(false);
            setSuccess(true);
            setInterval(() =>{ setSuccess(false); }, 3000);
        })
        .catch(err=>{
            setLoading(false)
            setSuccess(false);
            console.log(err)
        })
        e.target.reset();
    }

    return (
        <div>
            <div className="mt-4 mb-4 px-5">
                <h4>Review</h4>
            </div>
            <div>
                <Row className="user-review">
                    <Col md={6}>
                        <Form onSubmit={handleReviewSubmit}>
                            <Form.Control onChange={(e)=>setReviewName(e.target.value)} className="mb-3" type="text" placeholder="Your name" required />
                            <Form.Control onChange={(e)=>setReviewCompany(e.target.value)} className="mb-3" type="text" placeholder="Company's name, Designation" required />
                            <Form.Control onChange={(e)=>setReviewDesc(e.target.value)} className="mb-3" as="textarea" rows={3} placeholder="Description" required />
                            {loading ? <CircularProgress /> : <Button type="submit" class="brand-button">Send</Button>}
                        </Form>
                        {success && <Stack sx={{ width: '100%' }} spacing={2}>
                            <Alert severity="success">
                                <AlertTitle>Success</AlertTitle>
                                <strong>Review added successfully</strong>
                            </Alert>
                        </Stack>}
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default UserReview;