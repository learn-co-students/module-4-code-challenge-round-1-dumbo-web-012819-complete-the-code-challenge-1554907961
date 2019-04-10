import React from "react";

class Form extends React.Component {
  render() {
    return (
        <form onSubmit={(e) => this.props.createBook(e)}>
          <input type="text" name="title" placeholder="title"></input>
          <input type="text" name="author" placeholder="author"></input>
          <input type="text" name="img" placeholder="image"></input>
          <input type="submit"></input>
        </form>
    );
  }
}

export default Form;
