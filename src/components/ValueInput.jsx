import React, { useState } from 'react';
import '../styles/Table.css';

const ValueInput = ({ onPercentageChange, onValueChange }) => {
  const [inputValue, setInputValue] = useState('');

  const handlePercentageClick = () => {
    const percentage = parseFloat(inputValue);
    if (!isNaN(percentage)) {
      onPercentageChange(percentage);
      setInputValue('');
    }
  };

  const handleValueClick = () => {
    const value = parseFloat(inputValue);
    if (!isNaN(value)) {
      onValueChange(value);
      setInputValue('');
    }
  };

  return (
    <div className="input-group">
      <input
        type="number"
        className="number-input"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter value"
      />
      <button className="btn" onClick={handlePercentageClick}>
        Allocation %
      </button>
      <button className="btn" onClick={handleValueClick}>
        Allocation Val
      </button>
    </div>
  );
};

export default ValueInput;