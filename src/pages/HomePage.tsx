import React from 'react'
import { Container, Col, Row, Card } from 'react-bootstrap'
import TopBar from '../components/TopBar'

export default function HomePage() {
    return ( 
        <Container fluid className="px-0">
            <TopBar/>
            <Card className="p-5 m-5">
                <Card.Body>
                    
                </Card.Body>
            </Card>
        </Container>
    )
}
