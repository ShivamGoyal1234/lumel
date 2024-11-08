import React from 'react';

const GrandTotal = ({ total }) => (
  <tr className="grand-total">
    <td>Grand Total</td>
    <td className="value-cell">{total.toFixed(2)}</td>
    <td colSpan="3"></td>
  </tr>
);

export default GrandTotal;