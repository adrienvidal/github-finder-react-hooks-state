import React, { Component } from 'react';

class Search extends Component {
  state = {
    text: '',
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.text);
  };

  render() {
    const { text } = this.state;

    return (
      <div>
        <form action='' className='form' onSubmit={this.onSubmit}>
          <input
            value={text}
            type='text'
            name='text'
            placeholder='Search Users...'
            onChange={this.onChange}
          />
          <input
            type='submit'
            value='submit'
            className='btn btn-dark btn-block'
          />
        </form>
      </div>
    );
  }
}

export default Search;
