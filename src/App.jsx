import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home.jsx/Home'
import About from './components/About/About'
import SkillsSection from './components/skillsection/SkillSection'
import ExperienceSection from './components/experience/Experience'
import Project from './components/Projects/Project'
import Contact from './components/Contact/Contact'
import Education from './components/Education/Education'

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <SkillsSection/>
      <ExperienceSection/>
      <Project/>
      <Education/>
      <Contact/>
      
    </div>
  )
}

export default App