import React from "react";
import { NavLink } from "react-router-dom";
import styled from "./Pages.module.css";
const HelpRoute = () => {
  let sideContent = [
    {
      title: "General Help",
      url: "/help",
      image:"https://www.kindmeal.my/images/join_normal.png"
    },
    {
      title: "Merchant Help",
      url: "/help_merchant",
      image:"https://www.kindmeal.my/images/join_shop.png"
    },
    {
      title: "Advertising",
      url: "/advertising",
      image:"https://www.kindmeal.my/images/icon-megaphone.png"
    },
    {
      title: "About KindMeal",
      url: "/about-us",
      image:"	https://www.kindmeal.my/images/about_us.png"
    },
    {
      title: "Superhero Guide",
      url: "/superhero",
      image:"https://www.kindmeal.my/images/about_hero.png"
    },
    {
      title: "Contact Us",
      url: "/contact-us",
      image:"https://www.kindmeal.my/images/contact.png"
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
              src={item.image}
              alt="images"
              width="100px"
              style={{margin:"auto"}}
            />
            <h4>{item.title}</h4>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default HelpRoute;
