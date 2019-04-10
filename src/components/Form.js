import React from "react";

class Form extends React.Component {

  state = {
    title: '',
    author: '',
    img: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div className='formContainer'>
        <h3>Add a Book</h3>
        <form onSubmit={(e) => this.props.handleSubmit(e, this.state)}>
          <label>Title:</label><br/>
          <input type='text' name='title' value={this.state.title} onChange={this.handleChange}/><br/>
          <label>Author:</label><br/>
          <input type='text' name='author' value={this.state.author} onChange={this.handleChange}/><br/>
          <label>Image Url:</label><br/>
          <input type='text' name='img' value={this.state.img} onChange={this.handleChange}/><br/>
          <input type='submit' value='Make this book!'/>
        </form>
      </div>
    )
  }
}

export default Form;
