import React, { useEffect, useState } from "react";
import Card from "./Card";
import Tabitems from "./Tabitems";
import { categories, CategoriesData } from "./data";
const HotPicks = () => {
  useEffect(() => {
    document.title = "Hot, Sizzling Member Picks | KindMeal.my";
  });
  const [cat, setcat] = useState("Pizza");
  const changehandler = (value) => {
    setcat(value);
  };
  return <div>
     <div>
        <div>{cat} | Hot Picks</div>
        <p>
          Discover our food lover community's top {cat} picks. Easily locate
          tasty meat-free bargain deals, and get creative ideas for your
          gastronomic indulgence!
        </p>
        <p>
          Click into a featured deal to instantly obtain free coupons, or read
          more on our members' delicious recommendations.
        </p>
      </div>
      <div>
        {categories.map((ele) => (
          <Tabitems name={ele} onClick={changehandler} />
        ))}
      </div>
      <div>
        {cat && (
          <Card
            offerCardData={CategoriesData?.[cat].offerCardData}
            reviews={CategoriesData?.[cat].review}
            name={cat}
          />
        )}
      </div>
  </div>;
};

export default HotPicks;
