import React from "react";

class Form extends React.Component {

    state = {
        title: '',
        author: '',
        img: ''
    }

    handleOnChange = (event) => {
        let input = event.target.value
        let key = event.target.name
        this.setState({
            [key]: input
        })
    }

  render() {
    return(
    <div>
        <form onChange={this.handleOnChange}>
            <input name="title" type="text" placeholder="title"/>
            <input name="author" type="text" placeholder="author"/>
            <input name="img" type="text" placeholder="image"/>
            <input onClick={(e)=>this.props.handleNewBook(e,this.state)}type="Submit" placeholder="image"/>
        </form>
    </div>
    )
  }
}

export default Form;
