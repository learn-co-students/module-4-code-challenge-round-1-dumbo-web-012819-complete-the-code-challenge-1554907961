import React from "react";

const Book = (props) => {
  return (
    <div>
      <h2>{props.book.title}</h2>
      <img id={props.book.id}  alt={props.book.title} src={props.book.img} onClick={ (e) => {props.handleRemove(e)}} />
    </div>
  );
};

export default Book;