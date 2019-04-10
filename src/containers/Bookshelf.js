import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {

  const createBookCards = props.shelf.map(book => <Book key={book.id} book={book} handleClick={props.removeBookFromShelf}/>)

  return (
    <div className="shelf">
      <h1>Book Shelf</h1>
      <ul>{createBookCards}</ul>
    </div>
  );
};

export default Bookshelf;
