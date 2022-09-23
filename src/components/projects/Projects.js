import React, { useEffect } from 'react';
import { Octokit } from '@octokit/core';

const Projects = () => {
  const octokit = new Octokit({ auth: process.env.REACT_APP_GITHUB_TOKEN });
  useEffect(() => {
    octokit.request('GET /user/repos', {
      username: 'cwaku',
      type: 'owner',
      sort: 'updated',
      direction: 'desc',
      per_page: 100,
    }).then((response) => {
      console.log(response.data);
    });
  }, []);

  return (
    <div>Projects</div>
  );
};

export default Projects;
