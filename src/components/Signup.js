import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

function Signup() {
    return (

        <div style={{ background: '#f0f2f5', minHeight: '100vh' }}>
            <Container className="d-flex align-items-center justify-content-center min-vh-100">
                <Row className="w-100">
                    <Col md={{ span: 6, offset: 3 }} lg={{ span: 4, offset: 4 }}>
                        <Card className="shadow-lg p-4 rounded-4">
                            <Card.Body>
                                <h2 className="text-center mb-4">Create Account</h2>
                                <Form >
                                    <Form.Group className="mb-3" controlId="name">
                                        <Form.Label>Full Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="name"
                                            placeholder="Enter your name"
                                            
                                            required
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="email">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control
                                            type="email"
                                            name="email"
                                            placeholder="Enter email"
                                            
                                            required
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="password">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control
                                            type="password"
                                            name="password"
                                            placeholder="Password"
                                            
                                            required
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-4" controlId="confirmPassword">
                                        <Form.Label>Confirm Password</Form.Label>
                                        <Form.Control
                                            type="password"
                                            name="confirmPassword"
                                            placeholder="Confirm Password"
                                            
                                            required
                                        />
                                    </Form.Group>

                                    <div className="d-grid">
                                        <Button variant="primary" type="submit">
                                            Sign Up
                                        </Button>
                                    </div>
                                </Form>

                                <div className="text-center mt-3">
                                    <small>
                                        Already have an account? <a href="/login">Login</a>
                                    </small>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Signup