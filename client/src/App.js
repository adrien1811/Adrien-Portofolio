import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './page/profile/profile.js';
import AboutMe from './page/aboutMe/aboutMe.js';
import Projects from './page/projects/projects.js';
import Test from './page/test/test.js';
import Navibar from './components/navibar/navibar.js';
import Footer from './components/footer/footer.js';

import './index.css';
const App =() =>{
  return (
    <div>
    <div className="Background">
    <Navibar />
      <Router>
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/aboutMe" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
      <Footer />
    </div>
    </div>
  );
}

export default App;
