import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";
import Search from "../components/Search";

class BookList extends Component {

  state = {
    search: ''
  }

  handleSearch = (search) => {
    this.setState({
      search
    })
  }

  searchBooks = () => {
    return this.props.books.filter(book => book.title.toLowerCase().includes(this.state.search.toLowerCase()) || book.author.toLowerCase().includes(this.state.search.toLowerCase()))
  }

  render() {

    const bookComp = this.searchBooks().map(book => <Book key={book.title} {...book} shelf={this.props.shelf} handleClick={this.props.handleAdd}/>)

    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form handleSubmit={this.props.handleSubmit} />
        <Search handleSearch={this.handleSearch} />
        <ul>{bookComp}</ul>
      </div>
    );
  }
}

export default BookList;
