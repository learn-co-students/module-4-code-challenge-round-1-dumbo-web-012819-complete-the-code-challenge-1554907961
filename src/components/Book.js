import React from "react";

const Book = props => {
  return (
    <div className="book">
      <h2>{props.book.title}</h2>
      <img src={props.book.img} alt={props.book.title} onClick={() => props.handleClick(props.book)}/>
    </div>
  );
};

export default Book;
