import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import axios from 'axios';

class CreateNewPost extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      name: '',
      title: ''
    }
  }

  // componentDidMount() {
  //   axios.get('/api/posts')
  //     .then((response) => { 
  //       this.setState({ data: response.data }); 
  //     }); 
  // }

  onChange = (e) => {
    this.setState({ [e.target.value]: e.target.value })
  }

  onSubmit = (e) => {
    e.preventDefault();
    // let newData = this.state
    console.log('newData', e.target.name, 'title', e.target.title)
    const newItem = {
      name: e.target.value,
      title: e.target.value
    };
    console.log('clicked', newItem)
    // axios.post('/api/posts', newItem)
    //   .then((response) => {
    //     console.log('resp',response);
    //   }, (error) => {
    //     console.log('err here',error);
    //   });
  }

  mySubmitHandler = (event) => {
    event.preventDefault();
    let newData = {
      name: this.state.name,
      title: this.state.title
    }
    console.log('submitting', newData)
    axios.post('/api/posts', newData)
      .then((response) => {
        console.log('resp', response);
      }, (error) => {
        console.log('err here', error);
      });
  }

  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  }

  render() {
    console.log('current state', this.state)

    return (
      <div className="createNewPost">
        <form onSubmit={this.mySubmitHandler}>
          <h1>Hello {this.state.username}</h1>
          <p>Enter your name, and submit:</p>
          <input
            type='text'
            name='name'
            onChange={this.myChangeHandler}
          />
          <input
            type='text'
            name='title'
            onChange={this.myChangeHandler}
          />
          <input
            type='submit'
          />
        </form>

        <Form onSubmit={this.myChangeHandler}>
          <FormGroup>
            <Label for='name'>Author</Label>
            <Input
              type='text'
              name='name'
              id='name'
              placeholder='...new blog'
              author={this.state.name}
              onChange={this.onChange}
            />
            <Label for='title'>Title</Label>
            <Input
              type='text'
              name='title'
              id='title'
              blogtitle={this.state.title}
              placeholder='title for new blog'
              onChange={this.onChange}
            />
            <Button color='dark' style={{ marginTop: '2rem' }} block>
              Add New Blog Post
                </Button>
          </FormGroup>
        </Form>


      </div>
    );
  }
}

export default CreateNewPost;