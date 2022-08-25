import React, { useEffect } from "react";
import Slider from "../Components/Slider";
import {
  getProductsData,
  getProductsData1,
  getProductsData2,
  getProductsData3,
  getProductsData4,
} from "../Redux/AppReducer/action";
import { useDispatch, useSelector } from "react-redux";
import { Heading, Box } from "@chakra-ui/react";

import style from "./style.module.css";
import { useLocation } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.AppReducer.news);
  const movement = useSelector((state) => state.AppReducer.Moments);
  const resto = useSelector((state) => state.AppReducer.Resto);
  const amazing = useSelector((state) => state.AppReducer.Amazing);
  const coupon = useSelector((state) => state.AppReducer.Coupon);

  useEffect(()=>{
    document.title="Delicious Meat-Free Meals, Vegetarian Cuisines, Kind Meal Discount Coupons for Restaurants & Cafes in Malaysia | KindMeal.my"
  })
  useEffect(() => {
    dispatch(getProductsData());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getProductsData1());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getProductsData2());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getProductsData3());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getProductsData4());
  }, [dispatch]);

  return (
    <div>
      <Slider />

      <div className={style.name}>
        <div className={style.first}>
          Latest News & Videos
          <div className={style.nameInside}>
            <h1>Save Lives with Your Blog </h1>
            <div>.</div>
            <h1>News & Articles </h1>
            <div>.</div>
            <h1>Follow Our Facebook</h1>
          </div>
        </div>

        <div className={style.main}>
          {data.map((item) => {
            return (
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div className={style.image}>
                  <img
                    style={{ height: "100%", width: "100%" }}
                    src={item.image}
                    alt=""
                  />{" "}
                </div>
                <div
                  style={{
                    textAlign: "center",
                    fontSize: "14px",
                    color: "#333333",
                  }}
                >
                  {item.contain}{" "}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <br />

      <br />
      {/* 2rd ////// */}

      <div className={style.name}>
        <div className={style.first}>
          Yummylicious Moments
          <div className={style.nameInside}>
            <h1>Secret Recipes</h1>
            <div>.</div>
            <h1> Member Hot Picks</h1>
            <div>.</div>
            <h1>Photo Moments</h1>
          </div>
        </div>

        <div className={style.main}>
          {movement.map((item) => {
            return (
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div className={style.image}>
                  <img
                    style={{ height: "100%", width: "100%" }}
                    src={item.image}
                    alt=""
                  />{" "}
                </div>
                <div
                  style={{
                    textAlign: "center",
                    fontSize: "14px",
                    color: "#333333",
                  }}
                >
                  {item.contain}{" "}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <br />
      {/* ////3rd//// */}

      <div className={style.name}>
        <div className={style.first}>
          Discover Restaurants
          <div className={style.nameInside}>
            <h1>Vegetarian Directory</h1>
            <div>.</div>
            <h1>Restaurant Menu</h1>
            <div>.</div>
            <h1> Food Map</h1>
          </div>
        </div>

        <div className={style.main}>
          {resto.map((item) => {
            return (
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div className={style.image}>
                  <img
                    style={{ height: "100%", width: "100%" }}
                    src={item.image}
                    alt=""
                  />{" "}
                </div>
                <div
                  style={{
                    textAlign: "center",
                    fontSize: "14px",
                    color: "#333333",
                  }}
                >
                  {item.contain}{" "}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <br />
      <div className={style.name}>
        <div className={style.first}>
          Amazing Superheroes
          <div className={style.nameInside}>
            <h1>Latest Buzz</h1>
            <div>.</div>
            <h1> Lifestyle Ambassadors</h1>
            <div>.</div>
            <h1>Win Gifts!</h1>
          </div>
        </div>

        <div className={style.main}>
          {/* <h1>Home Page  hai</h1> */}
          {amazing.map((item) => {
            return (
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div className={style.image}>
                  <img
                    style={{ height: "100%", width: "100%" }}
                    src={item.image}
                    alt=""
                  />{" "}
                </div>
                <div
                  style={{
                    textAlign: "center",
                    fontSize: "14px",
                    color: "#333333",
                  }}
                >
                  {item.contain}{" "}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Heading className={style.heading}>
        Introducing The World's 1st Meat-Free Lifestyle Platform
      </Heading>
      <Box className={style.img1}>
        {" "}
        <Box>Brought to you by</Box>
        <Box>
          <img
            width="46%"
            src="https://www.kindmeal.my/images/logo-petfinder.png"
            alt=""
          />
        </Box>{" "}
      </Box>

      <Box className={style.heading2}>
        Instant coupon & dining. No upfront coupon payment, booking or printing.
      </Box>

      {/* {  4th} */}

      <div className={style.main1}>
        {coupon.map((item) => {
          return (
            <div className={style.contain}>
              <div style={{ marginLeft: "30px" }}>
                {" "}
                <img width="80%" height="40%" src={item.image} alt="" />{" "}
              </div>
              <p className={style.con}>{item.contain} </p>
              <p className={style.des}>{item.des}</p>
            </div>
          );
        })}
      </div>

      <div className={style.heading3}>
        Any restaurant or cafe can join KindMeal, vegetarian or not, as long as
        the deals and menu featured are meat-free. Enjoy a great meat-free
        dining exdiverience. Easily save animal lives, health, environment and
        money now!
      </div>

      <br />
      <br />
    </div>
  );
};

export default Home;
