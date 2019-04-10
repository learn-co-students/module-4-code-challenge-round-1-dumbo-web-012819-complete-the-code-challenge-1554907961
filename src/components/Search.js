import React from "react";

const Search = props => {
  return(
    <input type='text' placeholder='Search Title/Author' onChange={(e) => props.handleSearch(e.target.value)}/>
  )
}

export default Search;
