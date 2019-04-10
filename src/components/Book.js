import React from "react";

const Book = props => {
  return (
    <div>
      <h2>{props.thisBook.title}</h2>
      <img src={props.thisBook.img} onClick={e => props.addBookToShelf(props.thisBook)} />
    </div>
  );
};

export default Book;
