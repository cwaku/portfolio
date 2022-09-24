import React, { useEffect } from 'react';
import { Octokit } from '@octokit/core';
import { GITHUB_TOKEN, GITHUB_USERNAME } from '../../apiKeys';

const Projects = () => {
  const octokit = new Octokit({ auth: GITHUB_TOKEN });
  useEffect(() => {
    octokit.request('GET /user/starred', {
      affiliation: 'owner',
      visibility: 'public',
      sort: 'updated',
      direction: 'desc',
      per_page: 100,
    }).then((response) => {
      const myRepositories = response.data.filter((repo) => repo.owner.login === GITHUB_USERNAME);
      console.log(myRepositories);
    });
  }, []);

  return (
    <div>Projects</div>
  );
};

export default Projects;

// export const reposFilter = (repos) => {
//   // search through a normalized data to find repos with owner key
  
