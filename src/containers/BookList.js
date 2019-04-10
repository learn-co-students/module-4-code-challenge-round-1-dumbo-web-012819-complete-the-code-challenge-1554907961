import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {
  render() {
    const booksCard = this.props.books.map(book =>{
      return <Book thisBook={book} addBookToShelf={this.props.addBookToShelf} />
    })

    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form createNewBook={this.props.createNewBook}/>
        <ul>{booksCard}</ul>
      </div>
    );
  }
}

export default BookList;
