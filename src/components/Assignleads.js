import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import Modall from './Modall';

function Assignleads() {

    return (
        <div>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Contact Name</th>
                        <th>Phone number</th>
                        <th>Assign Leads</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>1235</td>
                        <Button variant="primary" size="sm" >
                            <Modall></Modall>
                        </Button>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>45321</td>

                    </tr>
                    <tr>
                        <td>3</td>
                        <td >Larry the Bird</td>
                        <td>78965</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default Assignleads