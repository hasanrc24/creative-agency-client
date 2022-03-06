import React, { useState } from 'react';
import './Login.css';
import { Col, Container, FloatingLabel, Form, Image, Row } from 'react-bootstrap';
import brandLogo from '../../images/logos/logo.png';
import { useAuth } from '../../Contexts/AuthContext';
import { useHistory, useLocation } from 'react-router';
import CircularProgress from '@mui/material/CircularProgress';

const Login = () => {

    const history = useHistory();
    const location = useLocation();
    const {signUp, login} = useAuth();

    const [newUser, setNewUser] = useState(false);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState();
    const [error, setError] = useState("");

    const { from } = location.state || { from: { pathname: "/" } };

    async function handleSignUp(e){
        e.preventDefault();

        try {
            setLoading(true);
            setError("")
            await signUp(email, password, username);
            history.push(from);
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    }
    async function handleSignIn(e){
        e.preventDefault();

        try {
            setLoading(true);
            setError("")
            await login(email, password);
            history.push(from)
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    }
    return (
        <Container>
            <div className="login-logo">
                <Image className="brand-logo" src={brandLogo} />
            </div>
            <Row>
                <Col md={6} className="login-form">
                        <Form className="p-4" onSubmit={newUser ? handleSignUp : handleSignIn}>
                            <h3 className="pb-2">{newUser ? "Sign Up" : "Login"}</h3>
                            {newUser && <FloatingLabel className="mb-3" controlId="floatingName" label="Username">
                                <Form.Control onChange={(e)=>setUsername(e.target.value)} type="name" placeholder="Username" />
                            </FloatingLabel>}
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Email address"
                                className="mb-3"
                            >
                                <Form.Control onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="name@example.com" />
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingPassword" label="Password">
                                <Form.Control onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" />
                            </FloatingLabel>
                            <p className="acc mb-3">{newUser ? "Already have an account?" : "Don't have an account?"} 
                                <span onClick={() => setNewUser(!newUser)} className="account-words">{newUser ? "Login" : "Create an account"}</span>
                            </p>
                            {loading ? <CircularProgress /> : <input disabled={loading} className="brand-button" type="submit" />}
                            
                            {error && <p>{error}</p>}
                        </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;