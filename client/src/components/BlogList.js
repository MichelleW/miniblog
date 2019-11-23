
import React, { Component } from 'react';

class BlogList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      blogPosts: []
    }
  }
  
  componentDidMount() {

    fetch('/api/posts')
      .then(response => response.json())
      .then(blogPosts => { 
        this.setState({ blogPosts })})

  }
 

  render() { 
    const { blogPosts} = this.state
    return (
      <div>
        {this.state.blogPosts.map((post) => {
          return <div className="post" key={post._id}> 
            <h2>Blog Title: {post.title}</h2> 
            <h5>Author: {post.name}</h5>
            <small>Created By: {post.date}</small>
          </div>
        })}
      </div>
    );
  }
}

export default BlogList;