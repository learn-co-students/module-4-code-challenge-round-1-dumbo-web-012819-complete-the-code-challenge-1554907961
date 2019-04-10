import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {

  const generateBookComponents = () => {
    return props.bookShelf.map(book => <Book key={book.id} data={book} removeFromBookShelf={props.removeFromBookShelf}/>)
  }

  return (
    <div className="book-shelf">
      <h1>Book Shelf</h1>
      <ul>{generateBookComponents()}</ul>
    </div>
  );
};

export default Bookshelf;
