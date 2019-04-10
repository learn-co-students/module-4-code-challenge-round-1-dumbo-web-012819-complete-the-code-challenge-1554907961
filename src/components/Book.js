import React from "react";

const Book = props => {
  return (
    <div onClick={() => props.clickingBookToShelf(props.book)}>
      <h2>{props.book.title}</h2>
      <img src={props.book.img} alt="book" />
    </div>
  );
};

export default Book;
