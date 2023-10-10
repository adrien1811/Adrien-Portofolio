import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Helmet } from 'react-helmet';
import photo from '../../assets/photo.png';
import Instagram from '../../assets/Instagram.png';
import Linkedin from '../../assets/Linkedin.png';
import Youtube from '../../assets/Youtube.png';
import Github from '../../assets/Github.png';
import './profile.css';
import { Link } from 'react-router-dom'; 

const Profile = () => {
  return (
    <div>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Lilita+One&family=Noto+Sans+JP:wght@200&family=Open+Sans:wght@300&family=Quicksand&family=Yanone+Kaffeesatz&display=swap" rel="stylesheet" />
      </Helmet>
      <section className="ftco-section ftco-no-pt d-flex justify-content-md-center justify-content-start align-items-md-center align-items-start gradient-container " style={{ backgroundColor: '#223030', paddingBottom:'100px',paddingTop:'100px'}}>
  <div className="container">
    <div className="row align-items-center mt-5">
      <div className="col-md-4" style={{ position: 'relative', top: '0px'}}>
        <img src={photo} alt="Image" className="img-fluid" style={{ width: 'auto', height:'420px' }} />
      </div>
      <div class="col-md-5 mt-3 d-flex flex-column align-items-center align-items-md-start">
  <h1 style={{ fontFamily: 'Quicksand, sans-serif' , fontSize: '35', color:'white'}}>Hello, it's me</h1> 
  <p style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '55px', color: 'white', fontWeight:'bold'}}>ADRIEN.</p>
  <p style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '20px' }}>
  <span style={{ color: 'white', marginRight: '10px' }}>I'm excited to join</span> 
  <span style={{ color: 'black' }}>
BRILiaN Scholarship Program 2023
</span>
  </p>
  <div style={{ display: 'flex', alignSelf:'center', justifyContent: 'center', position: 'relative' }}>
    <Link to="/aboutMe">
      <button className="btn custom-button" style={{ position: 'relative', left: '50%', transform: 'translateX(-50%)', top: '20px', width: '150px' }} id="custom-button">
        About Me
      </button>
    </Link>
  </div>
</div>
      <div className="col-md-3 d-flex flex-md-column flex-row align-items-md-center justify-content-center justify-content-md-start mt-3 mt-md-0 margin" style={{position:'relative'}}>
    <a href="https://www.instagram.com/adrnard/" target="_blank" rel="noopener noreferrer">
        <img src={Instagram} alt="Instagram" class="img-fluid mt-3 social-icon" />
    </a>
    <a href="https://www.youtube.com/@adrienardra3794/videos" target="_blank" rel="noopener noreferrer" style={{ marginLeft: '10px', marginRight: '10px' }}>
        <img src={Youtube} alt="Youtube" class="img-fluid mt-3 social-icon" />
    </a>
    <a href="https://www.linkedin.com/in/adrien-ardra-ramadhan-71333b218/" target="_blank" rel="noopener noreferrer">
        <img src={Linkedin} alt="Linkedin" class="img-fluid mt-3 social-icon" />
    </a>
    <a href="https://github.com/adrien1811" target="_blank" rel="noopener noreferrer">
        <img src={Github} alt="Github" class="img-fluid mt-3 social-icon" style={{ width: '45px', marginLeft: '4px' }} />
    </a>
</div>

    </div>
    
  </div>
</section>

    </div>
  );
}

export default Profile;
