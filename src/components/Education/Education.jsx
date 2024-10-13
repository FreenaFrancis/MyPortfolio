import React from 'react';
import './education.css'; // Import the CSS file for styling

const Education = () => {
  const educationDetails = [
    {
      degree: 'Master of Computer Science',
      level: 'MCA • Post Graduation',
      duration: '2021 - 2023',
      university: 'Bharathiar University',
      location: 'The Nilgiris, TamilNadu, India'
    
    },{
      degree: 'Bachelor of Computer Applications',
      level: 'BCA • Graduation',
      duration: '2018 - 2021',
      university:'Bharathiar University',
      location: 'The Nilgiris, TamilNadu, India'
    }
  ];

  return (
    <section id="education">
      <h2>My Education</h2>
      <div className="education_container">
        {educationDetails.map((edu, index) => (
          <div key={index} className="education_card">
            <div className="card_header">
              <h3>{edu.degree}</h3>
              <h4>{edu.level}</h4>
            </div>
            <div className="card_info">
              <p><span role="img" aria-label="calendar">📅</span> {edu.duration}</p>
              <p><span role="img" aria-label="location">📍</span> {edu.university}, {edu.location}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
