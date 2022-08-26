import React, { useEffect, useState } from "react";
import Offercard from "./Offercard";
import Review from "./Review";

export default function Card({ offerCardData, reviews, name }) {
  const [count, setcount] = useState(0);
  const [paginatedReview, setpaginatedReview] = useState([]);
  const [paginatedView, setpaginatedView] = useState(false);
  const [pagenumbers, setpagenumbers] = useState([1,2,3,4,5,6,7,8,9,10])
  const changePaginatedView = () => {
    setpaginatedView((prev) => !prev);
  };
  useEffect(() => {
    setpaginatedReview(reviews.slice(0, 6));
  }, [reviews]);
  
  const pagination = (val) => {
    setpaginatedReview(reviews.slice((count + val) * 6, (count + val + 1) * 6));
    setcount((prev) => prev + val);
  };

  const numberpage = (val) => {
    setpaginatedReview(reviews.slice((val-1) * 6, (val + 1) * 6));
  }
  return (
    <div>
      <div>
        <h2>{name}</h2>
      </div>
      <div>
        {offerCardData.map((ele) => (
          <Offercard
            url={ele.url}
            alt={ele.alt}
            name={ele.name}
            percentage={`${ele.percentage}%`}
          />
        ))}
      </div>
      <hr />
      {paginatedView && (
        <div>
          <button onClick={() => pagination(-1)} disabled={count === 0}>
            Prev
          </button>
          {pagenumbers.map(ele => ele <=parseInt(reviews.length / 6)+1 && <button onClick={() => numberpage(ele)}>{ele}</button>)}
          <p>
            Page: <span>{count + 1}</span>
          </p>
          <button
            onClick={() => pagination(1)}
            disabled={count === parseInt(reviews.length / 6) - 1}
          >
            Next
          </button>
        </div>
      )}
      <div>
        {paginatedReview.map((ele) => (
          <Review
            image={ele.image}
            name={ele.name}
            description={ele.description}
            profileImage={ele.profileImage}
          />
        ))}
      </div>
      {!paginatedView && (
        <button onClick={changePaginatedView}>View All {name} Hotpicks</button>
      )}
    </div>
  );
}
