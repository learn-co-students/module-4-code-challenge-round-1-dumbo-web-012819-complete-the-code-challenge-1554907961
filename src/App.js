import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";
import Book from "./components/Book";


class App extends Component {
  state = {
    books: [],
    shelfed: false
  }


  componentDidMount() {
    fetch("http://localhost:3005/books")
      .then(res => res.json())
      .then(bookJson => {
        this.setState({
          books: bookJson
        })
    })

  }


  handleBookShelfClick = (e) => {
      this.setState({
          shelfed: e.target.value ? true : false
      })
  }


  render() {


    const listOfShelfedBooks = this.state.books.map(book => {
         return <Book book={book} shelfed={this.state.shelfed}
             handleBookShelfClick={this.handleBookShelfClick}/>
     })



    return (
      <div className="book-container">
        <BookList books={listOfShelfedBooks}/>
        <Bookshelf books={this.state.shelfed} />
      </div>
    );
  }
}

export default App;
