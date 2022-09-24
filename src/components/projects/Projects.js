import React, { useEffect } from 'react';
import { Octokit } from '@octokit/core';
import { GITHUB_TOKEN, GITHUB_USERNAME } from '../../apiKeys';

import '../../stylesheets/Skills.css';

const Projects = () => {
  const [projects, setProjects] = React.useState([]);

  const octokit = new Octokit({ auth: GITHUB_TOKEN });
  useEffect(() => {
    octokit
      .request('GET /user/starred', {
        affiliation: 'owner',
        visibility: 'public',
        sort: 'updated',
        direction: 'desc',
        per_page: 100,
      })
      .then((response) => {
        const myRepositories = response.data.filter(
          (repo) => repo.owner.login === GITHUB_USERNAME,
        );
        console.log(myRepositories);
        setProjects(myRepositories);
      });
  }, []);

  return (
    <div className="projects__container">
      <h1 className="projects__container__title">Projects</h1>
      <div className="projects__container__projects">
        {projects.map((project) => (
          <div
            className="projects__container__projects__project"
            key={project.id}
          >
            <div className="projects__container__projects__project__image">
              <img
                style={{ width: '100%' }}
                loading="lazy"
                src={project.owner.avatar_url}
                alt="avatar"
              />
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
                <button type="button" className="header-button-see-projects header-button">
                  <a href={project.html_url} target="_blank" rel="noreferrer">
                    Source
                  </a>
                </button>
                {project.homepage && (
                  <button type="button" className="header-button-cv header-button">
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
};

export default Projects;
