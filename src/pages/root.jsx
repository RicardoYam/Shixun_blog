import React from 'react'
import Navbar from '../components/Navbar'
import './root.css'
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import Cards from '../components/Cards';

function root() {
  return (
    <>
      <div className='header'><Navbar /></div>
      <div className='content'>
        <div className="banner">
          <h1>Hello,</h1>
          <h1>Nice to meet you</h1>
          <div className='content-contact'>
            <IoIosArrowRoundForward style={{ color: 'white', margin: '30px' }} size='130px' />
            <div className='content-contact-item'>
              <p>Front-end &</p>
              <p>Back-end development</p>
            </div>
            <div className='content-contact-item'>
              <p>Data Analysis</p>
            </div>
            <div className='content-contact-item'>
              <p>Contact:</p>
              <p>lishixun1219@gmail.com</p>
              <a href="https://www.linkedin.com/in/shixun-li-669a4b287/"><FaLinkedin style={{ color: 'white', marginTop: '10px', marginRight: '10px' }} size='30px' /></a>
              <a href="https://github.com/RicardoYam"><FaGithub style={{ color: 'white', marginTop: '10px', marginRight: '10px' }} size='30px' /></a>
              <a href="https://leetcode.com/RicardoOVO/"><SiLeetcode style={{ color: 'white', marginTop: '10px' }} size='30px' /></a>
            </div>
          </div>
        </div>
        <div className='content-intro'>
          <video src="src\assets\videos\fashion.mp4" autoPlay loop muted></video>
        </div>
        <Cards />
      </div>
    </>
  )
}

export default root