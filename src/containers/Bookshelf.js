import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {
    const addBook = () => {
        return props.shelfBooks.map(book => {
            return <Book handleBookClick={props.handleBookClick} book={book}/>
        })
    }
  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{addBook()}</ul>
    </div>
  );
};

export default Bookshelf;
