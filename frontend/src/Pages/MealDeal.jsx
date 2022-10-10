import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Spacer,
  Spinner,
  Text,
  Grid,
  Input,
  Select,
} from "@chakra-ui/react";
import axios from "axios";
import StarIcon from "@mui/icons-material/Star";
import React, { useEffect, useState } from "react";
import styled from "./Pages.module.css";
import Pagination from "./Pagination";
const MealDeal = () => {
  const [page,setPage]=useState(1);
  useEffect(() => {
    document.title =
      "Featured Meat-Free Deals & Vegetarian Food In Malaysia | KindMeal.my";
  });
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://ic3h4i.sse.codesandbox.io/data")
      .then((res) => setData(res.data));
  }, []);
  return (
    <div className={styled.MealDealMain}>
      {!data.length ? (
        <Heading style={{ textAlign: "center", height: "600px" }}>
          <Spinner
            thickness="4px"
            speed="1s"
            emptyColor="gray.200"
            color="blue.600"
            size="xl"
            mt="20px"
          />
          <h1>Loading...</h1>
        </Heading>
      ) : (
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
              impedit eos magnam voluptatibus! Ad aliquam esse quidem
              cupiditate, molestiae sint cum dolor sunt deserunt?
            </p>
            <br />
            <p>
              Download our mobile app now to easily get coupons and start dining
              in a few seconds. Effortlessly save lives, health, environment and
              money now!
            </p>
          </div>
          <Flex justifyContent="space-evenly">
            <Input
              placeholder="Search Shop or Deal Name"
              width="20%"
              background="white"
            ></Input>
            <Select name="" id="" background="white" width="20%">
              <option value="">All Category</option>
              <option value="mumbai">Pasta</option>
              <option value="hyderbad">Salad</option>
            </Select>
            <Select name="" id="" background="white" width="20%">
              <option value="">All Locations</option>
              <option value="mumbai">Mumbai</option>
              <option value="hyderbad">Hyderabad</option>
            </Select>
            <Button colorScheme="#f53838;">Search Deals</Button>
            <Button colorScheme="#04be5a;">Browse Restaurants</Button>
          </Flex>
          <Pagination page={page} setPage={setPage}/>
          <SimpleGrid columns={2}>
            {data.map((item) => (
              <Box boxShadow="xs" rounded="md" bg="white" m="6px">
                <Image src={item.img} boxSize="250px" w="100%" />
                <Box p="6px" m="5px">
                  <Heading as="h6" fontSize="18px">
                    {item.username}
                  </Heading>
                  <Text height="50px">{item.title}</Text>
                </Box>
                <Flex p="10px">
                  <Button colorScheme="#f53838;">Get FREE Coupon</Button>
                  <Spacer />
                  <StarIcon style={{ color: "#ffd700" }} />
                  <StarIcon style={{ color: "#ffd700" }} />
                  <StarIcon style={{ color: "#ffd700" }} />
                  <StarIcon style={{ color: "#ffd700" }} />
                </Flex>
                <Grid templateColumns="repeat(3, 1fr)" mb="0px">
                  <Flex
                    border="1px solid whitesmoke"
                    justifyContent="center"
                    gap="2px"
                    p="2px"
                    alignItems="center"
                  >
                    <img
                      src="https://www.kindmeal.my/images/icon_egg.png"
                      width="35px"
                      alt="icon"
                    />
                    <img
                      src="https://www.kindmeal.my/images/icon_milk.png"
                      width="35px"
                      alt="icon"
                    />
                    <img
                      src="https://www.kindmeal.my/images/icon_alcohol.png"
                      width="35px"
                      alt="icon"
                    />
                  </Flex>
                  <Box textAlign="center" border="1px solid whitesmoke" p="5px">
                    <Text>KindMeal Discount</Text>
                    <Text color="#fb2222" fontSize="24px" fontWeight="bold">
                      15% Off
                    </Text>
                  </Box>
                  <Box textAlign="center" border="1px solid whitesmoke" p="5px">
                    <Text>Expires In</Text>
                    <Text color="#888888" fontSize="24px" fontWeight="bold">
                      11 Days
                    </Text>
                  </Box>
                </Grid>
              </Box>
            ))}
          </SimpleGrid>
          <Pagination page={page} setPage={setPage}/>
        </div>
      )}
    </div>
  );
};

export default MealDeal;
