import React from "react";

class Form extends React.Component {
  state = {
    title: '',
    author: '',
    img: ''
  }

  changeHelper = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    }, () => console.log(this.state))
  }

  render() {
    return (

      <div>
        <h2>Add new book</h2>
        <form onSubmit={this.props.submitNewBook}>
          <input name="title" placeholder="title" value={this.state.title} onChange={this.changeHelper}/>
          <input name="author" placeholder="author" value={this.state.author} onChange={this.changeHelper}/>
          <input name="img" placeholder="image" value={this.state.img} onChange={this.changeHelper}/>
          <input type="submit"/>
        </form>
      </div>

    )

  }
}

export default Form;
