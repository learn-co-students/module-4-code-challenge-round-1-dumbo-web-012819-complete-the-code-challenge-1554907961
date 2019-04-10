import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

  state = {
    books: [],
    addedBooks: []
  }

  componentDidMount() {
    fetch('http://localhost:3005/books')
    .then(resp => resp.json())
    .then(books => {
      this.setState({books})
    })
  }

  addToShelfClick = (id) => {
    let addedBook = this.state.books.find(book => book.id === id)
    if (!this.state.addedBooks.includes(addedBook)) {
      this.setState({
        addedBooks: [...this.state.addedBooks, addedBook]
      })
    }
  }

  removeFromShelfClick = (removeBook) => {
    const newbooks = [...this.state.addedBooks].filter(book => book !== removeBook)
    this.setState({
      addedBooks: newbooks
    })
  }

  createNewBook = (e, bookObj) => {
    e.preventDefault()
    this.setState({
      books: [bookObj, ...this.state.books]
    })
  }
  
  /////**** HERE IS FOR UPDATING API ****/////
  // addNewBookToApi = (bookObj) => {
  //   return fetch('http://localhost:3005/books', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //     },
  //     body: JSON.stringify(bookObj)
  //   }).then(resp => resp.json())
  // }
  //
  // createNewBook = (e, bookObj) => {
  //   e.preventDefault()
  //   this.addNewBookToApi(bookObj)
  //   .then(book => {
  //     this.setState({
  //       books: [bookObj, ...this.state.books]
  //     })
  //   })
  // }
  ////////////////////////////////////////////

  render() {
    return (
      <div className="book-container">
        <BookList books={this.state.books} addToShelfClick={this.addToShelfClick} createNewBook={this.createNewBook}/>
        <Bookshelf addedBooks={this.state.addedBooks} removeFromShelfClick={this.removeFromShelfClick} />
      </div>
    );
  }
}

export default App;
