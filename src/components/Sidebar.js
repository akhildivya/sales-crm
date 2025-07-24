

import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

import Header from './Header'
import Footer from './Footer'




function Sidebar() {

    return (

        <div>
            <Header></Header>

            <div className="bg-light border-end" style={{ width: '220px', height: '100vh', padding: '20px' }}>
                <h4>My App</h4>
                <Nav defaultActiveKey="/dashboard" className="flex-column">
                    <Nav.Link as={NavLink} to="/dashboard">Dashboard</Nav.Link>
                    <Nav.Link as={NavLink} to="/charts">Profile</Nav.Link>
                    <Nav.Link as={NavLink} to="/settings">Settings</Nav.Link>
                </Nav>
            </div>

            <Footer></Footer>
        </div>
    )
}

export default Sidebar