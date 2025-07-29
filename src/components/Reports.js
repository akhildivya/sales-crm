import Table from 'react-bootstrap/Table';
import { jsPDF } from 'jspdf'
import { applyPlugin } from 'jspdf-autotable'
applyPlugin(jsPDF)
function Reports() {
  const handelGenerate = () => {
    const doc = new jsPDF()
    doc.autoTable({ html: '#my-table' })
    doc.save('table.pdf')
  }
  return (

    <div>
      <Table id="my-table" striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Sales Agent</th>
            <th>Date</th>
            <th>No of times logged in</th>
            <th>Contacted Numbers</th>

          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Larry the Bird</td>
            <td>@twitter</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
      <button onClick={handelGenerate}>Generate pdf</button>
    </div>

  )
}

export default Reports