import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './projects.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Concerthub from '../../assets/tools-concerthub.png';
import JSleep from '../../assets/tools-Jsleep.png';
import AutomaticFan from '../../assets/tools-automaticfan.png';
import Ecoweather from '../../assets/tools-ecoweather.png';
import Football from '../../assets/tools-football.png';
import JSleepPhoto from '../../assets/JSleep.png';
import AutomaticFanPhoto from '../../assets/AutomaticFan.png';
import EcoWeatherPhoto from '../../assets/EcoWeather.png';
import FootballPhoto from '../../assets/Football.png';
import ConcertHubPhoto from '../../assets/ConcertHub.png';
const projects = () => {
  return (
    <div>
    <Helmet>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&family=Lilita+One&family=Noto+Sans+JP:wght@200&family=Open+Sans:wght@300&family=Quicksand&family=Yanone+Kaffeesatz&display=swap" rel="stylesheet"/>
    </Helmet>
    <section className="ftco-section ftco-no-pt gradient-container" style={{ backgroundColor: '#223030', paddingTop: '170px', paddingBottom: '100px' }}>
  <div className="container">
    <div className="row">
    <div className="col-md-4 col-sm-12 text-center remove-borders border-bottom-md" style={{ border: '3px solid #AE8C73',height:'100' }}>
      <h1 style={{ fontFamily: 'Lilita One, cursive', fontSize: '45px', color: '#AE8C73'}}>Project 1</h1>
        <img src={ConcertHubPhoto} alt="Image" className="img-fluid" style={{ maxWidth: '80%', height: 'auto' }} />
      </div>
      <div className="col-md-8 col-sm-12 text-center remove-borders border-top-md border-left-sm" style={{ border: '3px solid #AE8C73' }}>
      <h1 style={{ fontFamily: 'Lilita One, cursive', fontSize: '45px', color: '#AE8C73' }}>ConcertHub</h1>
        <h1 style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '30px', color: 'white' }}>Description</h1>
        <p style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '15px', color: 'white', textAlign: 'justify',marginTop: '0px' }}>
        ConcertHub is a website for concert ticket sales. Users can also view upcoming events and artist biographies. This project is my first-ever website project. I worked as a full-stack developer when build this project, where I built the database system and also worked on both the server and client sides. The problem we faced arose when we attempted to create user sessions upon account login. This challenge emerged due to our initial lack of knowledge about the required dependencies. To solve the problem, we planned collaborative studying and research. Overall, I am satisfied with the project – not only with the final results but also with the excellent teamwork that was demonstrated throughout the development.
        </p>
        <h1 style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '30px', color: 'white' }}>Year Accomplished</h1>
        <p style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '15px', color: 'white', textAlign: 'center',marginTop: '0px' }}>
         June, 2023
        </p>
        <h1 style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '30px', color: 'white' }}>Role</h1>
        <p style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '15px', color: 'white', textAlign: 'center',marginTop: '0px' }}>
         Full Stack Engineer-Team Leader
        </p>
        <h1 style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '30px', color: 'white' }}>Technology Used</h1>
        <img src={Concerthub} alt="Image" className="img-fluid" style={{ maxWidth: '50%', height: 'auto' }} />
        <p style={{marginTop: '20px'}}>
        <a href="https://github.com/adrien1811/SBD-N14-ConcertHub" target="_blank" rel="noopener noreferrer">
        <button className="btn custom-button" id="custom-button3">
        View Project
        </button>
      </a>
      </p>
      </div>
    </div>
    <div className="row" style={{marginTop: '50px'}}>
      <div className="col-md-4 col-sm-12 text-center remove-borders border-bottom-md" style={{ border: '3px solid #AE8C73',height:'100' }}>
      <h1 style={{ fontFamily: 'Lilita One, cursive', fontSize: '45px', color: '#AE8C73'}}>Project 2</h1>
        <img src={JSleepPhoto} alt="Image" className="img-fluid" style={{ maxWidth: '100%', height: 'auto' }} />
      </div>
      <div className="col-md-8 col-sm-12 text-center remove-borders border-top-md border-left-sm" style={{ border: '3px solid #AE8C73' }}>
      <h1 style={{ fontFamily: 'Lilita One, cursive', fontSize: '45px', color: '#AE8C73' }}>JSleep</h1>
        <h1 style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '30px', color: 'white' }}>Description</h1>
        <p style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '15px', color: 'white', textAlign: 'justify',marginTop: '0px' }}>
        JSleep is a hotel reservation application built using Java OOP. Users can top up their account balances and reserve their rooms. It was an individual project, and I took on the role of a full stack engineer. The problem that challenged me during this project was connecting the database with the client side. To solve the issue, I asked one of my friends to teach me about resolving the problem. At the end, the results were good, I succesfully completed all the required features given by the lecturer.
        </p>
        <h1 style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '30px', color: 'white' }}>Year Accomplished</h1>
        <p style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '15px', color: 'white', textAlign: 'center',marginTop: '0px' }}>
         December, 2022
        </p>
        <h1 style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '30px', color: 'white' }}>Role</h1>
        <p style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '15px', color: 'white', textAlign: 'center',marginTop: '0px' }}>
         Full Stack Engineer
        </p>
        <h1 style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '30px', color: 'white' }}>Technology Used</h1>
        <img src={JSleep} alt="Image" className="img-fluid" style={{ maxWidth: '15%', height: 'auto' }} />
        <p style={{marginTop: '20px'}}>
        <a href="https://github.com/adrien1811/jsleep-android" target="_blank" rel="noopener noreferrer">
        <button className="btn custom-button2" id='custom-button3'>View Project</button>
      </a>
      </p>
      </div>
    </div>
    <div className="row" style={{marginTop: '50px'}}>
    <div className="col-md-4 col-sm-12 text-center remove-borders border-bottom-md" style={{ border: '3px solid #AE8C73',height:'100' }}>
      <h1 style={{ fontFamily: 'Lilita One, cursive', fontSize: '45px', color: '#AE8C73' }}>Project 3</h1>
        <img src={AutomaticFanPhoto} alt="Image" className="img-fluid" style={{ maxWidth: '80%', height: 'auto' }} />
      </div>
      <div className="col-md-8 col-sm-12 text-center remove-borders border-top-md border-left-sm" style={{ border: '3px solid #AE8C73' }}>
      <h1 style={{ fontFamily: 'Lilita One, cursive', fontSize: '45px', color: '#AE8C73' }}>Automatic Fan</h1>
        <h1 style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '30px', color: 'white' }}>Description</h1>
        <p style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '15px', color: 'white', textAlign: 'justify',marginTop: '0px' }}>
        In this project, we utilized an Arduino Uno microcontroller programmed in assembly language. Our setup involved using the DHT11 sensor to measure room temperature, which was then visually displayed through an LED. The HCSR04 distance sensor played a crucial role by determining fan activation conditions: when the temperature exceeded 20 degrees Celsius and a person was within 30cm of the sensor. Despite facing challenges with the inconsistent performance of the DHT11 sensor, we successfully addressed the issue by replacing it. As a result, we accomplished our project goals as intended.
        </p>
        <h1 style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '30px', color: 'white' }}>Year Accomplished</h1>
        <p style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '15px', color: 'white', textAlign: 'center',marginTop: '0px' }}>
        May, 2023
        </p>
        <h1 style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '30px', color: 'white' }}>Role</h1>
        <p style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '15px', color: 'white', textAlign: 'center',marginTop: '0px' }}>
        Collaborator (constructing the circuit, and servo code)
        </p>
        <h1 style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '30px', color: 'white' }}>Technology Used</h1>
        <img src={AutomaticFan} alt="Image" className="img-fluid" style={{ maxWidth: '25%', height: 'auto' }} />
        <p style={{marginTop: '20px'}}>
        <a href="https://github.com/RadityaDito/Proyek-SSF-Automatic-Fan" target="_blank" rel="noopener noreferrer">
        <button className="btn custom-button2" id='custom-button3'>View Project</button>
      </a>
      </p>
      </div>
    </div>
    <div className="row" style={{marginTop: '50px'}}>
    <div className="col-md-4 col-sm-12 text-center remove-borders border-bottom-md" style={{ border: '3px solid #AE8C73',height:'100' }}>
      <h1 style={{ fontFamily: 'Lilita One, cursive', fontSize: '45px', color: '#AE8C73' }}>Project 4</h1>
        <img src={EcoWeatherPhoto} alt="Image" className="img-fluid" style={{ maxWidth: '100%', height: 'auto' }} />
      </div>
      <div className="col-md-8 col-sm-12 text-center remove-borders border-top-md border-left-sm" style={{ border: '3px solid #AE8C73' }}>
      <h1 style={{ fontFamily: 'Lilita One, cursive', fontSize: '45px', color: '#AE8C73' }}>EcoWeather</h1>
        <h1 style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '30px', color: 'white' }}>Description</h1>
        <p style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '15px', color: 'white', textAlign: 'justify',marginTop: '0px' }}>
        EcoWeather is a weather forecast website that features a dynamic background image and a map related to the city searched by the user. The website also provides a 12-hour weather forecast, predicting the weather every 3 hours. During the development of the website, I gained many valuable experiences, such as connecting the Google Maps and OpenWeather API to my website. I also learned how to build a responsive website. Overall, I am satisfied with the results as I gained much new knowledge and skills.
        </p>
        <h1 style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '30px', color: 'white' }}>Year Accomplished</h1>
        <p style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '15px', color: 'white', textAlign: 'center',marginTop: '0px' }}>
        August,2023
        </p>
        <h1 style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '30px', color: 'white' }}>Role</h1>
        <p style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '15px', color: 'white', textAlign: 'center',marginTop: '0px' }}>
        Front-end engineer
        </p>
        <h1 style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '30px', color: 'white' }}>Technology Used</h1>
        <img src={Ecoweather} alt="Image" className="img-fluid" style={{ maxWidth: '25%', height: 'auto' }} />
        <p style={{marginTop: '20px'}}>
        <a href="https://github.com/adrien1811/WeatherApp" target="_blank" rel="noopener noreferrer">
        <button className="btn custom-button2" id='custom-button3'>View Project</button>
      </a>
      </p>
      </div>
    </div>
    <div className="row" style={{marginTop: '50px'}}>
    <div className="col-md-4 col-sm-12 text-center remove-borders border-bottom-md" style={{ border: '3px solid #AE8C73',height:'100' }}>
      <h1 style={{ fontFamily: 'Lilita One, cursive', fontSize: '45px', color: '#AE8C73' }}>Project 5</h1>
        <img src={FootballPhoto} alt="Image" className="img-fluid" style={{ maxWidth: '100%', height: 'auto' }} />
      </div>
      <div className="col-md-8 col-sm-12 text-center remove-borders border-top-md border-left-sm" style={{ border: '3px solid #AE8C73' }}>
      <h1 style={{ fontFamily: 'Lilita One, cursive', fontSize: '45px', color: '#AE8C73' }}>Football Scoreboard</h1>
        <h1 style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '30px', color: 'white' }}>Description</h1>
        <p style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '15px', color: 'white', textAlign: 'justify',marginTop: '0px' }}>
        This Football Scoreboard circuit was created using Tinkercad and Logisim. It was built to display the time and score during a match, the buzzer will sound whenever a goal is scored. I worked on this project with 4 other members. During the construction phase, we encountered a challenge related to the required voltage for accurate simulation of the circuit. To address this issue, we conducted research collectively to find a suitable solution. Our online search led us to a reliable voltage calculation method. Through our collaborative efforts, we ultimately succeeded in building this project.
        </p>
        <h1 style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '30px', color: 'white' }}>Year Accomplished</h1>
        <p style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '15px', color: 'white', textAlign: 'center',marginTop: '0px' }}>
        December, 2021
        </p>
        <h1 style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '30px', color: 'white' }}>Role</h1>
        <p style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '15px', color: 'white', textAlign: 'center',marginTop: '0px' }}>
        Collaborator (work on the tinkercad)
        </p>
        <h1 style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '30px', color: 'white' }}>Technology Used</h1>
        <img src={Football} alt="Image" className="img-fluid" style={{ maxWidth: '25%', height: 'auto' }} />
        <p style={{marginTop: '20px'}}>
        <a href="https://drive.google.com/file/d/15LruXyy8aB73EaRId2T2HuwWylpt3GpC/view?usp=sharing" target="_blank" rel="noopener noreferrer">
        <button className="btn custom-button2" id='custom-button3'>View Project</button>
      </a>
      </p>
      </div>
    </div>
  </div> 
</section>
    </div>
  );
}

export default projects;
