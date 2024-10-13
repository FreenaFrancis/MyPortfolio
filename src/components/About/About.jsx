import React from 'react'
import Me from '../../assets/me1.jpeg'

import {GiGraduateCap} from 'react-icons/gi'
import { BsTelephoneForward } from 'react-icons/bs'
import {TfiWorld} from 'react-icons/tfi'
import './about.css'
function About() {
  return (
<section>
  <h5>
    Get To Know
  </h5>
  <h2>About Me</h2>
  <div className="container about_container">
    <div className="about_me">
      <div className="about_me_image">
        <img src={Me} alt="me" />
      </div>
    </div>
<div className='about_content'>



    {/* <div className="about_cards">
      <article className="about_card">
      <GiGraduateCap className='about_icon'/>
<h5>Degree</h5>
<small>
  Msc cs
  <i>Bharathiar University</i>
</small>
<GiGraduateCap className='about_icon'/>
<h5>Degree</h5>
<small>
  BCA
  <i>Bharathiar University</i>
</small>
      </article>
      <article className="about_card">
<TfiWorld className='about_icon'/>
<h5>Location</h5>
<small>
  Address
</small>
      </article>

      <article className="about_card">
<BsTelephoneForward className='about_icon'/>
<h5>Contact</h5>
<small>
<li>phone:</li>
<li>email:</li>
</small>
      </article>
    </div> */}
    <p>
    Hi, I’m Freena Francis, a passionate MERN Stack Developer with over a year of professional experience building and scaling web applications. My journey in web development began with a curiosity for creating dynamic, responsive interfaces and evolved into full-stack expertise across the MongoDB, Express.js, React.js, and Node.js (MERN) stack.

I specialize in developing scalable, user-centric applications, and have a proven track record of delivering high-quality projects. From eCommerce platforms to hospital management systems, my diverse portfolio reflects my ability to adapt and innovate across industries.
    </p>
  </div>
  </div>
</section>
  )
}

export default About