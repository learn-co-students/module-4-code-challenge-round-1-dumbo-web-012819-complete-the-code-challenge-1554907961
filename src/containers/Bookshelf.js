import React from "react";
import Book from "../components/BookAlt";

const Bookshelf = (props) => {

  const allBooks = props.books.map(book => {
    return <li><Book key={book.id} book={book} handleRemove={props.handleRemove} /></li>
  })

  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{allBooks}</ul>
    </div>
  );
};

export default Bookshelf;