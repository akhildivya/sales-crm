import Table from 'react-bootstrap/Table';
import { jsPDF } from 'jspdf'
import { applyPlugin } from 'jspdf-autotable'
import { Button } from 'react-bootstrap';

applyPlugin(jsPDF)
function Reports() {
  const handelGenerate = () => {
    const doc = new jsPDF()
    doc.autoTable({ html: '#my-table' })
    doc.save('table.pdf')
  }
  return (

    <div className='container w-100'>
      <h4 className='text-center'>Work Report</h4>
      <input type="text" placeholder='serach by date' style={{width:'220px', height:'36px'}} /> <Button>Search</Button>
      <Table id="my-table" striped bordered hover style={{marginTop:'20px'}} >
        <thead>
          <tr>
            <th>#</th>
            <th>Sales Agent</th>
            <th>Date</th>
            <th>Total Working time</th>
            <th>Contacted Numbers</th>

          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>12-June-2025</td>
            <td>120s</td>
            <td>80256566 (M),986222200 (A),</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>12-June-2025</td>
            <td>150s</td>
            <td>80256566,986222200,</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Larry the Bird</td>
            <td>12-June-2025</td>
            <td>160s</td>
            <td>80256566,986222200,</td>
          </tr>
        </tbody>
      </Table>
      <Button onClick={handelGenerate}>Generate pdf</Button>
    </div>

  )
}

export default Reports