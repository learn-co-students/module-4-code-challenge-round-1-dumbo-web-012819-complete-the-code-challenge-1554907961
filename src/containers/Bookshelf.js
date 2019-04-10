import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {
  const addedBooks = props.bookshelf.map(bookshelf => {
    // console.log(bookshelf.id)
    return <Book {...bookshelf} handleClick={props.handleRemoveClick} key={bookshelf.id}/>
  })
  return (
    <div className="book-shelf">
      <h1>Book Shelf</h1>
      <ul>{ addedBooks }</ul>
    </div>
  );
};

export default Bookshelf;
