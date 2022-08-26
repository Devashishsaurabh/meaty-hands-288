import React from "react";

export default function Review(props) {
  return (
    <div>
      <img src={props.image} alt='str' />
      <div>
        <img src={props.profileImage} alt='str' />
        <div>
          <p>{props.name}</p>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}
