import React, { useState, MouseEvent, ChangeEvent } from 'react'
import { Container, Col, Card, Form, Button, Row } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom';
import { loginUserAsync } from '../features/userSlice';
import { loginData } from '../api/AuthService';
import { useDispatch } from 'react-redux';


export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const history = useHistory();
    const submitLogin = (e : MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const data : loginData = {
            username: email,
            password: password
        };
        dispatch(loginUserAsync(data, history));
    }
    return (
        <div>
            <Container className="p-5">
                <Row className="justify-content-center">
                    <Col lg={6}>
                        <Card>
                            <Card.Body>
                                <Form>
                                    <Form.Group controlId="loginEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" value={email} onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}/>
                                    </Form.Group>
                                    <Form.Group controlId="loginPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" value={password} onChange={(e : ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}/>
                                    </Form.Group>
                                    <Button variant="primary" type="submit" onClick={submitLogin}>Login</Button>
                                </Form>
                            </Card.Body>
                            <Card.Footer>
                                Not a user ? <Link to="/register">Register here</Link>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
