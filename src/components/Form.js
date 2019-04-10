import React from "react";

class Form extends React.Component {

  state = {
    title: '',
    author: '',
    img: ''
  }

  onChangeState = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })

  }

  render() {
    return (
      <div>
        <h2>Add New Book</h2>
        <form onSubmit={(e) => this.props.createNewBook(e, this.state)}>
          <input onChange={(e) => this.onChangeState(e)} type="text" name="title" value={this.state.title} placeholder="title" />
          <input onChange={(e) => this.onChangeState(e)} type="text" name="author" value={this.state.author} placeholder="author" />
          <input onChange={(e) => this.onChangeState(e)} type="text" name="img" value={this.state.img} placeholder="img_url" />
          <input type="submit" name="Submit" />
        </form>
      </div>
    )
  }
}

export default Form;
