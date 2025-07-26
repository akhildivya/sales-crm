import React from 'react'
import { Row, Col, Nav, Card } from 'react-bootstrap';

function Dash() {
  return (
    <div>
      
      <Row>
                {/* Sidebar / Aside */}
                <Col md={2} className="aside-custom vh-100 p-3">

                    <h6 className="text-center mb-4">
                        Admin</h6>

                    <Nav defaultActiveKey="#dashboard" className="flex-column">
                        <Nav.Link href="/dashboard">🏠 Dashboard</Nav.Link>
                        <Nav.Link href="/uploadsheet">👥 Upload Sheet</Nav.Link>
                        <Nav.Link href="/assignleads">📊 Assign Leads</Nav.Link>
                        <Nav.Link href="/reports" >📊 Reports</Nav.Link>
                        <Nav.Link href="/charts">📊 Charts</Nav.Link>
                        <Nav.Link href="/sales">📊 Sales Dashview</Nav.Link>

                    </Nav>
                </Col>
                {/* Main Content */}
               

            </Row>
    </div>
  )
}

export default Dash