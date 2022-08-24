import React from "react";
import styled from "./Pages.module.css";
const Help = () => {
  let sideContent = [
    {
      title: "General Help",
    },
    {
      title: "Merchant Help",
    },
    {
      title: "Advertising",
    },
    {
      title: "About KindMeal",
    },
    {
      title: "Superhero Guide",
    },
    {
      title: "Contact Us",
    },
  ];
  return (
    <div className={styled.helpmain}>
      <div>
        {sideContent.map((item) => (
          <div key={item.title} className={styled.helpcard}>
            <img src="https://www.kindmeal.my/images/join_normal.png" alt="img" width="100px"></img>
            <h4>{item.title}</h4>
          </div>
        ))}
      </div>
      <div>Content</div>
    </div>
  );
};

export default Help;
