import React from 'react';
import ValueInput from './ValueInput';
import { calculateVariance } from '../utils/calculations';

const TableRow = ({ row, level = 0, onValueChange, originalValue }) => {
  const handlePercentageChange = (percentage) => {
    const increment = row.value * (percentage / 100);
    onValueChange(row.id, row.value + increment);
  };

  const handleValueChange = (value) => {
    onValueChange(row.id, value, true);
  };

  const variance = calculateVariance(row.value, originalValue);
  const varianceClass = parseFloat(variance) >= 0 ? 'positive-variance' : 'negative-variance';

  return (
    <>
      <tr>
        <td>
          <div className="indent-level" style={{ paddingLeft: `${level * 20}px` }}>
            {level > 0 ? '-- ' : ''}{row.label}
          </div>
        </td>
        <td className="value-cell">{row.value.toFixed(2)}</td>
        <td colSpan="2">
          <ValueInput
            onPercentageChange={handlePercentageChange}
            onValueChange={handleValueChange}
          />
        </td>
        <td className={`value-cell ${varianceClass}`}>
          {variance}%
        </td>
      </tr>
      {row.children?.map(child => (
        <TableRow
          key={child.id}
          row={child}
          level={level + 1}
          onValueChange={onValueChange}
          originalValue={child.value}
        />
      ))}
    </>
  );
};

export default TableRow;