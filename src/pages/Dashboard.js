import { Container, Row, Col, Navbar, Nav, Card } from 'react-bootstrap';

function Dashboard() {
    return (
        <Container fluid id='font1'>

            <Navbar  bg="danger" variant="dark" expand="lg">
                <Navbar.Brand href="#home">Salemates CRM</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/signup">Signup</Nav.Link>
                        <Nav.Link href="/login">Login</Nav.Link>
                        <Nav.Link href="/login">Logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <Row>
                {/* Sidebar / Aside */}
                <Col md={2} className="bg-light vh-100 p-3">
                    <h5 className="mb-4">Menu</h5>
                    <Nav defaultActiveKey="#dashboard" className="flex-column">
                        <Nav.Link href="#dashboard">🏠 Dashboard</Nav.Link>
                        <Nav.Link href="#users">👥 Add Users</Nav.Link>
                        <Nav.Link href="#settings">⚙️ Settings</Nav.Link>
                        <Nav.Link href="#reports">📊 Reports</Nav.Link>
                    </Nav>
                </Col>

                {/* Main Content */}
                <Col md={10} className="p-4">
                    <h3>Welcome to Dashboard</h3>
                    <Row>
                        <Col md={4}>
                            <Card className="mb-4">
                                <Card.Body>
                                    <Card.Title>Stat 1</Card.Title>
                                    <Card.Text>Details about stat 1...</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className="mb-4">
                                <Card.Body>
                                    <Card.Title>Stat 2</Card.Title>
                                    <Card.Text>Details about stat 2...</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className="mb-4">
                                <Card.Body>
                                    <Card.Title>Stat 3</Card.Title>
                                    <Card.Text>Details about stat 3...</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>

            {/* Footer */}
            <footer className="bg-danger text-light text-center py-3">
                &copy; {new Date().getFullYear()} CRM Dashboard. All rights reserved.
            </footer>
        </Container>
    );
}

export default Dashboard;