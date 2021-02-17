import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './nav.css'

const Footer = () => {
    return (
        <footer className='nav-footer nav-tekst mt-5'>
            <Container>
                <Row > 
                    <Col className="text-center py-3" style={{color: 'green'}}>
                        Breaking Bad App &copy;
                    </Col>
                </Row>
            </Container>
        </footer>
    )
} 

export default Footer
