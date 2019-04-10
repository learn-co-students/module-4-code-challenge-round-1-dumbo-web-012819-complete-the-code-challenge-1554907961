import React from "react";

class Form extends React.Component {

  state = {
    title:'',
    author:'',
    img:''
  }

  handleChange = (event) =>{
    this.setState({
      [event.target.name]:event.target.value
    })
  }

  handleSubmitValues = (event) => {
    event.preventDefault();
    if(this.state.title.length === 0 || this.state.author.length === 0 || this.state.img.length === 0){
      alert('Fill all the inputs before submit.')
    } else {
      this.props.handleSubmit(event);
      this.setState({
        title:'',
        author:'',
        img:''
      })
    }
  }

  render() {
    return(
      <div>
        <h2> Add Book </h2>
          <form autoComplete="off" onSubmit={this.handleSubmitValues}>
            <input  onChange={this.handleChange} type="text" value={this.state.title} placeholder="Add Title Please" name="title" />
            <input  onChange={this.handleChange} type="text" value={this.state.author} placeholder="Add Author Please" name="author" />
            <input  onChange={this.handleChange} type="text" value={this.state.img} placeholder="Add Book Image Please" name="img" />
            <br/>
            <input type="submit" value="Add Book"  />

        </form>
      </div>
    );
  }
}

export default Form;
