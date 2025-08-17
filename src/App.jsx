import React, { useEffect } from "react";
import laptop from './pics/laptop.png';
import './style.css';
import icon from './pics/icon.png';
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function App() {

useEffect(() => {
  const texts = ["Software Engineer", "Web Developer", "Graphic Designer"];
  let textIndex = 0;
  let charIndex = 0;
  let typingSpeed = 100;
  let deletingSpeed = 50;
  let pause = 1500;

  const typedText = document.getElementById("typed-text");

  function typeWord() {
    const currentText = texts[textIndex];
    if (charIndex < currentText.length) {
      typedText.textContent = currentText.slice(0, charIndex + 1);
      charIndex++;
      setTimeout(typeWord, typingSpeed);
    } else {
      setTimeout(deleteWord, pause);
    }
  }

  function deleteWord() {
    const currentText = texts[textIndex];
    if (charIndex > 0) {
      typedText.textContent = currentText.slice(0, charIndex - 1);
      charIndex--;
      setTimeout(deleteWord, deletingSpeed);
    } else {
      textIndex = (textIndex + 1) % texts.length;
      setTimeout(typeWord, typingSpeed);
    }
  }

  typeWord(); // start
}, []);


  return (
    <div>
      <nav className="navbar">
        <a href="#home">Home</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>

      <section id="home" className="section">
        <div className="inner">
          <h1>Hi, I’m <span className="accent">Ayesha</span></h1>
          <h2 id="typed-text" className="typed-text"></h2>
          <p>Learn more about myself</p>
          <div>
            <a href="#contact" className="btn">Connect</a>
          </div>
        </div>

        <div className="homepage">
          <img src={laptop} alt="Laptop" />
        </div>
      </section>
      
      {/* Skills Section */}
       <section id="skills" className="section alt">
          <div className="inner">
            <h2>Skills</h2>
            <ul className="circle-list">
              {[
                { name: 'React', perc: 85 },
                { name: 'JavaScript', perc: 90 },
                { name: 'HTML', perc: 95 },
                { name: 'CSS', perc: 90 },
                { name: 'MySQL', perc: 80 },
                { name: 'C++', perc: 75 },
              ].map((skill, index) => (
                <motion.li
          key={index}
          initial={{ opacity: 0, y: 40, scale: 0.8 }}   // start hidden
          whileInView={{ opacity: 1, y: 0, scale: 1 }}  // animate when visible
          transition={{
            duration: 0.6,
            delay: index * 0.2, // stagger effect
            type: "spring",
            stiffness: 100
          }}
      
        >
          <svg className="progress-circle" width="120" height="120">
            <circle className="bg" cx="60" cy="60" r="54"></circle>
            <circle
              className="progress"
              cx="60"
              cy="60"
              r="54"
              style={{ strokeDashoffset: 339.292 * (1 - skill.perc / 100) }}
            ></circle>
          </svg>
          <div className="skill-name">{skill.name}</div>
        </motion.li>
            
              ))}
            </ul>
          </div>
        </section>


      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="inner">
          <h2>Projects</h2>
          <div className="cards">
            <article className="card">
              <h3>Job Portal System</h3>
              <p>Database-backed app with roles, job posting, and applications.</p>
              <div className="tag-row"><span className="tag">MySQL</span><span className="tag">React</span></div>
            </article>
            <article className="card">
              <h3>Traffic Light Controller</h3>
              <p>Binary signals modeled & verified using NuSMV for safety/liveness.</p>
              <div className="tag-row"><span className="tag">NuSMV</span><span className="tag">Formal</span></div>
            </article>
            <article className="card">
              <h3>Hotel Network Design</h3>
              <p>Cisco Packet Tracer topology with VLANs and DHCP.</p>
              <div className="tag-row"><span className="tag">Networking</span><span className="tag">Cisco PT</span></div>
            </article>
          </div>
        </div>
      </section>
          {/* About Section */}
      <section id="about" className="section alt about-section">
        <div className="about-inner">
          <motion.img
            className="about-avatar"
            src={icon}
            alt="image"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
         
          >
            <h2>About</h2>
            <p>I’m a 5th semester Software Engineering student at PAF IAST...</p>
            <p>Currently learning web development to make responsive and interactive designs.</p>
            <a className="btn" href="/Ayesha_Resume.pdf" download>Download Résumé</a>
          </motion.div>
        </div>
      </section>


            {/* Contact Section */}
        <section id="contact" className="section">
          <div className="inner">
            <div className="contact-header">
              <h2>Contact</h2>
              <div className="contact-icons">
                <a href="mailto:ayesha@gmail.com"><FaEnvelope size={28} /></a>
                <a href="https://www.linkedin.com/in/ayesha-abid-390177346/"><FaLinkedin size={28} /></a>
                <a href="https://github.com/"><FaGithub size={28} /></a>
              </div>
            </div>

            {/* Contact Form */}
            <form
              className="form"
              onSubmit={(e) => {
                e.preventDefault();
                alert('Thanks! Message saved locally.');
                e.target.reset();
              }}
            >
              <label>Name<input name="name" placeholder="Your name" required /></label>
              <label>Email<input type="email" name="email" placeholder="you@example.com" required /></label>
              <label>Message<textarea name="message" rows="5" placeholder="How can I help?" required /></label>
              <button className="btn" type="submit">Send</button>
            </form>
          </div>
        </section>

      <div><footer className="footer">
        © {new Date().getFullYear()} Ayesha — Portfolio
      </footer></div>
    </div>
  );
}
