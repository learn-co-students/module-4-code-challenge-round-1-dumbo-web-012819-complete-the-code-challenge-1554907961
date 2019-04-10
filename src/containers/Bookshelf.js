import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {
  const booksCard = props.books.map(book =>{
    return <Book thisBook={book} />
  })
  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{booksCard}</ul>
    </div>
  );
};

export default Bookshelf;
