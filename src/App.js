import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

  state = {
    books: [],
    shelfBooks: []

  }

  addToBookshelf = (bookObj) => {
    const newShelfBooks = [...this.state.shelfBooks, bookObj]

    this.setState({
      shelfBooks: newShelfBooks
    })
  }

  removeFromBookShelf = (bookObj) => {
    const shelfBooksCopy = [...this.state.shelfBooks]
    const index = shelfBooksCopy.indexOf(bookObj)

    if(index > -1){
      shelfBooksCopy.splice(index, 1)
    }

    this.setState({
      shelfBooks: shelfBooksCopy
    })
  }

  createNewBook = (e, bookObj) => {
    e.preventDefault()

    const newBooks = [bookObj, ...this.state.books]

    this.setState({
      books: newBooks
    })
  }

  componentDidMount() {
    fetch('http://localhost:3005/books')
    .then(resp => resp.json())
    .then(parsedResp => {
      this.setState({
        books: parsedResp
      })
    })
  }
  render() {
    return (
      <div className="book-container">
        <BookList books={this.state.books} handleClick={this.addToBookshelf} handleSubmit={this.createNewBook}/>
        <Bookshelf books={this.state.shelfBooks} handleClick={this.removeFromBookShelf}/>
      </div>
    );
  }
}

export default App;
