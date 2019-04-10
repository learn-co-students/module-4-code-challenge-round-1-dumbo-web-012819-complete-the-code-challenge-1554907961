import React, {
  Component
} from "react";
import Book from "../components/Book";
import Form from "../components/Form";

const BookList = (props) => {




  const allBooks = props.books.map(book => {
    return <li><Book key={book.id} book={book} handleClick={props.handleClick} /></li>
  })


  return (
    <div className="book-list ">
        <h1>Book List</h1>
        <Form handleSubmit={props.handleSubmit}/>
        <ul>{allBooks}</ul>
      </div>
  );

}

export default BookList;