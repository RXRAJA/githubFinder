import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
  const [text, setText] = useState('');
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const onChangeFun = (event) => setText(event.target.value);

  const onSubmitFun = (event) => {
    event.preventDefault();
    if (text === '') {
      alertContext.setAlertStatement('Please fill something...', 'light');
    } else {
      githubContext.searchUsers(text);
    }
  };
  return (
    <div>
      <form onSubmit={onSubmitFun} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Search Users...'
          value={text}
          onChange={onChangeFun}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
      {githubContext.userList.length > 0 && (
        <input
          type='button'
          value='Clear'
          className='btn btn-light btn-block'
          onClick={githubContext.clearUsers}
        />
      )}
    </div>
  );
};

export default Search;
