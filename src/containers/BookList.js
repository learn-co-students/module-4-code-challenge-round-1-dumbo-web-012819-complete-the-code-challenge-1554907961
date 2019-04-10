import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {
    

    booksData = () => {
        return this.props.books.map(book => <Book book={book} handleClick={this.props.handleClick} />)
    }
  render() {
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form addBook={this.props.addBook} />
        <ul>{this.booksData()}</ul>
      </div>
    );
  }
}

export default BookList;
