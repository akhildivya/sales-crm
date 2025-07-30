import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import Modall from './Modall';

function Assignleads() {

    return (
        <div className="wrapper container w-50 " >
            <h4 className='text-center '><b>Assign Tasks</b></h4>
            <Table striped bordered hover size="sm"  >
                
                <thead>
                    <tr>
                        <th>#</th>
                        <th> Name</th>
                        <th>Phone number</th>
                        <th>Assign Leads</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>8020256330</td>
                        <Button variant="primary" size="sm" >
                            <Modall></Modall>
                        </Button>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>9020256330</td>

                    </tr>
                    <tr>
                        <td>3</td>
                        <td >Larry the Bird</td>
                        <td>9420256330</td>
                    </tr>
                </tbody>
            </Table>

        </div>
    )
}

export default Assignleads