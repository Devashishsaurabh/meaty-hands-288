import { Button } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components"

const Container=styled.div`
background-color:linear-gradient(white, #f1f1f1);
padding-bottom:8%;

`
const First=styled.div`
width:50%;
margin:auto;
display:flex;
margin-top:5%;
align-items:center;
flex-direction:column;
`
const Logout = () => {
    useEffect(()=>{
        document.title="KindMeal.my-Logout"
    })
  return (
    <Container>
      <First >
        <div style={{display:"flex",alignItems:"center", width:"100%"}} >
        <img src="https://www.kindmeal.my/images/icon_tick.png" alt=""/>
        <h1 style={{marginLeft:"15px",fontSize:"30px", fontWeight:"600" }}>See You Again, Food Lover!</h1>
        </div>
        <div style={{width:"100%",marginTop:"3%",fontWeight:"600",color:"grey"}}>
            <p >You have successfully logged out of KindMeal.my.</p>
            <p style={{marginTop:"3%"}}>Whenever you hunger for absolutely delicious and irresistible vegetarian food, we're here to satisfy <br/>
            your deepest cravings. So, do visit us again!</p>
            <Link to="/">
            <Button colorScheme="red" color="white" mt={10} padding="0px 20px 0px 20px">Return to Main Page</Button>
            </Link>
        </div>
      </First>
    </Container>
  )
}

export default Logout