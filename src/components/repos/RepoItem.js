import React from 'react';
import PropTypes from 'prop-types';

const RepoItem = (props) => {
  const { html_url, name } = props.repo;
  return (
    <div className='card'>
      <a href={html_url}>{name}</a>
    </div>
  );
};

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default RepoItem;
