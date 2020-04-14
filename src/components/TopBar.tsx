import React, { MouseEvent } from 'react'
import book from '../book.svg';
import { Navbar, Nav, Form, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { logout } from '../features/userSlice';
import { useHistory, Link } from 'react-router-dom';

export default function TopBar() {
    const dispatch = useDispatch();
    const history = useHistory();
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand>
                <img src={book} alt="Openbook logo"
                    width="30"
                    height="30"
                />{' '}
                Openbook
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="topbar"/>
            <Navbar.Collapse id="topbar">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                    <Nav.Link as={Link} to="/read">Read</Nav.Link>
                    <Nav.Link as={Link} to="/toread">To Read</Nav.Link>
                    <Nav.Link as={Link} to="/current">Current</Nav.Link>
                </Nav>
                <Form inline>
                    <Form.Control type="search" placeholder="Search" className="mr-sm-2"/>
                </Form>
                <Button variant="danger" onClick={
                    (e : MouseEvent<HTMLButtonElement>) => {
                        e.preventDefault();
                        dispatch(logout());
                        history.push("/login");
                    }
                }>Logout</Button>
            </Navbar.Collapse>
        </Navbar>
    )
}
