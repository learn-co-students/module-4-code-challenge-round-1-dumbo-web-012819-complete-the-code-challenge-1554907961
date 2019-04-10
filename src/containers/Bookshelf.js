import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {
    console.log('inside bookshelf container', props.book)

  const removeBookFromBookShelf = () => {
      if(props.clicked === true) {
          return {display:'none'}
      } else {
          return {display: 'block'}
      }
  }

  return (
    <div>
      <h1>Book Shelf</h1>
      <h2  style={removeBookFromBookShelf()}>{props.book.title}</h2>
      <ul  style={removeBookFromBookShelf()}onClick={() => props.handleClickShelf()}><img alt={props.book.name} src={props.book.img}/></ul>
    </div>
  );
};

export default Bookshelf;
