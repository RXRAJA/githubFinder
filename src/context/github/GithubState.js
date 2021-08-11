import React, { useReducer } from 'react';
import axios from 'axios';

import githubContext from './githubContext';
import githubReducer from './githubReducer';
import {
  SEARCH_USERS,
  GET_USER,
  CLEAR_USERS,
  GET_REPOS,
  SET_LOADING,
} from '../types';

const GithubState = (props) => {
  const initialState = {
    userList: [],
    user: {},
    repos: [],
    loading: false,
    alert: null,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  //Search Users
  const searchUsers = async (userName) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/search/users?q=${userName}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    dispatch({ type: SEARCH_USERS, payload: res.data.items });
  };

  //Get User
  const getUserDetails = async (userName) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/users/${userName}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    dispatch({ type: GET_USER, payload: res.data });
  };

  //Get Repos
  const getUserRepos = async (userName) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/users/${userName}/repos?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    dispatch({ type: GET_REPOS, payload: res.data });
  };

  //Clear Users
  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  //Set Loading
  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  return (
    <githubContext.Provider
      value={{
        userList: state.userList,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUserDetails,
        getUserRepos,
      }}
    >
      {props.children}
    </githubContext.Provider>
  );
};
export default GithubState;
