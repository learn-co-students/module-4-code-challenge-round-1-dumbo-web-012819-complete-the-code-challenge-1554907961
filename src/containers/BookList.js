import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {


  render() {

    let allBooks = this.props.books.map(book => {
      return <Book key={book.id} book={book} addBookToShelf={this.props.addBookToShelf} onShelf={this.props.onShelf}/>
    })

    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form submitNewBook={this.props.submitNewBook}/>
        <ul>{allBooks}</ul>
      </div>
    );
  }
}

export default BookList;
