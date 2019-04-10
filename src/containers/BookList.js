import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

const BookList = (props) => {
  const makeBooks = () => {
    return props.books.map((book) => {
      return <Book book={book} handleClick={props.handleClick} />
    })
  }

  return (
    <div className="book-list">
      <h1>Book List</h1>
      <Form handleSubmit={props.handleSubmit}/>
      <ul>{makeBooks()}</ul>
    </div>
  );
}

export default BookList;
