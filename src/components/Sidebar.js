
import { Col, Row, Nav } from 'react-bootstrap'

import { Route, Routes } from 'react-router-dom'
import Charts from './Charts'
import Reports from './Reports'
import Excelsheet from './Excelsheet'
import Mainboard from './Mainboard'

import Login from '../pages/Login'
import Signup from '../pages/Signup'
import ProtectedRoute from '../context/ProtectedRoute'
import Assignleads from './Assignleads'
import Salesboard from './Salesboard'



function Sidebar() {
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
                <Col md={10} className="main-content p-4">

                    <Row>
                        <Routes>

                            <Route path='/dashboard' element={<Mainboard></Mainboard>}></Route>
                            <Route path="/reports" element={<Reports></Reports>}></Route>
                            <Route path='/login' element={<Login></Login>}></Route>
                            <Route path='/signup' element={<Signup></Signup>}></Route>
                            <Route path='/charts' element={<Charts></Charts>}></Route>
                            <Route path='/uploadsheet' element={<Excelsheet></Excelsheet>}></Route>
                            <Route path='/assignleads' element={<Assignleads></Assignleads>}></Route>
                            <Route path='/sales' element={<Salesboard></Salesboard>}></Route>
                            
                        </Routes>
                    </Row>
                </Col>

            </Row>

        </div>
    )
}

export default Sidebar