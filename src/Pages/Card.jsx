import React, { useEffect, useState } from "react";
import Offercard from "./Offercard";
import Review from "./Review";
import styles from "./Cards.module.css";
export default function Card({ offerCardData, reviews, name }) {
  const [count, setcount] = useState(0);
  const [paginatedReview, setpaginatedReview] = useState([]);
  const [paginatedView, setpaginatedView] = useState(false);
  const [reviewdata, setreviewdata] = useState({});
  const [pagenumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [cat, setcat] = useState(name);
  const changehandler = (value) => {
    setcat(value);
  };

  const changePaginatedView = () => {
    setpaginatedView((prev) => !prev);
  };
  useEffect(() => {
    if (name !== "AllCategories") {
      setpaginatedReview(reviews.slice(0, 6));
      setreviewdata(reviews);
    }
    if (name === "AllCategories" && cat !== "AllCategories") {
      setpaginatedReview(offerCardData?.[cat].review.slice(0, 6));
      setreviewdata(offerCardData?.[cat].review);
    }
  }, [reviews, name, cat, offerCardData]);

  const pagination = (val) => {
    if (name === "AllCategories" && cat !== "AllCategories")
      setpaginatedReview(
        offerCardData?.[cat].review.slice(
          (count + val) * 6,
          (count + val + 1) * 6
        )
      );
    else
      setpaginatedReview(
        reviewdata.slice((count + val) * 6, (count + val + 1) * 6)
      );
    setcount((prev) => prev + val);
  };

  const numberpage = (val) => {
    setpaginatedReview(reviewdata.slice((val - 1) * 6, (val + 1) * 6));
  };
  console.log({ offerCardData, reviews, name });
  return (
    <>
      {name === "AllCategories" &&
        cat === "AllCategories" &&
        Object.values(offerCardData).map((elem) => (
          <div className={styles.maindiv}>
            <div>
              <p className={styles.itemname}>{elem?.offerCardData[0].name}</p>
            </div>
            <div className={styles.pics}>
              {elem?.offerCardData.map((ele) => (
                <Offercard
                  url={ele.url}
                  alt={ele.alt}
                  name={ele.name}
                  percentage={`${ele.percentage}%`}
                />
              ))}
            </div>

            <div className={styles.boxes}>
              {elem?.review.slice(0, 4).map((ele) => (
                <Review
                  image={ele.image}
                  name={ele.name}
                  description={ele.description}
                  profileImage={ele.profileImage}
                />
              ))}
            </div>
            <button
              className={styles.btn}
              onClick={() => changehandler("Pasta")}
            >
              View All {elem?.offerCardData[0].name} Hotpicks
            </button>
          </div>
        ))}
      {(name !== "AllCategories" || cat !== "AllCategories") && (
        <>
          <div className={styles.maindiv}>
            <div>
              <h2 className={styles.itemname}>{}</h2>
            </div>
            <div className={styles.pics}>
              {name !== "AllCategories" &&
                offerCardData.map((ele) => (
                  <Offercard
                    url={ele.url}
                    alt={ele.alt}
                    name={ele.name}
                    percentage={`${ele.percentage}%`}
                  />
                ))}

              {name === "AllCategories" &&
                offerCardData?.[cat]?.offerCardData.map((ele) => (
                  <Offercard
                    url={ele.url}
                    alt={ele.alt}
                    name={ele.name}
                    percentage={`${ele.percentage}%`}
                  />
                ))}
            </div>

            {paginatedView && (
              <div className={styles.pages}>
                {pagenumbers.map(
                  (ele) =>
                    ele <= parseInt(reviewdata.length / 6) + 1 && (
                      <button onClick={() => numberpage(ele)}>{ele}</button>
                    )
                )}
                <p>
                  Page: <span>{count + 1}</span>
                </p>
                <button onClick={() => pagination(-1)} disabled={count === 0}>
                  Prev
                </button>
                <button
                  className={styles.nextbutton}
                  onClick={() => pagination(1)}
                  disabled={count === parseInt(reviewdata.length / 6)}
                >
                  Next
                </button>
              </div>
            )}
            <div className={styles.boxes}>
              {paginatedReview.map((ele) => (
                <Review
                  className={styles.review_card}
                  image={ele.image}
                  profileImage={ele.profileImage}
                  name={ele.name}
                  description={ele.description}
                />
              ))}
            </div>
            {!paginatedView && (
              <button className={styles.btn} onClick={changePaginatedView}>
                View All {name} Hotpicks
              </button>
            )}
          </div>
        </>
      )}
    </>
  );
}
