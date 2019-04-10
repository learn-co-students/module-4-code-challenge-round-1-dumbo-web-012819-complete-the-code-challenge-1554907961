import React from "react";

class Form extends React.Component {
  state = {
    title: '',
    author: '',
    img: '',
  }

  controlForm = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    }, () => console.log(this.state) )
  }


  render() {
    return (
      <form onSubmit={(event) => this.props.addNewBook(this.state, event) } >
        <h1>Add New Book</h1>
        <br />
        <br />
        <input name="title" type="text" value={this.state.title} onChange={this.controlForm} placeholder="Title"/>
        <br />
        <br />
        <input name="author" type="text" value={this.state.author} onChange={this.controlForm} placeholder="Author"/>
        <br />
        <br />
        <input name="img" type="text" value={this.state.img} onChange={this.controlForm} placeholder="Image URL"/>
        <br />
        <input type="submit" id="submit-button" value="Add Book"/>
      </form>
    )
  }
}

export default Form;
