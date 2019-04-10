import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {

  createBookCards = () => {
    return this.props.books.map(book => <Book key={book.id} book={book} handleClick={this.props.addToShelf}/>)
  }

  render() {
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form createBook={this.props.createBook}/>
        <ul>{this.createBookCards()}</ul>
      </div>
    );
  }
}

export default BookList;
