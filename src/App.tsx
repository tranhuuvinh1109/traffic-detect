import React, { createContext, useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { HomePage, ManagePage, SearchPage } from './pages';
import Layout from './layout';

export const APP_CONTEXT = createContext<{
  address?: string;
  setAddress?: React.Dispatch<React.SetStateAction<string>>;
}>({});

function App() {
  const [address, setAddress] = useState<string>('');
  return (
    <APP_CONTEXT.Provider value={{ address, setAddress }}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="manage" element={<ManagePage />} />
            <Route path="search" element={<SearchPage />} />
          </Route>
        </Routes>
      </div>
    </APP_CONTEXT.Provider>
  );
}

export default App;
