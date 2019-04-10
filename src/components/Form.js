import React from "react";
import adapter from "./../adapter.js";
class Form extends React.Component {

  state = {
    title: '',
    author: '',
    img: ''
  };


  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    if (this.state.img != '') {
      adapter.post(this.state)
      // set it back to normal
      this.setState({
        title: '',
        author: '',
        img: ''
      })
    }

  }

  render() {
    return <div>

            <form onSubmit={this.handleSubmit}>

                  <input name="title"  placeholder="title" type="text" onChange={this.handleChange} />




                  <input name="author" placeholder="author"  type="text" onChange={this.handleChange} />


                  <input name="img" placeholder="image"  type="text" onChange={this.handleChange} />


                <button type="submit" className="btn btn-warning">Submit</button>

            </form>

    </div>;
  }
}

export default Form;