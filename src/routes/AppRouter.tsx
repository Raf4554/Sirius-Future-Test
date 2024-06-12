import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../Pages/Login';
import Home from '../Pages/Home';
import Calendar from '../Pages/Calendar';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Calendar" element={<Calendar />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
