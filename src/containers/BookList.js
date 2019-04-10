import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {


  render() {

    const listOfBooks = this.props.books.map(book => {
      return <Book key={book.id} book={book} handleClickAdd={this.props.handleClickAdd}/>
    })

    return (
      <div className="book-list">
        <Form handleSubmit={this.props.handleSubmit} />
        <h1>Book List</h1>
        <ul>{listOfBooks}</ul>
      </div>
    );
  }
}

export default BookList;
