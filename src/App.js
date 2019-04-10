import React, {
  Component
} from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";
import adapter from "./adapter.js";

class App extends Component {

  state = {
    books: [],
    shelf: []
  }
  shelfCopy = [


  ]

  componentDidMount() {
    this.fetchBooks()


  }


  fetchBooks = () => {

    return adapter.get()
      .then(bookJSON => {

        this.setState({
          books: bookJSON
        }, () => console.log("Got all the books!" + this.state.books))
      })
  }


  handleClick = (e) => {



    let foundBook = this.state.books.find(book => book.id === +e.target.id)
    this.shelfCopy.push(foundBook)
    this.setState({
      shelf: this.shelfCopy
    }, () => console.log(this.state.shelf))

    // if (this.stateCopy.includes(foundBook)) {
    //
    //   return
    // } else {
    //
    //
    //
    // }
  }

  handleRemove = (e) => {



    let foundBook = this.state.books.find(book => book.id === +e.target.id)
    // courtesy of https://love2dev.com/blog/javascript-remove-from-array/
    function arrayRemove(arr, value) {

      return arr.filter(function(ele) {
        return ele != value;
      });

    }

    let result = arrayRemove(this.shelfCopy, foundBook);
    this.shelfCopy = result

    this.setState({
      shelf: this.shelfCopy
    }, () => console.log(this.state.shelf))


  }
  debugger
  render() {
    return (
      <div className="book-container">
        <BookList books={this.state.books} handleClick={this.handleClick}/>
        <Bookshelf books={this.state.shelf} handleRemove={this.handleRemove}/>
      </div>
    );
  }
}

export default App;