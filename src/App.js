import React, { Component } from "react";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

  state = {
    bookList:[],
    bookShelf:[]
  }

  componentDidMount(){
    fetch('http://localhost:3005/books')
    .then(response => response.json())
    .then(parsedResponse => {
      this.setState({
        bookList:parsedResponse
      })
    })
  }

  handleClickList = (id, location, event) => {
    const alreadyShelfed = this.state.bookShelf.find(book =>
      book.id === id
    )
    const bookFromList = this.state.bookList.find(book =>
      book.id === id
    )
    if(alreadyShelfed === undefined){
      this.setState({
        bookShelf: [bookFromList, ...this.state.bookShelf]
      })
    } else if(location === 'bookShelf'){
        const bookShelfCopy = this.state.bookShelf.filter(book => book !== alreadyShelfed);
        this.setState({
          bookShelf: bookShelfCopy
        })
      }
  }

  handleSubmit = (event) => {
    const bookListCopy = [...this.state.bookList];

    bookListCopy.sort(function(a, b) {
      return b.id - a.id
    });

    const newBookObject = {
      id: bookListCopy[0].id + 1,
      title: event.target.title.value,
      author: event.target.author.value,
      img: event.target.img.value,
    }

    this.setState({
      bookList:[newBookObject, ...this.state.bookList]
    });
  }


  render() {
    return (
      <div  className="book-container">
        <BookList handleSubmit={this.handleSubmit} handleClick={this.handleClickList} books={this.state.bookList} />
        <Bookshelf handleClick={this.handleClickList} books={this.state.bookShelf} />
      </div>
    );
  }


}

export default App;
