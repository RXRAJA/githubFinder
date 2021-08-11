import React, { Fragment, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import GithubContext from '../../context/github/githubContext';

import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';

const UserDetails = ({ match }) => {
  const githubContext = useContext(GithubContext);
  const { user, loading, getUserDetails, getUserRepos } = githubContext;
  const {
    avatar_url,
    name,
    followers,
    following,
    hireable,
    bio,
    blog,
    company,
    location,
    html_url,
    public_repos,
    public_gists,
    login,
  } = user;

  useEffect(() => {
    getUserDetails(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <Fragment>
      <Link to='/' className='btn btn-light'>
        Back to search
      </Link>
      Hireable :{' '}
      {hireable ? (
        <i className='fas fa-check text-success'></i>
      ) : (
        <i className='fas fa-times-circle text-danger'></i>
      )}
      <div className='card grid-2'>
        <div className='all-center'>
          <img
            src={avatar_url}
            alt={login}
            className='round-img'
            style={{ width: '150px' }}
          />
          <h1>{name}</h1>
          <p>Location: {location}</p>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </Fragment>
          )}
          <a
            href={html_url}
            className='btn btn-dark my-1'
            target='_blank'
            rel='noreferrer'
          >
            visit github profile
          </a>
          <ul>
            <li>
              {login && (
                <Fragment>
                  <strong>Username: </strong>
                  {login}
                </Fragment>
              )}
            </li>
            <li>
              {company && (
                <Fragment>
                  <strong>Company: </strong>
                  {company}
                </Fragment>
              )}
            </li>
            <li>
              {blog && (
                <Fragment>
                  <strong>Website: </strong>
                  <a href={blog} target='_blank' rel='noreferrer'>
                    {blog}
                  </a>
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className='card text-center'>
        <div className='badge badge-primary'>Followers: {followers}</div>
        <div className='badge badge-success'>Following: {following}</div>
        <div className='badge badge-light'>Public Repos: {public_repos}</div>
        <div className='badge badge-dark'>Public Gists: {public_gists}</div>
      </div>
      <Repos />
    </Fragment>
  );
};

export default UserDetails;
