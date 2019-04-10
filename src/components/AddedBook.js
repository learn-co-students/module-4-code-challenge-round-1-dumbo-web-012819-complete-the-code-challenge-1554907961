import React from "react";

const AddedBook = props => {
  return (
    <div>
      <h2>{props.book.title}</h2>
      <img onClick={() => props.removeFromShelfClick(props.book)} src={props.book.img} alt={props.book.title}/>
    </div>
  );
};

export default AddedBook;
