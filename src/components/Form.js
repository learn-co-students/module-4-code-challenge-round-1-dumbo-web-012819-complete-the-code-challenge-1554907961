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
    }, () => console.log(this.state))
  }

  resetForm = () => {
    this.setState({
      title: '',
      author: '',
      img: '',
    })
  }

  render() {
    return(
        <form onSubmit={(e) => this.props.handleSubmit(e,this.state, this.resetForm)}>
          <input type='text' name='title' placeholder='Title' value={this.state.title} onChange={this.handleChange} />
          <input type='text' name='author' placeholder='Author' value={this.state.author} onChange={this.handleChange} />
          <input type='text' name='img' placeholder='Image URL' value={this.state.img} onChange={this.handleChange} />
          <button>Add Book</button>
        </form>
    )
  }
}

export default Form;
