import React from 'react';
import '../styles/Projects.css';
import load_builder_img from '../assets/load-builder.png'
import log_watcher_img from '../assets/log-watcher.png'

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
    image: log_watcher_img
  },
  {
    title: 'Text Utilities',
    type: 'Personal',
    tech: 'Node.js, REST APIs, MongoDB, ESK, Redis',
    goal: 'Deliver all the orders on time and optimize overall delivery cost',
    description: 'Deliver all the orders on time and optimize overall delivery cost',
    image: '/path/to/image'
  },
  {
    title: 'Shopping Dashboard App',
    type: 'Personal',
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
                <div className="project-pair">
                  <div className='project-title'>{project.title}</div>
                </div>

                <div className="project-pair">
                  <div className='project-key'>Project type: </div>
                  <div className='project-value'>{project.type}</div>
                </div>

                <div className="project-pair">
                  <div className='project-key'>Tech used:</div>
                  <div className='project-value'>{project.tech}</div>
                </div>

                <div className="project-pair">
                  <div className='project-key'>Goal: </div>
                  <div className='project-value'>{project.goal}</div>
                </div>

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
