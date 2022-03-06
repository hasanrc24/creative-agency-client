import React, { useEffect, useState } from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';
import './MakeAdmin.css';
import CircularProgress from '@mui/material/CircularProgress';

const MakeAdmin = () => {
    useEffect(() => {
        document.title = "Make Admin"
    }, [])

    const [admin, setAdmin] = useState("");
    const [loading, setLoading] = useState(false)

    const handleAdminSubmit = (e) =>{
        e.preventDefault();
        setLoading(true);

        fetch('https://safe-inlet-61017.herokuapp.com/addAdmin', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({admin})
        })
        .then(res=>res.json())
        .then(data=>{
            setAdmin("");
            setLoading(false)
        })
        e.target.reset();
    }
    return (
        <div>
            <div className="mt-4 mb-4 px-5">
                <h4>Make Admin</h4>
            </div>
            <div className="make-admin">
                <Form onSubmit={handleAdminSubmit}>
                    <div className="make-admin-bg">
                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control onBlur={e=>setAdmin(e.target.value)} type="email" placeholder="jon@gmail.com" required />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                {
                                    loading ? <CircularProgress /> : <Button type="submit" className="make-admin-btn">Submit</Button>
                                }
                            </Col>
                        </Row>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default MakeAdmin;