import React from 'react'
import {BsGithub, BsLinkedin, BsMedium} from 'react-icons/bs'
import './home.css'
import Me from '../../assets/me.jpeg'
function Home() {
  return (
    <header id='home'>
<div className="container home_container">
    <h5>Hello, I'm</h5>
    <h1>Freena Francis</h1>
    <h5 className='text-light'>
        Mern Full Stack Developer
    </h5>
    <div className='cta'>
        <a href='' download className='btn'>Download</a>
        <a href='#contact' className='btn btn-primary'>Contact Me</a>
    </div>

    {/* social icons */}
    <div className="home_social">
        <a href='https://www.linkedin.com/in/freena-francis' ><BsLinkedin/></a>
        <a href='https://github.com/FreenaFrancis' ><BsGithub/></a>
        <a href='' ><BsMedium/></a>
    </div>
    <div className="me">
        <img src={Me} alt='freena' style={{width:'25rem',marginRight:'-200rem'}}></img>
    </div>
<a href='/contact' className='scroll_down'>
Scroll Down
</a>

</div>
    </header>
  )
}

export default Home