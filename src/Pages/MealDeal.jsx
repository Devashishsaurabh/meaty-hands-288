
import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Spacer,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import StarIcon from "@mui/icons-material/Star";
import React, { useEffect, useState } from "react";
import styled from "./Pages.module.css";
const MealDeal = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://21wj24.sse.codesandbox.io/data")
      .then((res) => setData(res.data));
  }, []);
  console.log(data);
  if(!data.length){
    return <Heading>Loading...</Heading>
  }

const MealDeal = () => {
  useEffect(()=>{
   document.title="Featured Meat-Free Deals & Vegetarian Food In Malaysia | KindMeal.my"
  })
}
  return (
    <div className={styled.MealDealMain}>
      <div className={styled.Banner}>
        <div>
          <Heading as="h5" size="md">
            Meal-Free Deals{" "}
            <span style={{ color: "brown" }}> | Restaurants In Malaysia</span>
          </Heading>
          <br />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consectetur quidem tenetur sequi recusandae consequuntur cumque
            impedit eos magnam voluptatibus! Ad aliquam esse quidem cupiditate,
            molestiae sint cum dolor sunt deserunt?
          </p>
          <br />
          <p>
            Download our mobile app now to easily get coupons and start dining
            in a few seconds. Effortlessly save lives, health, environment and
            money now!
          </p>
        </div>
        <SimpleGrid columns={2}>
          {data.map((item) => (
            <Box boxShadow="xs" rounded="md" bg="white" m="6px">
              <Image src={item.img} boxSize="250px" w="100%" />
              <Box p="6px" m="5px">
                <Heading as="h6" fontSize="18px">
                  {item.username}
                </Heading>
                <Text>{item.title}</Text>
              </Box>
              <Flex p="10px">
                <Button colorScheme="#f53838;">Get FREE Coupon</Button>
                <Spacer />
                <StarIcon style={{ color: "darkyellow" }} />
              </Flex>
            </Box>
          ))}
        </SimpleGrid>
      </div>
    </div>
  );
};

export default MealDeal;
