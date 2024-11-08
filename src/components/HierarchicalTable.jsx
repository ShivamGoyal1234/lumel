import React, { useState } from 'react';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import GrandTotal from './GrandTotal';
import { updateDataHierarchy } from '../utils/calculations';
import { initialData } from '../data/initialData';
import '../styles/Table.css';

const HierarchicalTable = () => {
  const [data, setData] = useState(initialData);
  
  const handleValueChange = (id, newValue, updateChildren = false) => {
    setData(prevData => updateDataHierarchy(prevData, id, newValue, updateChildren));
  };

  const calculateGrandTotal = () => {
    return data.rows.reduce((sum, row) => sum + row.value, 0);
  };

  return (
    <div className="table-container">
      <div className="table-wrapper">
        <table className="data-table">
          <TableHeader />
          <tbody>
            {data.rows.map(row => (
              <TableRow
                key={row.id}
                row={row}
                onValueChange={handleValueChange}
                originalValue={row.value}
              />
            ))}
            <GrandTotal total={calculateGrandTotal()} />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HierarchicalTable;