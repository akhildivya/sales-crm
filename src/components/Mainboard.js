import React from 'react'
import { Row, Col, Card } from 'react-bootstrap';

function Mainboard() {
  return (
    <div className='container-fluid w-75' style={{backgroundColor:'green'}}>
        <Row>
          <h4><b>Dashboard</b></h4>
                        <Col md={4}>
                            <Card className="text-center custom-card1 mb-4">
                                <Card.Body>
                                    <Card.Title>Weekly Sales</Card.Title>
                                    <Card.Text>$15,0000</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className="custom-card2 mb-4" >
                                <Card.Body>
                                    <Card.Title>Weekly Orders</Card.Title>
                                    <Card.Text>1400</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className="custom-card3 mb-4">
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