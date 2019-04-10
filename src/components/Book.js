import React from "react";

const Book = props => {
  const clickFunction = props.addToBookShelf ? () => props.addToBookShelf(props.data) : () => props.removeFromBookShelf(props.data)
  return (
    <div className="book-card" onClick={clickFunction}>
      <img src={props.data.img} alt={props.data.name} />
      <h2>{props.data.title} </h2>
      <h4>by {props.data.author}</h4>
    </div>
  );
};

export default Book;
