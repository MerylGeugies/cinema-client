import React, { useState } from "react";
import { render } from 'react-dom';

const Star = ({ selected = false, onClick = f => f }) => (
  <div className={selected 
    ? "star selected" 
    : "star"} 
    onClick={onClick} 
  />
);

function StarRating({ totalStars }) {
  const [starsSelected, selectStar] = useState(0);

  return (
    <div className="star-rating">
      {[...Array(totalStars)].map((n, i) => (
        <Star
          key={i}
          selected={i < starsSelected}
          onClick={() => selectStar(i + 1)}
        />
      ))}
      <p>
        {starsSelected} of {totalStars} stars
      </p>
    </div>
  );
};

render(<StarRating totalStars={5} />, document.getElementById("root"));


module.exports = StarRating