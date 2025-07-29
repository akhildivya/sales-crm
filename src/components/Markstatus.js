
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function Markstatus() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>

            <Button variant="primary" onClick={handleShow}>
                Mark status
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Mark </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    

                    <DropdownButton id="dropdown-item-button" title="Call Status">
                     
                        <Dropdown.Item as="button">Missed Call</Dropdown.Item>
                        <Dropdown.Item as="button">Rejected</Dropdown.Item>
                        
                    </DropdownButton>
                    <DropdownButton id="dropdown-item-button" title="Status">
                     
                        <Dropdown.Item as="button">Plan to join</Dropdown.Item>
                        <Dropdown.Item as="button">Not interested</Dropdown.Item>
                        
                    </DropdownButton>


                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Markstatus