import React from "react";

class Form extends React.Component {
  state= {
    title:"",
    author:"",
    img:"",
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  render() {
    return <div>
                <h1>Create A Book</h1>
                <form>
                <input value={this.state.title} onChange={e => {this.handleChange(e)}} placeholder="Title" name="title"/>
                <input value={this.state.author} onChange={this.handleChange} placeholder="Author" name="author"/>
                <input value={this.state.img} onChange={this.handleChange} placeholder="Image Link" name="img"/>
                </form>
                <input type="submit" onClick={e => {this.props.createNewBook(this.state)}}/>
            </div>
      ;
  }
}

export default Form;
