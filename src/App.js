import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

    state = {
      books: [],
      shelvedBooks: []
    }

    componentDidMount(){
      fetch('http://localhost:3005/books')
      .then(res => res.json())
      .then(booksJSON => {
        this.setState({
          books: booksJSON
        })
      })
    }

    clickingBookToShelf = (book) => {
      const copy = [...this.state.shelvedBooks]
      const newArray = [...copy, book]
      this.setState({
        shelvedBooks: newArray
      })

    }

    removingBookFromShelf = (book) => {
      const bookArray = this.state.shelvedBooks.filter(bookArray => bookArray.id !== book.id)
      this.setState({
        shelvedBooks: bookArray
      })
    }

    handleSubmit = (event, newbook) => {
      event.preventDefault()
      const copy = [...this.state.books]
      const makingNewBookList = [newbook, ...copy]
      this.setState({
        books: makingNewBookList
      })

    }

  render() {
    console.log("Shelved Books", this.state.booksShelved)
    return (
      <div className="book-container">
        <BookList handleSubmit={this.handleSubmit} clickingBookToShelf={this.clickingBookToShelf} books={this.state.books} />
        <Bookshelf removingBookFromShelf={this.removingBookFromShelf} booksShelved={this.state.shelvedBooks} />
      </div>
    );
  }
}

export default App;
