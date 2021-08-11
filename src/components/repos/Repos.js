import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import GithubContext from '../../context/github/githubContext';

import RepoItem from './RepoItem';

const Repos = () => {
  const githubContext = useContext(GithubContext);

  return githubContext.repos.map((repo) => (
    <RepoItem key={repo.id} repo={repo} />
  ));
};

Repos.proptypes = {
  repoList: PropTypes.func.isRequired,
};

export default Repos;
