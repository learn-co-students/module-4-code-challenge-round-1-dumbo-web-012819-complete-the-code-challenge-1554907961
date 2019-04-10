import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {
  makeBooks = () => {
    return this.props.books.map((book) => {
      return <Book book={book} handleClick={this.props.handleClick} />
    })
  }

  render() {
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form handleSubmit={this.props.handleSubmit}/>
        <ul>{this.makeBooks()}</ul>
      </div>
    );
  }
}

export default BookList;
