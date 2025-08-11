
import Table from 'react-bootstrap/Table';
import Markstatus from './Markstatus';
import { Button } from 'react-bootstrap';

function Salesboard() {
    return (
        <div className="wrapper container w-100">
            <h4 className='text-center '><b>Mark Status</b></h4>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Date</th>
                        <th>Customer Name</th>
                        <th>Phone number</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>12-june-2025</td>
                        <td>Mark</td>
                        <td>8589746320</td>
                        <td>
                            <Button >Call</Button>
                            <Markstatus ></Markstatus>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>12-june-2025</td>
                        <td>Jacob</td>
                        <td>9863524789</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>12-june-2025</td>
                        <td>Larry the Bird</td>
                        <td>7026894123</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default Salesboard