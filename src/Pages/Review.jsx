import React from "react";
import style from "./Review.module.css";
export default function Review(props) {
  return (
    <div className={style.box}>
      <div className={style.col1}>
        <img src={props.image} alt="str" />
      </div>
      <div className={style.col2}>
        <div>
          <img
            src={props.profileImage}
            alt="str"
          />
          <div>
            <p>{props.name}</p>
            <p>{props.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
