import React from 'react'
import styled from "styled-components";
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";

const Container=styled.div`
  display:flex;
  width:72%;
`;
const Mainbox=styled.div`
  width:300px;
  margin:40px 30px 30px 20px;
  border:1px solid black;
`;

const Topsection=styled.div`
  display:flex;
  justify-content:space-evenly;
  height:45px;
  border:1px solid blue;
`;
const ProfileImage=styled.img`
  height:20px;
  width:40px;
  border-radius:15px;

`;

const NameDate=styled.div`
height:30px;
width:100px;
border:1px solid blue;

`;

const Name=styled.p`
font-size:14px;

`;
const Date=styled.p`
font-size:14px;

`;

const View=styled.button`
height:20px;
width:80px;
background-color:red;
color:white;

`;

const Bottom=styled.div`
  

`;

const Image=styled.img`
width:98%;
height:240px;

`;

const Message=styled.div`
display: flex;
justify-content: center;
padding: 5px;
gap: 20px;
width: 95%;
height: 40px;

`;

const Title=styled.div`

font-size: 14px;
text-align: center;
text-decoration: none;
color: gray;

`;





const KindCard = ({res}) => {

  return (
    <>
    <Container>
    {
      res.map((e)=>{

      <Mainbox>
     <Topsection>
      <ProfileImage src={e.avatar}/> 
      <NameDate>
       <Name>{e.username}</Name>
       <Date>August {Math.floor(Math.random()*30)}th 2022</Date>
      </NameDate>
      <View>View</View>
     </Topsection>

     <Bottom>
      <Image src={e.img}/>
      <Message>
      <FavoriteTwoToneIcon color="disabled" />
      <PhotoCameraIcon color="disabled" />
      <ChatBubbleIcon color="disabled" />
      </Message>
      <Title>{e.title}</Title>
     </Bottom>

     

    </Mainbox>




      })
    }
    


    </Container>
    
    </>
  )
}

export default KindCard

