import React, { Component } from "react";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

  state = {
    books: [],
    shelf: []
  }

  handleAdd = (book) => {
    const shelfId = this.state.shelf.map(book => book.id)
    if(!shelfId.includes(book.id)) {
      const addBookToShelf = [...this.state.shelf, book]
      this.setState({
        shelf: addBookToShelf
      })
    }
  }

  handleDelete = (book) => {
    const removeBookFromShelf = this.state.shelf.filter(shelfBook => shelfBook.id !== book.id)
    this.setState({
      shelf: removeBookFromShelf
    })
  }

  handleSubmit = (e, book, callback) => {
    e.preventDefault()
    const addBook = [book, ...this.state.books]
    this.setState({
      books: addBook
    }, () => callback())
  }

  handleShelfSubmit = (e, book, callback) => {
    e.preventDefault()
    const addBook = [book, ...this.state.books]
    const addBookToShelf = [...this.state.shelf, book]
    this.setState({
      books: addBook,
      shelf: addBookToShelf
    }, () => callback())
  }

  componentDidMount() {
    fetch('http://localhost:3005/books')
    .then(res => res.json())
    .then(books => {
      this.setState({
        books
      })
    })
  }

  render() {
    return (
      <div className="book-container">
        <BookList books={this.state.books} shelf={this.state.shelf} handleAdd={this.handleAdd} handleSubmit={this.handleSubmit} />
        <Bookshelf books={this.state.shelf} handleDelete={this.handleDelete} handleShelfSubmit={this.handleShelfSubmit}/>
      </div>
    );
  }
}

export default App;
