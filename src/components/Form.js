import React from "react";

class Form extends React.Component {

  state = {
    title: "",
    author: "",
    img: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    },() => console.log(this.state))
  }

  render() {
    return <h1>
               <form onSubmit={(event) => this.props.handleSubmit(event, this.state)}>
                  <label>
                    Title:
                    <input onChange={this.handleChange}type="text" name="title" value={this.state.title}/>
                  </label>
                  <label>
                    Author:
                    <input onChange={this.handleChange} type="text" name="author" value={this.state.author}/>
                  </label>
                  <label>
                    Img:
                    <input onChange={this.handleChange} type="text" name="img" value={this.state.img}/>
                  </label>
                  <input type="submit" value="Submit" />
                </form>
            </h1>;
  }
}

export default Form;
