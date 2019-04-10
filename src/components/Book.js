import React from "react";

// book setup ... book card
const Book = props => {
  return (
    <div onClick={()=> props.handleClick(props.book)}>
      <h2>{props.book.title}</h2>
      <img src={props.book.img} alt={props.book.name} onClick={()=>{props.handleClick(props.book.id)}}/>
    </div>
  );
};

// each book should show the name and image.. when you click on a book it will ADD to the card... handle click function
// that was passed down from App... uses the ADD version... uses the id of
// the book object that was clicked... sent back up to APP to determint if it should
// be shown or removed
export default Book;
