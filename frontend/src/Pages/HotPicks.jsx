import React, { useEffect, useState } from "react";
import Card from "./Card";
import Tabitems from "./Tabitems";
import style from "./Hotpicks.module.css";
import { categories, CategoriesData } from "./data";
const HotPicks = () => {
  useEffect(() => {
    document.title = "Hot, Sizzling Member Picks | KindMeal.my";
  });
  const [cat, setcat] = useState("AllCategories");
  const changehandler = (value) => {
    console.log(value)
    setcat(value);
  };
  return (
    <div>
      <div style={{backgroundColor:"rgb(243, 243, 243)"}}>
      <div className={style.intro}>
        <div style={{ fontSize: 55, color: (155, 137, 137) }}>
          {cat} | Hot Picks
        </div>
        <p style={{ fontSize: 23, color: "black",marginTop:10}}>
          Discover our food lover community's top {cat} picks. Easily locate
          tasty meat-free bargain deals, and get creative ideas for your
          gastronomic indulgence!
        </p>
        <p class="space"></p>
        <p style={{ fontSize: 23, color: "black",marginTop:20}}>
          Click into a featured deal to instantly obtain free coupons, or read
          more on our members' delicious recommendations.
        </p>
      </div >
      </div>
      <div className={style.tabs}>
        {categories.map((ele) => (
          <Tabitems name={ele} onClick={changehandler} />
        ))}
      </div>
      <div className={style.maincard}>
        {cat && (
          <Card
            onClick={changehandler}
            offerCardData={cat==="AllCategories" ? CategoriesData : CategoriesData?.[cat].offerCardData}
            reviews={ cat==="AllCategories" ? CategoriesData :  CategoriesData?.[cat].review}
            name={cat}
          />
        )}
      </div>
    </div>
  );
};

export default HotPicks;
