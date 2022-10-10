import React from "react";
import style from "./Offercard.module.css"

export default function Offercard(props) {
  return (
    <div className={style.singlecard}>
      <img src={props.url} alt={props.alt} />
      <p className={style.cardtext}>{props.name}</p>
      <p className={style.perc}>{props.percentage}</p>
    </div>
  );
}
