import React, { Component } from 'react';
import axios from 'axios';


class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };


  }

  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  handleSubmit = (event) => {
    console.log('handle submit form value', this.state.value)
    event.preventDefault();
    let newData = this.state.value

    axios.post('/api/posts', { value: this.state.value})
      .then((response) => {
        console.log('resp', response);
      }, (error) => {
        console.log('err here', error);
      });

  }

  render() {
    const { value } = this.state
    console.log('current state in form', value)
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default NameForm