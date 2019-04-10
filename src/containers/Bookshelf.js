import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {

  const makeBooks = () => {
    return props.books.map((book) => {
      return <Book book={book} handleClick={props.handleClick}/>
    })
  }

  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{makeBooks()}</ul>
    </div>
  );
};

export default Bookshelf;
