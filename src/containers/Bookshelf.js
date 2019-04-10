import React from "react";
import AddedBook from "../components/AddedBook";

const Bookshelf = props => {
  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{props.addedBooks.map(book => <AddedBook removeFromShelfClick={props.removeFromShelfClick} key={book.id} book={book}/>)}</ul>
    </div>
  );
};

export default Bookshelf;
