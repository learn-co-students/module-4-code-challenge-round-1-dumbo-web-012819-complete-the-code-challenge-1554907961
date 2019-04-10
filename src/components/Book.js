import React from "react";

const Book = props => {
  return (
    <div onClick={props.handleBookShelfClick}>
      <h2>{props.book.props.book.title}</h2>
      <img src={props.book.props.book.img} alt={props.book.props.book.title}></img>

    </div>
  );
};

export default Book;
