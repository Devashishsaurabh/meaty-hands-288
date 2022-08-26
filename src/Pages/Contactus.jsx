import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import React, { useEffect } from "react";
import HelpRoute from "./HelpRoute";
import styled from "./Pages.module.css";
const Contactus = () => {
  useEffect(()=>{
    document.title="Contact-US"
  })
  return (
    <div className={styled.helpmain}>
      <div className={styled.sidebarMainLeft}>
        <HelpRoute />
      </div>
      <div className={styled.sidebarMainContent}>
        <h2>Contact KindMeal.my</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad provident
          nihil nobis a, dolorem in sunt cumque reiciendis! Unde perferendis
          voluptatum voluptate architecto facilis eligendi consectetur, quia
          laboriosam sapiente harum!
        </p>
        <br />
        <hr />
        <br />
        <FormControl isRequired w="70%" m="auto">
          <FormLabel> Name</FormLabel>
          <Input />
          <FormLabel> Email</FormLabel>
          <Input />
          <FormLabel> Phone</FormLabel>
          <Input />
          <FormLabel> Topic</FormLabel>
          <Input />
          <FormLabel> Message</FormLabel>
          <Input />
          <Box  textAlign='center' mt="20px">
            <Button colorScheme="red">Send Message</Button>
          </Box>
        </FormControl>
     
      </div>
    </div>
  );
};

export default Contactus;
