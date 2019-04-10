import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {

  setAllBooks = () => {
    return this.props.books.map(book => <Book key={book.id} book={book} handleClick={this.props.handleAddBook}/>)
  }

  render() {
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form handleSub={this.props.handleSub}/>
        <ul>{this.setAllBooks()}</ul>
      </div>
    );
  }
  
}

export default BookList;
