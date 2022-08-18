import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav1 from './components/Nav';
import Main from './components/Main';
import Weekly from './components/Weekly';
import Monthly from './components/Monthly';
import Videos from './components/Videos';



function App() {
  return (
    <div>
      <Router>
        <Nav1/>
        <Routes>
          <Route exact path="/component/Main" element={<Main />} />
          <Route path="/component/Weekly" element={<Weekly />} />
          <Route path="/component/Monthly" element={<Monthly />} />
          <Route path="/component/Videos" element={<Videos />} />
        </Routes>
      </Router>
    </div>
  );
}



export default App;