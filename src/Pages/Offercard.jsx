import React from "react";

export default function Offercard(props) {
  return (
    <div className="relative">
      <img src={props.url} alt={props.alt} />
      <p className="absolute">{props.name}</p>
      <p className="absolute">{props.percentage}</p>
    </div>
  );
}
