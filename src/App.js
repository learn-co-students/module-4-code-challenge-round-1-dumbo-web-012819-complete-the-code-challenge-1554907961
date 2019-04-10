import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {
  state = {
    books: [],
    shelfBooks: [],
    onShelf: false
  }

  componentDidMount(){
    fetch('http://localhost:3005/books')
    .then(res => res.json())
    .then(json => {
      this.setState({
        books: json
      })
    })
  }

  addBookToShelf = (book) => {
    
    let shelf = [...this.state.shelfBooks, book]
    this.setState({
      shelfBooks: shelf
    })
  }

  removeBookfromShelf = (book) => {
    console.log(book)
    let removedBook = this.state.shelfBooks.filter(shelfBook => book != shelfBook)
    this.setState({
      shelfBooks: removedBook
    })
  }

  submitNewBook = (e) => {
    e.preventDefault()
    let newBook = {
      id: this.state.books.length + 1,
      title: e.target.title.value,
      author: e.target.author.value,
      img: e.target.img.value
    }
    let addingBook = [...this.state.books, newBook]
    this.setState({
      books: addingBook
    })
  }

  render() {
    return (
      <div className="book-container">
        <BookList books={this.state.books} addBookToShelf={this.addBookToShelf} onShelf={this.state.onShelf} submitNewBook={this.submitNewBook}/>
        <Bookshelf books={this.state.shelfBooks} removeBookfromShelf={this.removeBookfromShelf} />
      </div>
    );
  }
}

export default App;
