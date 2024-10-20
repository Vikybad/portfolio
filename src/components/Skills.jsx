import React from 'react';
import '../styles/Skills.css';

const skills = [
  'JavaScript', 'Node.js', "Express.js", 'MongoDB', 'React.js', 'HTML', 
  'CSS', 'Google Sheets', 'Google App Script', 'ESK', 'Redis', 'MySql'
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h1>Skills</h1>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
