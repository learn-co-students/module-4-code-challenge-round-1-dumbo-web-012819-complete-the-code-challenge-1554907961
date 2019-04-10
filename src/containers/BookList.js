import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {


  render() {
   const booksToDisplay = this.props.books.map(book => {
     return <Book key={book.id} book={book} location="bookList" handleClick={this.props.handleClick} />
   })

    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form handleSubmit={this.props.handleSubmit}/>
        <ul>{booksToDisplay}</ul>

      </div>
    );
  }
}

export default BookList;
