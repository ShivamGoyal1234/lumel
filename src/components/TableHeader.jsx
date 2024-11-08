import React from 'react';

const TableHeader = () => (
  <thead>
    <tr>
      <th>Label</th>
      <th className="value-cell">Value</th>
      <th colSpan="2">Input</th>
      <th className="value-cell">Variance %</th>
    </tr>
  </thead>
);

export default TableHeader;