import React from 'react';
import { Link } from 'react-router-dom';

import framework1 from '../assets/framework1.png';
import framework2 from '../assets/framework2.png';
// Import other framework images

const AboutSection = () => {
  const frameworks = [
    [framework1, framework2, /* ... */],
    // ...
  ];

  return (
    <section className="ftco-section ftco-no-pt d-flex justify-content-md-center justify-content-start align-items-md-center align-items-start gradient-container2" style={{ backgroundColor: '#223030', paddingBottom: '100px' }}>
      <div className="container">
        {/* ... your other content ... */}

        {/* Framework Carousel */}
        <div className="row align-items-center">
          <div className="col-md-12 d-flex flex-column justify-content-center justify-content-md-center align-items-center align-items-md-center" style={{ position: 'relative', top: '75px' }}>
            <h1 style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '45px', color: 'white', fontWeight: 'bold' }}>Skills I Have</h1>

            {/* Framework Carousel */}
            <div id="frameworkCarousel" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                {frameworks.map((slide, index) => (
                  <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                    <div className="d-flex justify-content-between">
                      {slide.map((logo, logoIndex) => (
                        <div key={logoIndex} className="carousel-logo">
                          <img src={logo} alt={`Framework ${index * 4 + logoIndex + 1}`} style={{ width: '20px' }} />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              {/* Carousel control buttons */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
