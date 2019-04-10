import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {
    const makingShelvedBooks = props.booksShelved.map(book => {
      return <Book key={book.id} clickingBookToShelf={props.removingBookFromShelf} book={book} />
    })
  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{makingShelvedBooks}</ul>
    </div>
  );
};

export default Bookshelf;
