import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { HomePage, ManagePage } from './pages';
import Layout from './layout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="manage" element={<ManagePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
