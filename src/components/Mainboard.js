import React from 'react'
import { Row, Col, Card } from 'react-bootstrap';

function Mainboard() {
  return (
    <div className='container-fluid w-75' >
        <Row >
          <h4 className='text-center'><b>Dashboard</b></h4>
                        <Col className='d-flex justify-content-center' md={4} >
                            <Card className="text-center custom-card1 mb-4" style={{ width: '18rem', height: '150px' }}>
                                <Card.Body>
                                    <Card.Title>Total working time</Card.Title>
                                    <Card.Text>6000 seconds</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className='d-flex justify-content-center'  md={4} >
                            <Card className=" text-center custom-card2 mb-4" style={{ width: '18rem', height: '150px' }} >
                                <Card.Body>
                                    <Card.Title>Total  phone numbers assigned</Card.Title>
                                    <Card.Text>30</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className='d-flex justify-content-center' md={4} >
                            <Card className=" text-center custom-card3 mb-4" style={{ width: '18rem', height: '150px' }}>
                                <Card.Body>
                                    <Card.Title>Last Task Assigned Date</Card.Title>
                                    <Card.Text>12-june-2025</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
    </div>
  )
}

export default Mainboard