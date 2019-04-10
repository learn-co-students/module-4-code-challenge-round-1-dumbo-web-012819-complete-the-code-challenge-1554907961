import React from "react";

class Form extends React.Component {

  state={
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
      <form onSubmit={(e) => this.props.handleSub(e, this.state)}>
        <input type='text' name='title' onChange={this.handleChange} value={this.state.title} placeholder='Title'></input>
        <input type='text' name='author' onChange={this.handleChange} value={this.state.author} placeholder='Author'></input>
        <input type='text' name='img' onChange={this.handleChange} value={this.state.img} placeholder='Img'></input>
        <input type='Submit'></input>
      </form>

    )
  }

}

export default Form;
