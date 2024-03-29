import React from 'react'
import './about.css'
import Nav from '../components/Navbar'
import Footer from '../components/Footer'
import TagCloud from '../components/Tagcloud'
import avatar from '/images/Avatar.jpg'
import uqlogo from '/images/University_of_Queensland_(crest).png'

function about() {
  return (
    <>
      <Nav />
      <div className='about-content'>
        <div className="about-title"><p>I'm Shixun.</p></div>
        <div className="about-summary">
          <div className='summary-avatar'>
            <img src={avatar} alt="avatar" />
            <div className='summary-education'>
              <img src={uqlogo} alt="uq logo" />
              <span>Master of Computer Science @UQ</span>
            </div>
          </div>
          <div className="summary-content">
            <h3>I'm a Master of Computer Science Student will graduate on Jun 2024.</h3>
            <p>Over the past 5+ years, hrough continuous in-class and extracurricular learning, I have proficiently mastered various mainstream programming languages and frameworks. I've delved into full-stack development, DevOps, and machine learning, spanning different domains to explore my interests.</p>
          </div>
        </div>
        <div className="about-skills">
          <div className="skill-item java" style={{ '--targetWidth': '100%' }}>Java</div>
          <div className="skill-item python" style={{ '--targetWidth': '90%' }}>Python</div>
          <div className="skill-item react" style={{ '--targetWidth': '70%' }}>React & Vue</div>
          <div className="skill-item sql" style={{ '--targetWidth': '80%' }}>SQL</div>
        </div>
        <div className="about-tagcloud">
          <div><TagCloud /></div>
        </div>
        <div className='about-steps'>
          <div className='steps-content'>
            <div className='steps-content'>
              <div className='content-row'>
                <div className='each-step'>
                  <h3>01</h3>
                  <h3>Plan it</h3>
                  <p>I meticulously plan all my activities, ensuring a perfect balance between study and personal life with a strict daily schedule. This disciplined approach guarantees flawless execution of all my current and future projects, each benefiting from a thoughtfully crafted plan.</p>
                </div>
                <div className='each-step'>
                  <h3>02</h3>
                  <h3>Make it</h3>
                  <p>By strictly adhering to a timetable, I ensure plans are completed ahead of the set deadlines. I efficiently fulfill my responsibilities with proficiency while humbly addressing any shortcomings during the learning process.</p>
                </div>
              </div>

              <div className='content-row'>
                <div className='each-step'>
                  <h3>03</h3>
                  <h3>Test it</h3>
                  <p>Through experiments in real-world scenarios, the project's reliability and stability are validated, identifying potential issues that may arise during practical application.</p>
                </div>
                <div className='each-step'>
                  <h3>04</h3>
                  <h3>Evaluate it</h3>
                  <p>Refining and optimizing issues within the project, then revisiting the planning phase to establish a complete closed-loop model.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default about