import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";


// made into a functional component because it doesn't change state
// map over the list of books... for each book make a book card (component called book)
// pass down the key, each book object, and the function called handle click established in App
const BookList =(props) => {
    const booksListed = props.books.map(book => <Book key={book.id} handleClick={props.handleClick} book={book} />)
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form />
        <ul>{booksListed}</ul>
      </div>
    );
  };


export default BookList;
