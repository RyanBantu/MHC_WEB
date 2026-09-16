import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import Worship from './pages/Worship';
import Community from './pages/Community';
import About from './pages/About';
import Ministries from './pages/Ministries';
import Support from './pages/Support';
import Team from './pages/Team';
import './index.css';
import Beliefs from './pages/Beliefs';
import Culture from './pages/Culture';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/worship" element={<Worship />} />
          <Route path="/community" element={<Community />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/ministries" element={<Ministries />} /> 
          <Route path="/beliefs" element={<Beliefs />} /> 
          <Route path="/culture" element={<Culture />} /> 
          <Route path="/support" element={<Support />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
