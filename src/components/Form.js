import React from "react";

class Form extends React.Component {
  state = {
    title: '',
    author: '',
    img: ''
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  render() {
    return (
      <div>
        <h1>ADD BOOK FORM:</h1>
        <form onSubmit={(e, book) => this.props.handleSubmit(e, this.state)} >
          <input type="text" onChange={this.handleChange} name="title" value={this.state.title} placeholder="Title"/>
          <input type="text" onChange={this.handleChange} name="img" value={this.state.img} placeholder="Book Image"/>
          <input type="submit" value="Add Book" />
        </form>
      </div>
    )
  }
}

export default Form;
