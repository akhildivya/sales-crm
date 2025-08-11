import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';

function Modall() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                Assign
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Choose Username</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ListGroup>
                        <ListGroup.Item>
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label ms-1" for="flexCheckDefault">
                                   Anu
                                </label>
                        </ListGroup.Item>
                        <ListGroup.Item>
                             <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label ms-1" for="flexCheckDefault">
                                   Manu
                                </label>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label ms-1" for="flexCheckDefault">
                                   Vijay
                                </label>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label ms-1" for="flexCheckDefault">
                                   Thanu
                                </label>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label ms-1" for="flexCheckDefault">
                                   Viju
                                </label>
                        </ListGroup.Item>
                    </ListGroup>
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

export default Modall