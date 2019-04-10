import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";
import Header from "./components/Header";

class App extends Component {

  state = {
    bookList: [],
    bookShelf: []
  }

  addToBookShelf = (book) => {
    let newBookShelf = this.state.bookShelf
    if (newBookShelf.includes(book)) {
      return alert('This book is already in the Book Shelf')
    } else {
      this.setState({
        bookShelf: [book, ...newBookShelf]
      })
    }
  }

  removeFromBookShelf = (book) => {
    let newBookShelf = [...this.state.bookShelf].filter(shelfBook => shelfBook.id !== book.id)
    this.setState({
      bookShelf: newBookShelf
    })
  }

  addNewBook = (book, event) => {
    event.preventDefault()
    if (this.state.bookList.includes(book)) {
      return alert('This Book is already in the list')
    } else {
      let newBookList = [book, ...this.state.bookList]
      this.setState({ bookList: newBookList })
      return alert('Book added successfully!');
    }
  }

  componentDidMount() {
    fetch('http://localhost:3005/books')
    .then( r => r.json() )
    .then( apiBookList => this.setState({ bookList: apiBookList}))
  }

  render() {
    return (
      <div>
        <Header />
        <div className="book-container" >
          <BookList bookList={this.state.bookList} addToBookShelf={this.addToBookShelf} addNewBook={this.addNewBook}/>
          <Bookshelf bookShelf={this.state.bookShelf} removeFromBookShelf={this.removeFromBookShelf}/>
        </div>
      </div>
    );
  }
}

export default App;
