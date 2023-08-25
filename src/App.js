import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Profile from './components/pages/Profile';
import Projects from './components/pages/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/profile' exact element={<Profile />} />
        <Route path='/Projects' exact element={<Projects />} />
      </Routes>
      <Footer />
      </Router>
    </>
  );
}

export default App;
