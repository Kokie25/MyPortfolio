import React, { useState } from 'react';
import image from './portfolio.jpg';
import icon from './in.png';
import github from './github.png';
import whatsapp from './whatsapp.png';
import email from './images.jpeg';
import java from './java.png';
import python from './python.png';
import react from './reactjs.png';
import dart from './dart.png';
import flutter from './flutter.png';
import flask from './flask.png';
import teamwork from './teamwork.jpeg';
import adapt from './adaptability.jpg';
import solve from './problem solving.jpg';
import reliable from './reliable.png';
import first from './1st.png';
import second from './2nd.png';
import third from './3rd.png';
import fourth from './4th.png';
import fifth from './5th.png';
import sixth from './6th.png';
import seventh from './7th.png';
import eighth from './8th.png';
import nineth from './9th.png';
import tenth from './10th.png';
import './App.css';

function App() {
  const Carousel = () => {
    const images = [first, second, third, fourth, fifth,sixth,seventh,eighth,nineth,tenth]; // Array of images
    const [currentIndex, setCurrentIndex] = useState(0); // Track current image index

    // Function to move to the next slide
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? prevIndex : prevIndex + 1));
    };

    // Function to move to the previous slide
    const prevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? prevIndex : prevIndex - 1));
    };

    // Function to go to a specific slide
    const goToSlide = (index) => {
      setCurrentIndex(index);
    };

    return (
      <div className="carousel-container">
        <div className="carousel-slides" style={{ transform: `translateX(${-currentIndex * 100}%)` }}>
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Slide ${index + 1}`} className="carousel-image" />
          ))}
        </div>

        {/* Navigation buttons */}
        <button className="carousel-prev" onClick={prevSlide} disabled={currentIndex === 0}>
          &#10094;
        </button>
        <button className="carousel-next" onClick={nextSlide} disabled={currentIndex === images.length - 1}>
          &#10095;
        </button>

        {/* Dots for slide navigation */}
        <div className="carousel-dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="App">
      <header>
        <img src={image} className="image" alt="profile" />
      </header>
      <div className="info">
        <h1 className="names">Koketso Motshana</h1>
        <h2 className="about-me">
          Hey! I'm Koketso, a software student with a strong foundation in system integration and expertise in Python, Java, and Flutter. I create innovative, scalable applications with a focus on seamless user experiences. Explore my projects to see how I blend technical skills and creativity to build impactful solutions.
        </h2>
      </div>
      <div className="about-section">
        <h1 className="know-me">About Me</h1>
        <h2 className="here-we-go">
          I am a software student at WeThinkCode_. A holder of a Diploma in Law (cum laude), blending technical expertise with a commitment to community service. Passionate about using technology to solve complex challenges and dedicated to giving back through volunteering my technical skills. Eager to contribute innovative solutions to software development teams and make a meaningful impact in the tech industry.
        </h2>
      </div>
      <div className="skills-section">
        <h1 className="skill-h">Skills</h1>
        <h2 className="tech-skill">Languages and Frameworks</h2>
        <div className="grid-container">
          <div className="image-container">
            <img src={python} className="lang" alt="python" />
            <p>Python</p>
          </div>
          <div className="image-container">
            <img src={java} className="lang2" alt="java" />
            <p>Java</p>
          </div>
          <div className="image-container">
            <img src={dart} className="lang" alt="dart" />
            <p>Dart</p>
          </div>
        </div>
        <div className="grid-container2">
          <div className="image-container">
            <img src={flutter} className="lang" alt="flutter" />
            <p>Flutter</p>
          </div>
          <div className="image-container">
            <img src={flask} className="lang2" alt="flask" />
            <p>Flask</p>
          </div>
          <div className="image-container">
            <img src={react} className="lang" alt="react" />
            <p>React.js</p>
          </div>
        </div>
        <h2 className="soft-skill">Soft Skills</h2>
        <div className="grid-container3">
          <div className="image-container">
            <img src={teamwork} className="lang" alt="teamwork" />
            <p>Teamwork</p>
          </div>
          <div className="image-container">
            <img src={adapt} className="lang2" alt="adapt" />
            <p>Adaptability</p>
          </div>
          <div className="image-container">
            <img src={solve} className="lang" alt="solve" />
            <p className='problems'>Problem Solving</p>
          </div>
          <div className="image-container">
            <img src={reliable} className="lang2" alt="reliable" />
            <p>Reliability</p>
          </div>
        </div>
        <h1 className="projects">Projects</h1>
        <div class="form">
        <Carousel/>
        <h1 class ="description">Patient-registration-form</h1>
        <h2 class= "descript">Developed a comprehensive patient management system using Flask, featuring secure login and role-based access control for admins, doctors, and clerks. The application enables user registration, patient data management, and streamlined patient search functionality. Integrated unique patient file identification with UUIDs and ensured data persistence through JSON storage.</h2>
          <div className="language-used">
            <p>Css</p>
          </div>
          <div className="language-used">
            <p>Python</p>
          </div>
          <div className="language-used">
            <p>Flask</p>
          </div>
          <div className="language-used">
            <p>Html</p>
          </div>
        <a href="https://github.com/Kokie25/personal_project"  title="View personal project on GitHub">
        <img src={github} className="repo" alt="Github" />
        </a>
        </div>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/koketso-motshana-474a1417a">
            <img src={icon} className="icon" alt="LinkedIn" />
          </a>
          <a href="https://github.com/Kokie25">
            <img src={github} className="icon" alt="Github" />
          </a>
          <a href="https://wa.me/+27724657504">
            <img src={whatsapp} className="icon" alt="Whatsapp" />
          </a>
          <a href="mailto:kmotshana023@student.wethinkcode.co.za">
            <img src={email} className="icon" alt="Email" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
