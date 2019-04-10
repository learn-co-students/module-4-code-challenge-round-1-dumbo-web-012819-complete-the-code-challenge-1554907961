import React from "react";

const Book = ({book:{title, img, id}, handleClick, location}) => {
  return (
    <div className="book-card"   >
        <h2>{title}</h2>
        <img alt={title} onClick={(event) => handleClick(id, location, event)} src={img} atl={title} />
    </div>
  );
};

export default Book;
