import React, { Component } from "react";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

  state = {
    books: [],
    bookShelfBooks: []
  }

  componentDidMount() {
    fetch("http://localhost:3005/books")
    .then(resp => resp.json())
    .then(books => {
      this.setState({
        books
      })
    })
  }

  handleSubmit = (e, book) => {
    e.preventDefault()

    console.log(e)
    this.setState({
      books: [book, ...this.state.books]
    })
  };

  handleClickAdd = (e, shelfBook) => {
    console.log('book to add', shelfBook)
    const newBooks = [...this.state.books]
    const foundBook = newBooks.find(book => book.id === shelfBook.id)
    foundBook.bookshelf = true
    this.setState({
      bookShelfBooks: [foundBook, ...this.state.bookShelfBooks]
    })
  };

  handleClickRemove = (e, shelfBook) => {
    console.log('book to remove', shelfBook)
    const newBooks = [...this.state.books]
    const foundBook = newBooks.find(book => book.id === shelfBook.id)
    foundBook.bookshelf = false
    this.setState({
      bookShelfBooks: [foundBook, ...this.state.bookShelfBooks]
    })
  };

  booksOnShelfBooks = () => {
    return this.state.bookShelfBooks.filter(book => book.bookshelf)
  }


  render() {
    return (
      <div className="book-container">
        <BookList books={this.state.books} handleSubmit={this.handleSubmit} handleClickAdd={this.handleClickAdd}/>
        <Bookshelf books={this.state.booksOnShelfBooks}/>
      </div>
    );
  }
}

export default App;
