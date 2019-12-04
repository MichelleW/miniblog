import React, { Component } from 'react';
import axios from 'axios';

import './MiniBlog.css';

export default class MiniBlog extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      name: '',
      title: '',
      content: '',
      blogPosts: []
    }
  }

  componentDidMount() {
    this.getData()
  }

  getData = () => {
    axios.get(`/api/posts`)
      .then(res => {
        const blogPosts = res.data;
        this.setState({ blogPosts });
      })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let newData = {
      name: this.state.name,
      title: this.state.title,
      content: this.state.content
    }
    axios.post('/api/posts', newData)
    this.clearForm()
    this.getData()
  }

  handleChange = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  }

  displayBlogPosts = () => {
    let { blogPosts } = this.state

    return blogPosts.map((post) => {
      return <div className="post" key={post._id}>
        <h2>{post.title}</h2>
        <h5>Author: {post.name}</h5>
        <p>{post.content}</p>
      </div>
    })
  }

  clearForm = () => {
    document.querySelector(".createNew").reset();
  }

  render() {
    return (
      <div className="MiniBlog">
        <form className="createNew" onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor='title'>Title</label>
            <input
              type='text'
              name='title'
              placeholder='...title for new blog'
              onChange={this.handleChange}
            />

            <label htmlFor="content">Blog Content</label>
            <input type="textarea" name="content" onChange={this.handleChange} />

            <label htmlFor='name'>Author</label>
            <input
              type='text'
              name='name'
              id='name'
              placeholder='...writtend by'
              onChange={this.handleChange}
            />

            <button>Add A New Blog</button>

          </div>
        </form>

        {this.displayBlogPosts()}
      </div>
    );
  }
} 