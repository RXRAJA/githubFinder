import React from 'react';
import RepoItem from './RepoItem';
import PropTypes from 'prop-types';

const Repos = (props) => {
  return props.repoList.map((repo) => <RepoItem key={repo.id} repo={repo} />);
};

Repos.proptypes = {
  repoList: PropTypes.func.isRequired,
};

export default Repos;
