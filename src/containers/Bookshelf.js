import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {
  const setBooks = props.books.map(book => <Book key={book.id} book={book} handleClick={props.handleRemoveBook}/>)
  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{setBooks}</ul>
    </div>
  );
};

export default Bookshelf;
