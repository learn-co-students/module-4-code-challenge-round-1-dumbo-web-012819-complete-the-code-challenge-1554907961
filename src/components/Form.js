import React from "react";

class Form extends React.Component {
  render(){
    return (
        <div>
        <h1>Create A New Book</h1>
        <form onSubmit={(e)=>{this.props.handleClick(event)}}>
          <input type="text" name="title" onChange={this.props.handleClick} placeholder="Enter Book Title"/>
          <input type="text" name= "author" onChange={this.props.handleClick} placeholder="Enter Author Name" />
          <input type="text" name="img" onChange={this.props.handleClick} placeholder="Enter Image URL"/>
          <input type="submit"/>
        </form>
        </div>
  )
  }
}

<form onSubmit={(event) => { this.props.handleSubmit(event, this.state)}}>
    <input type="text" onChange={this.handleChange} name="name" placeholder="Enter your name" value={this.state.name}/>
    <input type="text" onChange={this.handleChange} name="sadImage" placeholder="Enter sadImage" value={this.state.sadImage}/>
    <input type="text" onChange={this.handleChange} name="happyImage" placeholder="Enter happyImage" value={this.state.happyImage}/>
    <input type="submit" value="Create new Artist"/>
</form>

export default Form;
