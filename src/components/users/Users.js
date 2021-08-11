import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import GithubContext from '../../context/github/githubContext';

import UserItem from './UserItem';
import Spinner from '../layout/Spinner';

const Users = () => {
  const githubContext = useContext(GithubContext);

  const { loading, userList } = githubContext;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {userList?.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
};

userStyle.proptypes = {
  loading: PropTypes.string,
  userData: PropTypes.array,
};

export default Users;
