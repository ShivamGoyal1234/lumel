import React from 'react';
import HierarchicalTable from './components/HierarchicalTable';
import './styles/Table.css';

const App = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <HierarchicalTable />
    </div>
  );
};

export default App;