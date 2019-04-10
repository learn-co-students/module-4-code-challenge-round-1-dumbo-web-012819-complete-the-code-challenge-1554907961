import React, { Component } from "react";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {
  state={
    books:[],
    bookShelf:[]
  }
  addBookToShelf = (bookObj) => {
    if (!this.state.bookShelf.includes(bookObj)) {
      const bookShelfCopy = [...this.state.bookShelf]
      this.setState({
        bookShelf:[bookObj, ...bookShelfCopy]
      },()=>{console.log(this.state.bookShelf)})
      console.log(bookObj);
    }else {
      // const bookShelfCopy = [...this.state.bookShelf]
      // const newbookbookShelf.map(book)
    }
    }

  createNewBook = (thisState)=>{
    fetch("http://localhost:3005/books",{
      method:"POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
      body:JSON.stringify({
        title:thisState.title,
        author:thisState.author,
        img:thisState.img})
    })
    .then(res => res.json())
    .then(newBook =>{
      const bookCopy = [...this.state.books]
      this.setState({
        books: [...bookCopy,newBook]
      })
    })
  }

  componentDidMount(){
    fetch("http://localhost:3005/books")
    .then(res => res.json())
    .then(bookArr => {
      this.setState({
        books:bookArr
      })
    })
  }
  render() {
    return (
      <div className="book-container">
        <BookList books={this.state.books} addBookToShelf={this.addBookToShelf} createNewBook={this.createNewBook}/>
        <Bookshelf books={this.state.bookShelf} />
      </div>
    );
  }
}

export default App;
