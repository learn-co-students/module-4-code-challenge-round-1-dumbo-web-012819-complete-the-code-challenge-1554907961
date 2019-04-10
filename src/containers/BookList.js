import React from "react";
import Book from "../components/Book";
import Form from "../components/Form";

const BookList = (props) => {

  // state = {
  //   books: []
  // }

    const loadBookCards = props.books.map(books => {
      return <Book {...books} handleClick={props.handleClick} key={books.id}/>
    })

    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form handleSubmit={props.handleSubmit}/>
        <ul>{ loadBookCards }</ul>
      </div>
    );

}

export default BookList;
