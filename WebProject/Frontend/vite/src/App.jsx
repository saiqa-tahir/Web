//Frontend/vite/src/App.jsx

import React from 'react';
import { BrowserRouter ,  Routes, Route } from 'react-router-dom';

import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/signup" element={<SignUpPage/>} />
        <Route  path="/login" element={<LoginPage/>} />
        <Route  path="/dashboard" element={<DashboardPage/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
