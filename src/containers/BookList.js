import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {

  render() {

    const makingBook = this.props.books.map(book => {
      return <Book key={book.id} clickingBookToShelf={this.props.clickingBookToShelf} book={book}/>
    })

    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form handleSubmit={this.props.handleSubmit}/>
        <ul>{makingBook}</ul>
      </div>
    );
  }
}

export default BookList;
