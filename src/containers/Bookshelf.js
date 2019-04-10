import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {
    // stuck here also... should be a method that will show the clicked books passed array down
    // to the ul below
    const booksOnShelf = () => {
        props.books.map(book =>
            <Book key={book.id} handleClick={props.handleClick} book={book}/>
        )
    }};
  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{booksOnShelf}</ul>
    </div>
  );


export default Bookshelf;

