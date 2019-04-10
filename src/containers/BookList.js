import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";


const BookList = props => {

  const bookCards = props.books.map(book => <Book addToShelfClick={props.addToShelfClick} key={book.id} book={book}/>)

  return (
    <div className="book-list">
      <h1>Book List</h1>
      <Form createNewBook={props.createNewBook}/>
      <ul>{bookCards}</ul>
    </div>
  )
}




export default BookList;
