import React from "react";
import styled from "styled-components";
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import Pagination from "../Pages/Pagination"


const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  width: 70%;
  margin: auto;
  
`;
const Mainbox = styled.div`
  
  border-radius:5px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
`;

const Topsection = styled.div`
  display: flex;
  justify-content: space-around;
  height: 70px;
  
`;
const ProfileImage = styled.img`
position: relative;
width: 50px;
height: 50px;
overflow: hidden;
border-radius:25px;
  
`;

const NameDate = styled.div`
  height: 40px;
  
  
  word-wrap: break-word;
  width: 170px;
  margin:5px 0px 0px 8px;
`;

const Name = styled.p`
  font-size: 14px;
  color: #666666;
`;
const Date = styled.p`
  font-size: 14px;
  
    line-height: 16px;
    color: #aaaaaa;
`;

const View = styled.button`
  height: 30px;
  width: 60px;
  background-color: red;
  color: white;
  margin-top:8px;
  border-radius:5px;
`;

const Bottom = styled.div``;

const Image = styled.img`
  width: 98%;
  height: 240px;
`;

const Message = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px;
  gap: 20px;
  width: 95%;
  height: 40px;
`;

const Title = styled.div`
  font-size: 14px;
  text-align: center;
  text-decoration: none;
  color: gray;
`;

const KindCard = ({ res,query }) => {
  return (
    <>
    <div style={{width:"70%",margin:"auto"}}>
    <Pagination/>
    </div>
      <Container>
        
        {res.filter((item)=> item.location.includes(query)).map((e)=> {
          return (
            <Mainbox key={e.id}>
              <Topsection>
                <ProfileImage src={e.avatar} />
                <NameDate>
                  <Name>{e.username}</Name>
                  <Date>August {Math.floor(Math.random() * 30)}th 2022</Date>
                </NameDate>
                <View>View</View>
              </Topsection>
              <Bottom>
                <Image src={e.img} />
                <Message>
                  <FavoriteTwoToneIcon color="disabled" />
                  <PhotoCameraIcon color="disabled" />
                  <ChatBubbleIcon color="disabled" />
                </Message>
                <Title>{e.title}</Title>
              </Bottom>
            </Mainbox>
          );
        })}
      </Container>
      
    </>
  );
};

export default KindCard;
