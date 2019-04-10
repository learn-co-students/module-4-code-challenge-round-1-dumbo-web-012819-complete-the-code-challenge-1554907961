import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

  state = {
    books: [], 
    bookshelf: []
  }

  componentDidMount = () => {
    fetch('http://localhost:3005/books')
    .then(res =>  res.json())
    .then(booksJson => {
      this.setState({
        books: booksJson
      })
    })
  }

  handleSub = (e, bookObj) => {
    e.preventDefault()
    this.setState({
      books: [bookObj, ...this.state.books]
    })
  }

  handleAddBook = (e, bookObj) => {
    let newBooks = [...this.state.bookshelf].filter(book => {
      if (book.id !== bookObj.id) {
        return book
      }
    })
    newBooks.push(bookObj)
    this.setState({
      bookshelf: newBooks
    })
  }

  handleRemoveBook = (e, bookObj) => {
    let removeBook = this.state.bookshelf.filter(book => book.id !== bookObj.id)
    this.setState({
      bookshelf: removeBook
    })
  }
  
  render() {
    return (
      <div className="book-container">
        <BookList books={this.state.books} handleAddBook={this.handleAddBook} handleSub={this.handleSub}/>
        <Bookshelf books={this.state.bookshelf} handleRemoveBook={this.handleRemoveBook}/>
      </div>
    );
  }

}

export default App;
