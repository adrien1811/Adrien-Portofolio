import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Laptop from '../../assets/Laptop.png';
import Skills from '../../assets/skills.png';
import html from '../../assets/html.png';
import css from '../../assets/css.png';
import js from '../../assets/js.png';
import react from '../../assets/react.png';
import bootstrap from '../../assets/boostrap.png';
import postgresql from '../../assets/postgresql.png';
import java from '../../assets/java.png';
import nodejs from '../../assets/nodejs.png';
import { Helmet } from 'react-helmet';
import './aboutMe.css';

const AboutMe = () => {

  const frameworks = [
    [html, css, js, react],
    [bootstrap, postgresql, java, nodejs]
  ];
  const [activeSlide, setActiveSlide] = useState(0);

  // Function to handle the previous slide button click
  const handlePrevSlide = () => {
    const newIndex = (activeSlide - 1 + frameworks.length) % frameworks.length;
    setActiveSlide(newIndex);
  };

  // Function to handle the next slide button click
  const handleNextSlide = () => {
    const newIndex = (activeSlide + 1) % frameworks.length;
    setActiveSlide(newIndex);
  };
  return (
    <div>
    <Helmet>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&family=Lilita+One&family=Noto+Sans+JP:wght@200&family=Open+Sans:wght@300&family=Quicksand&family=Yanone+Kaffeesatz&display=swap" rel="stylesheet"/>
    </Helmet>
    <section className="ftco-section ftco-no-pt d-flex justify-content-md-center justify-content-start align-items-md-center align-items-start gradient-container2" style={{ backgroundColor: '#223030',paddingBottom:'100px',paddingTop:'100px'  }}>
  <div className="container" >
    <div className="row align-items-center">
    <div className="col-md-2" style={{ }}></div>
    <div class="col-md-3 mt-3 d-flex flex-column justify-content-center justify-content-md-start align-items-center align-items-md-start" style={{width:'540px'}}>
        <h1 style={{ fontFamily: 'Quicksand, sans-serif', fontSize:'55px', color:'white' , fontWeight:'bold'}}>Get To Know Me</h1>
        <p style={{ fontFamily: 'Quicksand, sans-serif' , fontSize: '20px',textAlign: 'justify', color:'white'}}>My name is Adrien Ardra Ramadhan, and I am  a 3rd-year Computer Engineering student and experienced in mobile and web development. Currently looking for opportunities to enhance my skills towards achieving my career goals. Hit the button below and see my past projects.</p>
        <div style={{ display: 'flex', alignSelf:'center', justifyContent: 'center', position: 'relative' }}>
        <Link to="/projects">
        <button className="btn custom-button" style={{ position: 'relative', left: '50%', transform: 'translateX(-50%)', top: '20px' }} id="custom-button">
        View Projects
        </button>
          </Link>
          </div>
      </div>
      <div className="col-md-3 col-12 col-sm-12 align-items-center justify-content-center" style={{ position: 'relative' ,top: '50px'}}>
        <img src={Laptop} alt="Image" className="img-fluid" style={{ width: '420px' ,transform: 'scaleX(-1)'}} />
        </div>
      </div>
   
        {/* Framework Carousel */}
        <div className="row align-items-center">
          <div className="col-md-12 d-flex flex-column justify-content-center justify-content-md-center align-items-center align-items-md-center" style={{ position: 'relative', top: '75px' }}>
            <h1 style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '45px', color: 'white', fontWeight: 'bold' }}>Skills I Have</h1>
            {/* Framework Carousel */}
            <div id="frameworkCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {frameworks.map((slide, index) => (
            <div key={index} className={`carousel-item ${index === activeSlide ? 'active' : ''}`}>
              <div className="d-flex justify-content-between" style={{ margin: '10px 0' }}>
                {slide.map((logo, logoIndex) => (
                  <div key={logoIndex} className="carousel-logo" style={{ margin: '0 15px' }}>
                    <img src={logo} alt={`Framework ${index * 4 + logoIndex + 1}`} style={{ width: '50px' }} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" onClick={handlePrevSlide} style={{ marginRight: '40px' }}>
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" onClick={handleNextSlide} style={{ marginLeft: '40px' }}>
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
          </div>
        </div>
  </div>
    </section>
    </div>
  );
}

export default AboutMe;
