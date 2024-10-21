// import React from 'react'
// import {BsGithub, BsLinkedin, BsMedium} from 'react-icons/bs'
// import {MdOutlineEmail} from 'react-icons/md'
// import './contact.css'
// function Contact() {
//   return (
//   <section id='#contact'>
// <h5>Get in Touch</h5>
// <h2>Contact Me</h2>
// <div className="container contact_container">
// <div className="contact_options">

//   <article className="contact_option">
//     <a href=''>
//     <MdOutlineEmail className='contact_option_icon'/>
//     </a>
//     {/* <h4>Email</h4>
//     <h5>freenafrancis200@gmail.com</h5>
//     <a href=''>Send Message</a> */}
//     </article>

//     <article className="contact_option">
//   <a href="">  <BsGithub className='contact_option_icon'/></a>
//     {/* <h4>Github</h4>
//     <h5>github.com/FreenaFrancis</h5>
//     <a href='https://github.com/FreenaFrancis'>open</a> */}
//     </article>
//     <article className='contact_option'>
//     <a href=""><BsLinkedin className='contact_option_icon'/></a>
//     </article>


// </div>
// <form>
//  <input type='text' name='name' placeholder='Your Name' required/>  
//  <input type='text' name='emai' placeholder='Your Email' required/> 
// <textarea name='meassage' id=''  rows='7' placeholder='your maessage'></textarea>
// <button type='submit' className='btn btn-primary'>Send Message</button>
// </form>
// </div>
//   </section>
//   )
// }

// export default Contact




import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';
import { FaHackerrank } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import './contact.css';

function Contact() {
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <a href="freenafrancis200@gmail.com">
              <MdOutlineEmail className="contact_option_icon" />
            </a>
          </article>

          <article className="contact_option">
            <a href="https://github.com/FreenaFrancis" target="_blank" rel="noopener noreferrer">
              <BsGithub className="contact_option_icon" />
            </a>
          </article>

          <article className="contact_option">
            <a href="https://www.linkedin.com/in/freena-francis-/" target="_blank" rel="noopener noreferrer">
              <BsLinkedin className="contact_option_icon" />
            </a>
          </article>

          <article className="contact_option">
            <a href="https://www.hackerrank.com/profile/freenafrancis201" target="_blank" rel="noopener noreferrer">
              <FaHackerrank className="contact_option_icon" />
            </a>
          </article>

          <article className="contact_option">
            <a href="https://leetcode.com/u/FreenaFrancis/" target="_blank" rel="noopener noreferrer">
              <SiLeetcode className="contact_option_icon" />
            </a>
          </article>
        </div>

        <form>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message"></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
