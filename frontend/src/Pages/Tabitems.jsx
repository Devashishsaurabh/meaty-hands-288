import React from "react";
import classes from "./Tabitems.module.css";
export default function Tabitems(props) {
  return (
    <div className={classes.tabbtn} onClick={() => props.onClick(props.name)}>
      {props.name}
    </div>
  );
}
