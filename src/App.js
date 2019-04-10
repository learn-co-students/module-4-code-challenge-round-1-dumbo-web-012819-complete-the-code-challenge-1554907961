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
    if (this.isAlreadyExist(bookObj)){
      alert('Already have that one! Sorry!')
    } else {
      const newShelfBooks = [...this.state.shelfBooks, bookObj]
      // console.log(this.state.shelfBooks === newShelfBooks) => false

      this.setState({
        shelfBooks: newShelfBooks
      })
    }
  }

  isAlreadyExist = (bookObj) => {

    return this.state.shelfBooks.some((book) => {
      // This is really concerning why this evaluates to true without comparing id values.
      // Should both of these reference the same object in memory?
      // That is a book from 'shelfBooks' compared to a book from 'books'?
      return book === bookObj
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
