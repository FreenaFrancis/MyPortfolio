import React from 'react';
import './ExperienceSection.css';

const ExperienceSection = () => {
  return (
    <div className="experience-section">
      <h2>My Experience</h2>

      {/* MERN Developer Experience */}
      <div className="experience-card">
        <div className="experience-header">
          <h3>MERN Stack Developer</h3>
          <h4>Softroniics</h4>
          <p>July 2023 - Present</p>
        </div>
        <ul>
          <li>Design, develop, and deploy scalable web applications using MongoDB, Express.js, React.js, and Node.js (MERN).</li>
          <li>Collaborate with frontend and backend teams to ensure seamless integration and optimized performance.</li>
          <li>Implement user interface components with React, focusing on responsive design and best practices.</li>
          <li>Conduct code reviews, troubleshoot issues, and participate in Continuous Integration/Continuous Deployment (CI/CD) processes.</li>
          <li>Build RESTful APIs, integrate with third-party services, and optimize database queries in MongoDB.</li>
          <li>Train and mentor interns on MERN stack technologies, guiding them through projects and evaluations.</li>
        </ul>
      </div>

      {/* MERN Stack Intern Experience */}
      <div className="experience-card">
        <div className="experience-header">
          <h3>MERN Stack Intern</h3>
          <h4>Softroniics</h4>
          <p>Feb 2023 - July 2023</p>
        </div>
        <ul>
          <li>Developed and maintained full-stack web applications using the MERN stack, focusing on creating reusable components.</li>
          <li>Worked on implementing authentication, state management with Redux, and dynamic UI elements in React.js.</li>
          <li>Assisted in the integration of APIs with backend services built in Express.js and Node.js.</li>
          <li>Participated in weekly code reviews and collaborated with senior developers on optimizing app performance.</li>
          <li>Contributed to the setup of MongoDB databases, including schema design and indexing for optimal data retrieval.</li>
        </ul>
      </div>
    </div>
  );
};

export default ExperienceSection;
