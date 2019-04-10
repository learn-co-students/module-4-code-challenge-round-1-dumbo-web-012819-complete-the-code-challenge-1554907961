import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";
import Search from '../components/Search'

class Bookshelf extends Component {

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
    const bookComp = this.searchBooks().map(book => <Book key={book.title} {...book} handleClick={this.props.handleDelete}/>)

    return (
      <div className='bookshelf'>
        <h1>Book Shelf</h1>
        <Form handleSubmit={this.props.handleShelfSubmit} />
        <Search handleSearch={this.handleSearch}/>
        <ul>{bookComp}</ul>
      </div>
    )
  }
}

export default Bookshelf;
