import React from 'react'
import { Row, Col, Card } from 'react-bootstrap';

function Mainboard() {
  return (
    <div className='container-fluid w-75' style={{backgroundColor:'green'}}>
        <Row >
          <h4 className='text-center'><b>Dashboard</b></h4>
                        <Col className='d-flex justify-content-center' md={4} style={{backgroundColor:'red'}}>
                            <Card className="text-center custom-card1 mb-4" style={{ width: '18rem', height: '150px' }}>
                                <Card.Body>
                                    <Card.Title>Total working time</Card.Title>
                                    <Card.Text>6000 seconds</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className='d-flex justify-content-center'  md={4} style={{backgroundColor:'red'}}>
                            <Card className="custom-card2 mb-4" style={{ width: '18rem', height: '150px' }} >
                                <Card.Body>
                                    <Card.Title>Weekly Orders</Card.Title>
                                    <Card.Text>1400</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className='d-flex justify-content-center' md={4} style={{backgroundColor:'red'}}>
                            <Card className="custom-card3 mb-4" style={{ width: '18rem', height: '150px' }}>
                                <Card.Body>
                                    <Card.Title>Visitors Online</Card.Title>
                                    <Card.Text>10</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
    </div>
  )
}

export default Mainboard