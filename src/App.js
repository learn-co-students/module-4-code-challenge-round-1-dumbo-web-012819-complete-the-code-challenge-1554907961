import React, { Component } from "react";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";
import Form from "./components/Form";

class App extends Component {
    // initializes state as an empty array of books
    state = {
        books: [],
        shelved : false
    };


    // fetches book information from backend... shoves info into books array... updates state
    componentDidMount() {
        fetch('http://localhost:3005/books')
            .then(resp => resp.json())
            .then(respJSON => {
                this.setState({
                    books: respJSON
                })
            })
    }

    addBookToShelf = (id) => {
        // make copy of existing book array
        const copyOfBooks = [...this.state.books];
        // look through the copy of books array and find the book with the ID of what was passed in
        const foundBook = copyOfBooks.find(book => book.id === id);
        // set the value of shelf (attribute of book) as true to add to know what to add to the bookshelf
        foundBook.shelved = true;
        // update state with the copy of books after we've changed the found book
        this.setState({
            books: copyOfBooks
        })
    };

    deleteBookFromShelf = (id) => {
        const copyOfBooks = [...this.state.books]
        const foundBook = copyOfBooks.find(book => book.id === id);
        foundBook.shelved = false;
        this.setState({
            books: copyOfBooks
        })
    };

    // function that will return a copy of the book array with only the books that have a shelved value of true
    shelvedBooks = () => {
        return [...this.state.books].filter(book => book.shelved);
    };

    // creates a new book object when the user fills out the form.. event passed
    // up from book class
    // still working on this part... ran out of time add new book is
    // passed into updated book list
    const addNewBook = (event) => {
        title : event.target.title.value
        author: event.target.author.value
        img : event.target.img.value

    };

    // adds that new book into the list of books displayed
    updatedBookList = () =>{
        // make a copy of the existing book list and add the new book
        // from addNewBook function to the top of the list
        const newBookList = [this.addNewBook, ...this.state.books];
        this.setState({
            books: newBookList
        })
    };

    render() {
        return (
            <div className="book-container">
                <Form onSubmit={this.addNewBook} />
                <BookList books={this.state.updatedBookList} handleClick={this.addBookToShelf}/>
                <Bookshelf books={this.shelvedBooks()} handleClick={this.deleteBookFromShelf}/>
            </div>
        );
    }
}

export default App;
