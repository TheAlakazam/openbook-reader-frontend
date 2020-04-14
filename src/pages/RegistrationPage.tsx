import React, { useState, ChangeEvent, MouseEvent } from 'react'
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap'
import { registerUser, registerData } from '../api/AuthService';
import { useHistory } from 'react-router-dom';

export default function RegistrationPage() {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false);
    const history = useHistory();
    const submitRegister = (e : MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const data : registerData = {
            username,
            password,
            name
        };
        registerUser(data)
            .then(res => {
                if(res.status === 200) {
                    setShow(true);
                    history.push("/login");
                }
            })
    }
    return (
        <Container className="p-5">
            <Row className="justify-content-center">
                <Col lg={6}>
                    <Alert show={show} onClose={() => setShow(false)} variant="success" dismissible>
                        New User was registered successfully!!
                    </Alert>
                    <Card>
                        <Card.Body>
                            <Form>
                                <Form.Group controlId="nameRegister">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" value={name} onChange={(e:ChangeEvent<HTMLInputElement>) => setName(e.target.value)}/>
                                </Form.Group>
                                <Form.Group controlId="emailRegister">
                                    <Form.Label>Email ID</Form.Label>
                                    <Form.Control type="email" value={username} onChange={(e : ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}/>
                                </Form.Group>
                                <Form.Group controlId="passwordRegister">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" value={password} onChange={(e : ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}/>
                                </Form.Group>
                                <Button variant="primary" type="submit" onClick={submitRegister}>Register</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
