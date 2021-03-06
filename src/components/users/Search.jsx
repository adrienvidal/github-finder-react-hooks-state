import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ searchUsers, showAlert, showClear, clearUsers }) => {
  const [text, setText] = useState('');

  const onChange = (e) => setText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();

    if (text === '') {
      showAlert('Please enter something', 'light');
    } else {
      searchUsers(text);
      setText('');
    }
  };

  return (
    <div>
      <form action='' className='form' onSubmit={onSubmit}>
        <input
          value={text}
          type='text'
          name='text'
          placeholder='Search Users...'
          onChange={onChange}
        />
        <input
          type='submit'
          value='submit'
          className='btn btn-dark btn-block'
        />
      </form>

      {showClear && (
        <button className='btn btn-light btn-block' onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  showAlert: PropTypes.func.isRequired,
};

export default Search;
