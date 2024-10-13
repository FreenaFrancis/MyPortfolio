
import React from 'react';
import book from '../../assets/book.png';
import real from '../../assets/real.png';
import college from '../../assets/college.png';
import weather from '../../assets/weather.png';
import coffee from '../../assets/coffee.png';
import orphange from '../../assets/orphange.png';
import todo from '../../assets/todo.png';
import ecommerce from '../../assets/ecommerce.png';
import hotel from '../../assets/hotel.png';
import { SiGithub } from 'react-icons/si';
import './project.css';

function Project() {
  return (
    <section id="projects">
      <h5>My Recent Works</h5>
      <h2>Projects</h2>
      <div className='container project_container'>
        
        <article className='project_item'>
          <div className="project_item_image">
            <img src={book} alt='Book Store'/>
          </div>
          <h3>Book Store</h3>
          <small className='text-light'>A MERN web application that allows users to browse, search, and purchase books. Features include user authentication, cart management, and book reviews.</small><br/>
          <a href='https://github.com/FreenaFrancis/finalbookapp.git' className='project_github_btn'><span>Available on</span> <SiGithub size={20} style={{ color: '#181717' }} /></a>
        </article>

        <article className='project_item'>
          <div className="project_item_image">
            <img src={hotel} alt='Hotel Booking'/>
          </div>
          <h3>Hotel Booking</h3>
          <small className='text-light'>A hotel booking system built with the MERN stack. Users can search hotels by location, view amenities, and book rooms online with payment integration.</small><br/>
          <a href='https://github.com/FreenaFrancis/hotelbook.git' className='project_github_btn'><span>Available on</span> <SiGithub size={20} style={{ color: '#181717' }} /></a>
        </article>

        <article className='project_item'>
          <div className="project_item_image">
            <img src={orphange} alt='Hope Heaven'/>
          </div>
          <h3>Hope Heaven</h3>
          <small className='text-light'>An orphanage management system that helps with staff management, orphan registration, donations, and event planning. Built using MERN stack.</small><br/>
          <a href='https://github.com/FreenaFrancis/Hopeheaven.git' className='project_github_btn'><span>Available on</span> <SiGithub size={20} style={{ color: '#181717' }} /></a>
        </article>

        <article className='project_item'>
          <div className="project_item_image">
            <img src={college} alt='College Search'/>
          </div>
          <h3>College Search</h3>
          <small className='text-light'>A platform to help students search for colleges based on their preferences, view detailed profiles, and connect with counselors for guidance.</small><br/>
          <a href='https://github.com/FreenaFrancis/collegeSearch.git' className='project_github_btn'><span>Available on</span> <SiGithub size={20} style={{ color: '#181717' }} /></a>
        </article>

        <article className='project_item'>
          <div className="project_item_image">
            <img src={coffee} alt='Coffee App'/>
          </div>
          <h3>Coffee App</h3>
          <small className='text-light'>An app for coffee lovers to explore different types of coffee, view brewing methods, and find nearby coffee shops. Built using React and Node.js.</small><br/>
          <a href='https://github.com/FreenaFrancis/coffee_ui.git' className='project_github_btn'><span>Available on</span> <SiGithub size={20} style={{ color: '#181717' }} /></a>
        </article>

        <article className='project_item'>
          <div className="project_item_image">
            <img src={ecommerce} alt='E-commerce'/>
          </div>
          <h3>E-commerce</h3>
          <small className='text-light'>An online store platform built in MERN stack where users can browse products, manage their cart, and place orders with payment integration.</small><br></br>
          <a href='https://github.com/FreenaFrancis/E-commerce.git' className='project_github_btn'><span>Available on</span> <SiGithub size={20} style={{ color: '#181717' }} /></a>
        </article>

        <article className='project_item'>
          <div className="project_item_image">
            <img src={real} alt='Real Estate UI'/>
          </div>
          <h3>Real Estate UI</h3>
          <small className='text-light'>A UI design for a real estate website, allowing users to explore properties, view images, and get property details. Built using React for a modern interface.</small><br></br>
          <a href='https://github.com/FreenaFrancis/Reactrealestateui.git' className='project_github_btn'><span>Available on</span> <SiGithub size={20} style={{ color: '#181717' }} /></a>
        </article>

        <article className='project_item'>
          <div className="project_item_image">
            <img src={weather} alt='Weather App'/>
          </div>
          <h3>Weather App</h3>
          <small className='text-light'>A React-based weather app that provides current weather information, forecasts, and weather alerts based on the user's location.</small><br></br>
          <a href='https://github.com/FreenaFrancis/WeatherApp.git' className='project_github_btn'><span>Available on</span> <SiGithub size={20} style={{ color: '#181717' }} /></a>
        </article>

        <article className='project_item'>
          <div className="project_item_image">
            <img src={todo} alt='Todo'/>
          </div>
          <h3>Todo App</h3>
          <small className='text-light'>A simple but effective Todo app built using React, where users can add, update, and delete tasks to manage their daily activities.</small><br></br>
          <a href='https://github.com/FreenaFrancis/merntodo.git' className='project_github_btn'><span>Available on</span> <SiGithub size={20} style={{ color: '#181717' }} /></a>
        </article>
      </div>
    </section>
  );
}

export default Project;
