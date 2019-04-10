import React from "react";

const Book = props => {

  const check = () => {
    if(!!props.shelf) {
      const shelfId = props.shelf.map(book => book.id)
      if(shelfId.includes(props.id)){
        return '✓'
      }
    }
  }

  return (
    <div>
      <h2>{props.title} {check()}</h2>
      <h3>By: <i>{props.author}</i></h3>
      <img src={props.img} alt="" onClick={() => props.handleClick(props)} />
    </div>
  );
};

export default Book;
