import React from 'react';
import './App.css';
import { TreeComponent } from '../components/TreeComponent';

const App: React.FC = (): JSX.Element => {
  return (
    <div className="App">
      <TreeComponent />
    </div>
  );
}

export default App;
