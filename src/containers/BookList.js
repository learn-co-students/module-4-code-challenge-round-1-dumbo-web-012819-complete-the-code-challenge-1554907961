import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {

    bookComponents = () => {
        return this.props.books.map(book => {
            return <Book  handleBookClick={this.props.handleBookClick} book={book}/>
        })
    }

  render() {
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form handleNewBook={this.props.handleNewBook}/>
        <ul>{this.bookComponents()}
            {this.handleNewBook}
        </ul>
      </div>
    );
  }
}

export default BookList;
