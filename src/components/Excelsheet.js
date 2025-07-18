import React, { useState } from 'react';
import * as XLSX from 'xlsx';

export default function Excelsheet() {
  const [rows, setRows] = useState([]);
  const [cols, setCols] = useState([]);

  const handleFile = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (evt) => {
      const data = evt.target.result;
      const wb = XLSX.read(data, { type: 'binary' });
      const ws = wb.Sheets[wb.SheetNames[0]];
      const json = XLSX.utils.sheet_to_json(ws, { header: 1 });
      setCols(json[0] || []);
      setRows(json.slice(1));
    };

    reader.readAsBinaryString(file);
  };

  return (
    <div>
      <input type="file" accept=".xlsx,.xls" onChange={handleFile} />
      {rows.length > 0 && (
        <table border="1" cellPadding="5">
          <thead>
            <tr>
              {cols.map((c, i) => <th key={i}>{c}</th>)}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i}>
                {r.map((cell, j) => <td key={j}>{cell}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}