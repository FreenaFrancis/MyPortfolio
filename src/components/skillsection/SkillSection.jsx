// import React from 'react';
// import { FaAndroid, FaApple, FaDesktop, FaGlobe, FaReact, FaNodeJs, FaCss3, FaHtml5, FaJsSquare } from 'react-icons/fa';
// import { SiExpress, SiMongodb, SiTailwindcss, SiFirebase, SiBootstrap, SiGithub, SiFigma, SiMysql, SiPostman } from 'react-icons/si';
// import './SkillsSection.css';

// const SkillsSection = () => {
//   return (
//     <div className="skills-section">
//       <h2>What I Can Do</h2>
//       <div className="skills-grid">
//         <div className="skill-category">
//           <div className="skill-item">
//           <div className="skill-icon">
//             <FaReact className="icon react-icon" />
//           </div>
//           <p>MERN Stack Developer</p>
//           </div>
//           <div className="skill-item">
//           <div className="skill-icon">
//             <FaNodeJs className="icon node-icon" />
//           </div>
//           <p>Backend Developer</p>
//           </div>
//         </div>
//         <div className="skill-category">
//           <div className="skill-item">
//             <FaGlobe size={30} />
//             <span>Web Dev</span>
//           </div>
//           <div className="skill-item">
//             <FaDesktop size={30} />
//             <span>Desktop Dev</span>
//           </div>
//         </div>
//       </div>

//       <div className="tech-grid">
//         <div className="tech-item"><FaReact size={30} /> React</div>
//         <div className="tech-item"><SiExpress size={30} /> Express</div>
//         <div className="tech-item"><FaNodeJs size={30} /> Node.js</div>
//         <div className="tech-item"><SiMongodb size={30} /> MongoDB</div>
//         <div className="tech-item"><FaHtml5 size={30} /> HTML5</div>
//         <div className="tech-item"><FaCss3 size={30} /> CSS3</div>
//         <div className="tech-item"><FaJsSquare size={30} /> JavaScript</div>
//         <div className="tech-item"><SiTailwindcss size={30} /> Tailwind CSS</div>
//         <div className="tech-item"><SiFirebase size={30} /> Firebase</div>
//         <div className="tech-item"><SiBootstrap size={30} /> Bootstrap</div>
//         <div className="tech-item"><SiGithub size={30} /> GitHub</div>
//         <div className="tech-item"><SiFigma size={30} /> Figma</div>
//         <div className="tech-item"><SiMysql size={30} /> MySQL</div>
//         <div className="tech-item"><SiPostman size={30} /> REST API</div>
//       </div>
//     </div>
//   );
// };

// export default SkillsSection;


import React from 'react';
import { FaAndroid, FaApple, FaDesktop, FaGlobe, FaReact, FaNodeJs, FaCss3, FaHtml5, FaJsSquare } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiTailwindcss, SiFirebase, SiBootstrap, SiGithub, SiFigma, SiMysql, SiPostman } from 'react-icons/si';
import './SkillsSection.css';

const SkillsSection = () => {
  return (
    <div className="skills-section">
      <h2 >What I Can Do</h2>
      
      {/* Skill Categories Section */}
      <div className="skills-grid">
        <div className="skill-category">
          <div className="skill-item">
            <div className="skill-icon">
              <FaReact className="icon react-icon" style={{ color: '#61DBFB' }} /> {/* React Color */}
            </div>
            <p>MERN Stack Developer</p>
          </div>
          <div className="skill-item">
            <div className="skill-icon">
              <FaNodeJs className="icon node-icon" style={{ color: '#68A063' }} /> {/* Node.js Color */}
            </div>
            <p>Backend Developer</p>
          </div>
        </div>
        
        <div className="skill-category">
          <div className="skill-item">
            <FaGlobe size={30} style={{ color: '#ffffff' }} />
            <span>Web Dev</span>
          </div>
          <div className="skill-item">
            <FaDesktop size={30} style={{ color: '#ffffff' }} />
            <span>Desktop Dev</span>
          </div>
        </div>
      </div>

      {/* Technologies Section */}
      <div className="tech-grid">
        <div className="tech-item">
          <FaReact size={30} style={{ color: '#61DBFB' }} /> React
        </div>
        <div className="tech-item">
          <SiExpress size={30} style={{ color: '#ffffff' }} /> Express
        </div>
        <div className="tech-item">
          <FaNodeJs size={30} style={{ color: '#68A063' }} /> Node.js
        </div>
        <div className="tech-item">
          <SiMongodb size={30} style={{ color: '#4DB33D' }} /> MongoDB
        </div>
        <div className="tech-item">
          <FaHtml5 size={30} style={{ color: '#E34C26' }} /> HTML5
        </div>
        <div className="tech-item">
          <FaCss3 size={30} style={{ color: '#1572B6' }} /> CSS3
        </div>
        <div className="tech-item">
          <FaJsSquare size={30} style={{ color: '#F7DF1E' }} /> JavaScript
        </div>
        <div className="tech-item">
          <SiTailwindcss size={30} style={{ color: '#38B2AC' }} /> Tailwind CSS
        </div>
        <div className="tech-item">
          <SiFirebase size={30} style={{ color: '#FFCA28' }} /> Firebase
        </div>
        <div className="tech-item">
          <SiBootstrap size={30} style={{ color: '#7952B3' }} /> Bootstrap
        </div>
        <div className="tech-item">
          <SiGithub size={30} style={{ color: '#181717' }} /> GitHub
        </div>
        <div className="tech-item">
          <SiFigma size={30} style={{ color: '#F24E1E' }} /> Figma
        </div>
        <div className="tech-item">
          <SiMysql size={30} style={{ color: '#00758F' }} /> MySQL
        </div>
        <div className="tech-item">
          <SiPostman size={30} style={{ color: '#FF6C37' }} /> REST API
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
