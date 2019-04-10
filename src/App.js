import React, { Component } from "react";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

  state = {
    books: [],
    bookshelf: []
  }

  componentDidMount() {
    fetch('http://localhost:3005/books')
      .then(res => res.json())
      .then(books => {
        this.setState({
          books
        })
      })
  }

  handleClick = (obj) => {
    // console.log(obj)

    // this.state.bookshelf.map(book => {
    //   console.log('inside mappedBooks', book)
    // })

    // if (this.state.bookshelf) {
    //
    // }

    console.log('ADD FUNCTION', obj)
    const updatedBooks = [...this.state.bookshelf, obj]

    this.setState({
      bookshelf: updatedBooks
    })
  }

  handleRemoveClick = (obj) => {
    console.log('REMOVE FUNCTION', obj)
    const removedItemFromBookshelf = this.state.bookshelf.filter(bookshelf => {
      return bookshelf.id !== obj.id
    })
    this.setState({
      bookshelf: removedItemFromBookshelf
    })
  }

  handleSubmit = (e, obj) => {
    // debugger
    e.preventDefault()
    // console.log(this.state)
    // debugger
    // console.log('ADD FUNCTION', obj)
    const submitted = [...this.state.books, obj]
    this.setState({
      books: submitted
    }, () => console.log(this.state))
  }

  render() {
    return (
      <div className="book-container">
        <BookList books={this.state.books} handleClick={this.handleClick} handleSubmit={this.handleSubmit} className="book-list"/>

        <Bookshelf className="book-shelf" bookshelf={this.state.bookshelf} handleRemoveClick={this.handleRemoveClick} />
      </div>
    );
  }
}

export default App;
