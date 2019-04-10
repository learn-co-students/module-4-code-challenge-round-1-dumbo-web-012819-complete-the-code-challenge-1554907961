import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {

  const booksToDisplay = props.books.map(book => {
    return <Book key={book.id} book={book} location="bookShelf" handleClick={props.handleClick} />
  })

  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{booksToDisplay}</ul>
    </div>
  );
};

export default Bookshelf;
