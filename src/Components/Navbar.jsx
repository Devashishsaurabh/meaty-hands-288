import React from 'react'
import styled from "styled-components"
import {Link, NavLink} from 'react-router-dom'
import { Tooltip } from '@chakra-ui/react'

const Container=styled.div`
  margin:0;
  padding: 0;
  width:100%;

`
const TopWrapper=styled.div`
padding-top: 8px;
display: flex;
justify-content: space-between;
align-items: center;
width:60%;
margin: auto;
 @media(max-width: 768px) {
  width:80%;
}
@media(max-width: 480px) {
  width:100%;
}
`
const Left=styled.div`
 display:flex;
 width:370px;
 justify-content: center;
 align-items: center;
 @media(max-width: 480px) {
  width:200px;
}
@media(max-width: 768px) {
  width:260%;
}
`
const Logo=styled.div`

    
`
const Image=styled.img`
height: 80px;
width:100%;
margin-top:5px
`

const Center=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

`
const Icon=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin:0 5px;
    padding: 5px;
`
const IconImage=styled.img`
height:40px;
@media(max-width: 768px) {
  height:15px;
}
@media(max-width: 480px) {
  height:10px;
}
`
const Right=styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: 600;

`

const Option=styled.div`
    padding: 3px 5px;
    border-radius: 5px;
    font-size: 12px;
    background-color: ${props=>props.bg};
    color: ${props=>props.color};
    margin: 0 3px;
    cursor: pointer;
    
`

const BottomWrapper=styled.div`
    margin: auto;
    display: flex;
    height:45px;
    justify-content: space-between;
    background-color:#2bb673;
`
const Content=styled.div`
    width: 60%;
    height:100%;
    display: flex;
    margin: auto;
    font-size: 18px;
    font-weight: 600;
    justify-content: space-between;
    box-sizing: border-box;
    @media(max-width: 768px) {
      width:100%;
      font-size: 10px;
    font-weight: 600;
    justify-content: space-between
    }
    @media(max-width: 480px) {
      width:100%;
      font-size: 6px;
      font-weight: 400;
    justify-content: space-between
    }

`

const Nav=styled.div`
   height:100%;
   display:flex;
   padding:0px 25px 0px 25px;
   align-items:center;
   @media(max-width: 768px) {
    padding:0px 15px 0px 15px;
  }
  @media(max-width: 480px) {
    padding:0px 10px 0px 10px;
  }
`
const activeStyle={
  backgroundColor:"#439760",
  color:"white",
}

const baseStyle={
  backgroundColor:"transparent",
  color:"white"
}


const Navbar = () => {
  return (
    <Container>
      <TopWrapper>
        <Left>
          <Logo>
            <Image
              src="https://www.kindmeal.my/images/logo-kindmeal.png"
              alt="logo"
            />
          </Logo>
        </Left>
        <Center>
          <Icon>
            <a href="https://www.kindmeal.my/widget.htm" >
            <Tooltip hasArrow opacity={0.5} fontSize={13}label="Save Lives with Your Blogs - KindMeal.my Widget" bg="black" >
              <IconImage
                src="https://www.kindmeal.my/images/follow_blog_grey.png"
                alt=""
              />
            </Tooltip>
            </a>
          </Icon>
          <Icon>
           <a href='https://www.facebook.com/KindMeal.my' target="blank">
          <Tooltip hasArrow opacity={0.5} fontSize={13}label="Follow KindMeal.my on Facebook" bg="black" >
              <IconImage
                src="https://www.kindmeal.my/images/follow_facebook_grey.png"
                alt=""
              />
            </Tooltip>
            </a>
          </Icon>
          <Icon>
            <a href='https://twitter.com/KindMeal' target="blank">
          <Tooltip hasArrow opacity={0.5} fontSize={13}label="Follow KindMeal.my on Twitter" bg="black" >
              <IconImage
                src="https://www.kindmeal.my/images/follow_twitter_grey.png"
                alt=""
              />
            </Tooltip>
            </a>
          </Icon>
        </Center>
        <Right>
          
          <Option>
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "black" }}
            >
              Login
            </Link>{" "}
          </Option>
          <Tooltip fontSize={13} label='Login with Facebook Account' placement='bottom-start' bg="white" color="black" border="1px solid black" openDelay={500}>
          <Option bg="#34619f" color="white" style={{padding:"3px 20px 3px 20px"}}>
            Facebook
          </Option>
          </Tooltip>
          <Tooltip fontSize={13} label='Login with KindMeal Account' placement='bottom-start' bg="white" color="black" border="1px solid black" openDelay={500}>
          <Option bg="#666666" color="white" style={{padding:"3px 15px 3px 15px"}}>
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "white" }}
            >
              Email
            </Link>
          </Option>
          </Tooltip>
          <Link
            to={"/signup"}
            style={{ textDecoration: "none", color: "black" }}
          >
            <Option>Sign Up</Option>
          </Link>
        </Right>
      </TopWrapper>
      <BottomWrapper>
        <Content>
          <NavLink  to="/" exact style={({isActive})=> (isActive ? activeStyle :baseStyle)}>
            <Nav>
              Home
            </Nav>
          </NavLink>
          <NavLink  to="/mealdeal" exact style={({isActive})=> (isActive ? activeStyle :baseStyle)}>
            <Nav>
              Meal Deals
            </Nav>
          </NavLink>
          <NavLink  to={"/kindmoments"} exact style={({isActive})=> (isActive ? activeStyle :baseStyle)}>
          <Nav>
              KindMoments
          </Nav>
          </NavLink>
          <NavLink  to={"/hotpicks"} exact style={({isActive})=> (isActive ? activeStyle :baseStyle)}>
          <Nav>
              Hot Picks
          </Nav>
          </NavLink>
          <NavLink  to={"/recipes"} exact style={({isActive})=> (isActive ? activeStyle :baseStyle)}>
          <Nav>
              Recipes
          </Nav>
          </NavLink>
          <NavLink  to={"*"} exact style={({isActive})=> (isActive ? activeStyle :baseStyle)}>
          <Nav>
              Directory
          </Nav>
          </NavLink>
          <NavLink  to={"/not"} exact style={({isActive})=> (isActive ? activeStyle :baseStyle)}>
          <Nav>
              Articles
          </Nav>
          </NavLink>
          <NavLink  to={"/help"} exact style={({isActive})=> (isActive ? activeStyle :baseStyle)}>
            <Nav>
              Help
          </Nav>
          </NavLink>
        </Content>
      </BottomWrapper>
    </Container>
  );
}
export default Navbar