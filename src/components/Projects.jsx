import React from 'react';
import '../styles/Projects.css';
import load_builder_img from '../assets/load-builder.png'

const projects = [
  {
    title: 'Load Builder',
    type: 'Official',
    tech: 'Node.js, Express.js, REST APIs, MongoDB, ESK, Redis',
    goal: 'Deliver all the orders on time and optimize overall delivery cost',
    description: 'Deliver all the orders on time and optimize overall delivery cost',
    image: load_builder_img
  },
  {
    title: 'Log Watcher',
    type: 'Official',
    tech: 'Node.js, Express.js, React.js, REST API, fs, streams, lodash, web sockets',
    goal: 'Developer can see the logs of different microservices on a single page',
    description: 'Created file read and render stream using web sockets',
    image: '/path/to/image'
  },
  {
    title: 'Load Builder',
    type: 'Official',
    tech: 'Node.js, REST APIs, MongoDB, ESK, Redis',
    goal: 'Deliver all the orders on time and optimize overall delivery cost',
    description: 'Deliver all the orders on time and optimize overall delivery cost',
    image: '/path/to/image'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h1>Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">

            <div className='project-info'>
              <div>
                <h2 className='project-title'>{project.title}</h2>
                <h5 >Project type: </h5><h5 className='project-type'>{project.type}</h5>
                <h5 className='project-tech'>Tech used:</h5> {project.tech}
                <h4 className='project-goal'>Goal: </h4>{project.goal}
              </div>

              <div className='project-img'>
                <img src={project.image} alt={project.title} />
              </div>

            </div>

          </div>
        ))}

      </div>
    </section>
  );
};

export default Projects;
