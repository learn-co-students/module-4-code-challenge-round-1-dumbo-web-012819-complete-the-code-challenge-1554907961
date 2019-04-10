import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

    state = {
        books : [],
        bookshelf: {},
        clicked: false
    }



    addBook = (e, book) => {
        e.preventDefault()
        this.setState({
            books: [book, ...this.state.books]
        })
    }

    handleClick = (book) => {
        this.setState({
            bookshelf: book
        }, () => console.log('what is the state inbookshelf', this.state.bookshelf))
    }


    componentDidMount() {
        fetch('http://localhost:3005/books')
        .then(res => res.json())
        .then(data => {
            this.setState({
                books: data
            })
        })
    }


    handleClickShelf = () => {
        this.setState({
            clicked: !this.state.clicked
        })
    }


  render() {
    return (
      <div className="book-container">
        <BookList books={this.state.books} addBook={this.addBook} handleClick={this.handleClick} />
        <Bookshelf book={this.state.bookshelf} clicked={this.state.clicked} handleClickShelf={this.handleClickShelf} />
      </div>
    );
  }
}


export default App;
