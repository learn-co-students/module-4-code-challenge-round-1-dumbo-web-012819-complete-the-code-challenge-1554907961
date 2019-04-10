import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

  state = {
    books: [],
    shelf: []
  }

  addToShelf = (book) => {
    if (!this.state.shelf.includes(book)) {
      this.setState({shelf: [book, ...this.state.shelf]})
    } else {
      alert('Book already exist in Shelf')
    }
  }

  removeBookFromShelf = (book) => {
    const newShelf = this.state.shelf.filter(shelfBook => book.id !== shelfBook.id)
    this.setState({shelf: newShelf})
  }

  createBook = (event) => {
    event.preventDefault()
    const newBook = {
      id: this.state.books.length + 1,
      title: event.target.title.value,
      author: event.target.author.value,
      img: event.target.img.value
    }

    this.setState(state => ({
      books: [newBook, ...state.books]
    }));
  }

  componentDidMount() {
    fetch("http://localhost:3005/books")
      .then(res => res.json())
      .then(booksJSON => this.setState({books: booksJSON}))
  }

  render() {
    return (
      <div className="book-container">
        <BookList books={this.state.books} addToShelf={this.addToShelf} createBook={this.createBook}/>
        <Bookshelf shelf={this.state.shelf} removeBookFromShelf={this.removeBookFromShelf}/>
      </div>
    );
  }
}

export default App;
