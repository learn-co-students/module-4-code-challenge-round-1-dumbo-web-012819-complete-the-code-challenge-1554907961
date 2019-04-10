import React from "react";

class Form extends React.Component {

    state = {
        title: '',
        author: '',
        img: ''
    }

    handleChange = (e) => {
        console.log(e.target.name)
        console.log(e.target.value)
        this.setState({
                [e.target.name]: e.target.value
        })
    }
  render() {
    return (
        <form onSubmit={(e) => this.props.addBook(e, this.state)}>
            <input name='title' value={this.props.title} placeholder="add title" onChange={this.handleChange} />
            <input name='author' value={this.props.author} placeholder="add author" onChange={this.handleChange} />
            <input name='img' value={this.props.img} placeholder="add image" onChange={this.handleChange} />
            <input type="submit" value="Add Book"/>
        </form>
    )
  }
}

export default Form;
