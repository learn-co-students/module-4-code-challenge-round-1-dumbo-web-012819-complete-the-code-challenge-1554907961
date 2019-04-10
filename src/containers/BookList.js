import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {

  generateBookComponents = () => {
    return this.props.bookList.map(book => <Book key={book.id} data={book} addToBookShelf={this.props.addToBookShelf}/>)
  }

  render() {
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form addNewBook={this.props.addNewBook}/>
        <ul>{this.generateBookComponents()}</ul>
      </div>
    );
  }
}

export default BookList;
