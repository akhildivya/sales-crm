import React from 'react'
import { Col, Container, Row,Nav,Card } from 'react-bootstrap'
import Reports from './Reports'
import { Route, Routes } from 'react-router-dom'
import Signup from './Signup'
import Login from './Login'
import Charts from './Charts'
import Excelsheet from './Excelsheet'
function Sidebar() {
    return (
        <div>

            <Row>
                {/* Sidebar / Aside */}
                <Col md={2}  className="bg-light vh-100 p-3">
                    <h5 className="mb-4">Menu</h5>
                    <Nav defaultActiveKey="#dashboard" className="flex-column">
                        <Nav.Link href="/login">🏠 Dashboard</Nav.Link>
                        <Nav.Link href="/leads">👥 Assign Leads</Nav.Link>
                        <Nav.Link href="#settings">⚙️ Settings</Nav.Link>
                        
                        <Nav.Link href="/reports">📊 Reports</Nav.Link>
                        <Nav.Link href="/charts">📊 Charts</Nav.Link>
                       
                    </Nav>
                </Col>
                {/* Main Content */}
                <Col md={10}  className="p-4">
                    <h3>Welcome to Dashboard</h3>
                    <Row>
                        <Routes>
                            <Route path="/reports" element={<Reports></Reports>}></Route>
                            <Route path='/Signup'element={<Signup></Signup>}></Route>
                            <Route path='/login' element={<Login></Login>}></Route>
                            <Route path='/charts' element={<Charts></Charts>}></Route>
                            <Route path='/leads' element={<Excelsheet></Excelsheet>}></Route>
                        </Routes>
                    </Row>
                </Col>
           
            </Row>

        </div>
    )
}

export default Sidebar