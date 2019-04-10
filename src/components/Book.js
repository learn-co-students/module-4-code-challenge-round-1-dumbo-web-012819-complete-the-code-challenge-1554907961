import React from "react";

const Book = props => {
  
  return (
    <div onClick={(e) => props.handleClick(e, props.book)}>
      <h2>{props.book.title}</h2>
      <img src={props.book.img} />
    </div>
  )

}

export default Book;
