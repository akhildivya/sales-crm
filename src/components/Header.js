
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
        <div>
            <Navbar className='nav-custom' variant="dark" expand="lg">
                <Navbar.Brand href="#home" className='navbar-text ms-2'>
                    <img
                        alt=""
                        src="https://i.postimg.cc/SNnMZFzQ/output-onlinegiftools-5.gif"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}<b>JustDo</b></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="nav-link ms-auto">
                        <Nav.Link href="/uploadsheet"><b>Upload</b></Nav.Link>
                        <Nav.Link href="/dashboard"><b>Dashboard</b></Nav.Link>
                        <Nav.Link href="/assignleads"><b>Assign Leads</b></Nav.Link>
                        <Nav.Link href="/reports" ><b>Reports</b></Nav.Link>
                        <Nav.Link href="/charts"><b>Charts</b></Nav.Link>
                        <Nav.Link href="/sales"><b>Sales Dashview</b></Nav.Link>
                        <Nav.Link href="#login"><b>Logout</b></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        </div>
    )
}

export default Header