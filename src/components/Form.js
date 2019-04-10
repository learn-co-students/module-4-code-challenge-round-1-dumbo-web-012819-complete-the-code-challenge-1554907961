import React from "react";

class Form extends React.Component {

  state = {
    title: '',
    img: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    }, console.log(this.state))
  }

  render() {
    return <form onSubmit={(e) => this.props.handleSubmit(e, this.state)}>
      <input onChange={this.handleChange} type="text" name="title" placeholder="Title" />
      <br/>
      <input onChange={this.handleChange} type="text" name="img" placeholder="Image" />
      <br/>
      <button type="submit">Submit</button>
    </form>
  }
}

export default Form;
