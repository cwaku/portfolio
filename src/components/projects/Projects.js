/* eslint-disable react/prop-types */

import React from 'react';

import '../../stylesheets/Skills.css';
import { projectImages } from '../../data/images';

// eslint-disable-next-line react/prop-types
const Projects = ({ projects }) => (
  <div className="projects__container" id="projects">
    <h1 className="projects__container__title">Projects</h1>
    <div className="projects__container__projects">
      {projects.map((project) => (
        <div
          className="projects__container__projects__project"
          key={project.id}
        >
          <div className="projects__container__projects__project__image">
            {projectImages
              .filter((image) => image.name === project.name)
              .map((image) => (
                <img
                  style={{ width: '100%' }}
                  loading="lazy"
                  src={image.image}
                  key={image.id}
                  alt={project.name}
                />
              ))}
          </div>
          <div className="projects__container__projects__project__description">
            <div>
              <h2 className="projects__container__projects__project__description__title">
                {project.name}
              </h2>
              <p className="projects__container__projects__project__description__text">
                {project.description}
              </p>
            </div>
            <div className="projects__container__projects__project__description__links">
              <button
                type="button"
                className="header-button-see-projects header-button"
              >
                <a href={project.html_url} target="_blank" rel="noreferrer">
                  Source
                </a>
              </button>
              {project.homepage && (
                <button
                  type="button"
                  className="header-button-cv header-button"
                >
                  <a href={project.homepage} target="_blank" rel="noreferrer">
                    Live
                  </a>
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Projects;
