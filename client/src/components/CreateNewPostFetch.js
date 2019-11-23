import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';

import axios from 'axios';

class CreateNewPost extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      data: [],
      name: ''
    }
  }
  componentDidMount() {
    axios
  }
  //  createNewPost (){ 
  //    fetch('/api/',post)
  //      .then(response => response.json())
  //      .then(blogPosts => {
  //        this.setState({ blogPosts })
  //      })


  //  }


  handleSubmit = (e) => {
    e.preventDefault();
    console.log('form val', e.target.value)

    // fetch('/', {
    //   method: 'POST',
    //   "Access-Control-Allow-Origin": "*",
    //   body: JSON.stringify(databody),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    // }).then(response => response.json())
    //   .then(blogPosts => {
    //      this.setState({ blogPosts })
    //    })

  }
  onChange = (e) => {
    this.setState({ [e.target.value]: e.target.value })
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log('onSubmit ', e.target.value)


  }



  render() {
    console.log('current state', this.state)

    return (
      <div className="createNewPost">
        <div style={{ padding: '10px' }}>
          <input
            type="text"
            onChange={(e) => this.setState({ message: e.target.value })}
            placeholder="add something in the database"
            style={{ width: '200px' }}
          />
          <button onClick={() => this.putDataToDB(this.state.message)}>
            ADD
          </button>
        </div>

        <Form onSubmit={this.onSubmit}>
          <FormGroup>
            <label html="item">Item</label>
            <Input
              type="text"
              name="title"
              id="item"
              placeholder="...add new blog"
              onChange={this.onChange}
            />
            <Button color="dark">
              Add New Blog
          </Button>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default CreateNewPost;