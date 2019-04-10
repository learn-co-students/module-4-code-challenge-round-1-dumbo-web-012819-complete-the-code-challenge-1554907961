import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

    state = {
        books: [],
        shelfBook: []
    }

    componentDidMount(){
        fetch(`http://localhost:3005/books`)
        .then(res => res.json())
        .then(this.loadBooks)
    }

    loadBooks = (books) => {
        this.setState({books})
    }

    bookExists = (bookObj) => {
        this.state.shelfBook.map(book => {

        })
    }

    handleBookClick = (e, bookObj) => {
        let addBook = [...this.state.shelfBook, bookObj]
        let removeBook = []
        this.setState({
            shelfBook: addBook
        })
    }


    handleNewBook = (e, book) => {
        e.preventDefault()
        let copy = [book,...this.state.books]
        this.setState({
            books: copy
        })
    }

  render() {
      console.log(this.state.shelfBook);
    return (
      <div className="book-container">
        <BookList handleNewBook={this.handleNewBook} handleBookClick={this.handleBookClick} books={this.state.books}/>
        <Bookshelf handleBookClick={this.handleBookClick} shelfBooks={this.state.shelfBook}/>
      </div>
    );
  }
}

export default App;
