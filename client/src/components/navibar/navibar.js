import React, { useState } from 'react';
import './navibar.css';
const Navibar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavToggle = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  const containerStyle = {
    width: '100%',
    height: isNavCollapsed ? '100px' : '200px', // Adjusted height based on toggle state
    backgroundColor: '#223030',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'fixed',   // Add sticky position
    top: '0',             // Stick to the top of the viewport
    zIndex: '100', 
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ padding: '0px' }}>
        <div className="container-fluid" style={containerStyle}>
          <a className="navbar-brand" style={{ margin: '0 30px', fontFamily: 'Quicksand, sans-serif', cursor: 'pointer' , color:'white'}}>Adrien Ardra Ramadhan</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded={!isNavCollapsed}
            aria-label="Toggle navigation"
            onClick={handleNavToggle}
          >
            <span className="navbar-toggler-icon" style={{color: 'white'}}></span>
          </button>
          <div className={`collapse navbar-collapse ${isNavCollapsed ? '' : 'show'}`} id="navbarNavAltMarkup">
            <div className="navbar-nav text-start text-md-center right" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', position: 'relative'}}>
              <a className="nav-link" aria-current="page" style={{ fontFamily: 'Quicksand, sans-serif', color:'white' }} href="/">Home</a>
              <a className="nav-link" style={{ fontFamily: 'Quicksand, sans-serif', color:'white' }} href="/aboutMe">About Me</a>
              <a className="nav-link" style={{ fontFamily: 'Quicksand, sans-serif', color:'white' }} href="/projects">Projects</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navibar;
