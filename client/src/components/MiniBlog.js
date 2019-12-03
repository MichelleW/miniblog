import React, { Component } from 'react';
import axios from 'axios';

class MiniBlog extends Component {

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
    let more = [{
      "_id": "5dd5f221bc72fc271113e174",
      "name": "Mish",
      "title": "A day in Mountain View",
      "date": "2019-11-21T02:10:41.190Z",
      "__v": 0
    },
      {
        "_id": "5dd5f10dd9f47a2035fd9100",
        "name": "hey",
        "title": "testing",
        "date": "2019-11-21T02:06:05.836Z",
        "__v": 0
      },
      {
        "_id": "5dd5a9aab12199c9cb3222d8",
        "name": "Poke lunch",
        "date": "2019-11-20T21:01:30.167Z",
        "__v": 0
      },]
    if(blogPosts.length === 0){
      this.setState({blogPosts: [...more]})
    }
    return blogPosts.map((post) => {
      return <div className="post" key={post._id}>
        <h2>Blog Title: {post.title}</h2>
        <h5>Author: {post.name}</h5>
        <p>Blog conent goes here {post.content}</p>
        <small>Created By: {post.date}</small>
        <p><small>{post._id}</small></p>
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
              id='title'
              placeholder='...title for new blog'
              onChange={this.handleChange}
            />

            <label htmlFor="content">Blog Content</label>
            <input type="textarea" name="content" id="content" onChange={this.handleChange} />

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

export default MiniBlog;