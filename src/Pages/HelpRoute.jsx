import React from "react";
import { NavLink } from "react-router-dom";
import styled from "./Pages.module.css";
const HelpRoute = () => {
  let sideContent = [
    {
      title: "General Help",
      url: "/help",
    },
    {
      title: "Merchant Help",
      url: "/help_merchant",
    },
    {
      title: "Advertising",
      url: "/advertising",
    },
    {
      title: "About KindMeal",
      url: "/about-us",
    },
    {
      title: "Superhero Guide",
      url: "/superhero",
    },
    {
      title: "Contact Us",
      url: "/contact-us",
    },
  ];
  return (
    <div>
      {sideContent.map((item, index) => (
        <NavLink
          to={item.url}
          key={index}
          className={({ isActive }) => (isActive ? styled[`active-link`] : "")}
        >
          <div className={styled.HelpCard}>
            <img
              src="https://www.kindmeal.my/images/join_normal.png"
              alt="images"
            />
            <h4>{item.title}</h4>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default HelpRoute;
