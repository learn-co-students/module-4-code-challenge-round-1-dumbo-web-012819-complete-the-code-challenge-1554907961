import React from "react";

class Book extends React.Component {

  render() {
    
    if (this.props.onShelf === false){
    return (
      <div onClick={() => this.props.addBookToShelf(this.props.book)}>
        <h2>{this.props.book.title}</h2>
        <img src={this.props.book.img}/>
      </div>
    );
    }
    else {
      return (
        <div onClick={() => this.props.removeBookfromShelf(this.props.book)}>
          <h2>{this.props.book.title}</h2>
          <img src={this.props.book.img}/>
        </div>
      )
    }

  };




}

export default Book;
