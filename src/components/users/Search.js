import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Search extends Component {
  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
  };
  state = {
    text: '',
  };
  onChangeFun = (event) =>
    this.setState({ [event.target.name]: event.target.value });

  onSubmitFun(event) {
    event.preventDefault();
    if (this.state.text === '') {
      this.props.setAlert({ msg: 'Please fill something...', type: 'light' });
    } else {
      this.props.searchUsers(this.state.text);
    }
  }
  render() {
    const { clearUsers, showClear } = this.props;
    return (
      <div>
        <form onSubmit={this.onSubmitFun.bind(this)} className='form'>
          <input
            type='text'
            name='text'
            placeholder='Search Users...'
            value={this.state.text}
            onChange={this.onChangeFun}
          />
          <input
            type='submit'
            value='Search'
            className='btn btn-dark btn-block'
          />
        </form>
        {showClear && (
          <input
            type='button'
            value='Clear'
            className='btn btn-light btn-block'
            onClick={clearUsers}
          />
        )}
      </div>
    );
  }
}

export default Search;
