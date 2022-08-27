import React, { useEffect, useState } from "react";
import styled from "styled-components";
import KindCard from "../Components/KindCard";
import axios from "axios";
import { SettingsOverscanOutlined } from "@mui/icons-material";
import { useSearchParams } from "react-router-dom";
import { Heading, Spinner } from "@chakra-ui/react";
const Top = styled.div`
  width: 100%;
  height: 300px;
  background-color: #f0f0f0;
  display: flex;
`;

const Bott = styled.div`
  width: 72%;
  margin: auto;
  margin-top: 30px;
  /* border: 1px solid blue; */
  display: flex;
  justify-content: space-between;
`;
const Topleft = styled.div`
  flex: 7;
  /* border:1px solid red; */
`;
const Toplefttop = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
  margin-bottom: 30px;
`;

const HeadingPtag1 = styled.p`
  font-size: 23px;
  font-family: "Roboto", Arial, Helvetica, sans-serif;
`;
const HeadingPtag2 = styled.p`
  font-size: 23px;
  color: #444444;
  font-family: "Roboto", Arial, Helvetica, sans-serif;
`;

const Topright = styled.div`
  flex: 4;
  height: 75px;
  margin-bottom: 10px;
  margin-top: 20px;

  font-weight: 400px;
`;
const About = styled.div`
  margin-bottom: 2px;
`;
const BottLeft = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 20px;
`;

const BottRight = styled.div`
  display: flex;
  gap: 10px;
`;
const Button = styled.button`
  border: none;
  border-radius: 5px;
  padding: 3px;
  text-align: center;
  width: 130px;
  height: 40px;
  margin-bottom: 15px;
  background-color: #f53838;
  font-family: "Roboto", Arial;
  &:hover {
    cursor: pointer;
    background-color: #dc0808;
  }
  font-weight: bold;
  color: #ffffff;
`;
const ButtonShare = styled.div`
  border: none;
  border-radius: 5px;
  padding: 3px;
  text-align: center;
  width: 180px;
  height: 40px;
  background-color: #f53838;
  font-family: "Roboto", Arial;
  margin-bottom: 15px;
  font-weight: bold;
  color: #ffffff;

  &:hover {
    cursor: pointer;
    background-color: #dc0808;
  }
`;
const Button2 = styled.button`
  border: 1px solid gray;
  border-radius: 5px;

  text-align: center;
  width: 150px;
  height: 40px;

  background-color: whitesmoke;

  &:hover {
    cursor: pointer;
    background-color: #e2e2e2;
  }
`;
const Button3 = styled.button`
  border: 1px solid gray;
  border-radius: 5px;

  text-align: center;
  width: 150px;
  height: 40px;

  background-color: green;
  color: white;
  font-weight: 400;
  &:hover {
    cursor: pointer;
  }
`;

const Input = styled.input`
  height: 40px;
  width: 205px;
  border: 1px solid gray;
  border-radius: 5px;
  padding-left: 8px;
`;
const Select = styled.select`
  height: 40px;
  width: 205px;
  border: 1px solid gray;
  border-radius: 5px;
  padding-left: 8px;
`;

const Box = styled.div`
  background-color: white;
  width: 280px;
  height: 140px;
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-left: 80px;
  margin-top: 80px;
  border-radius: 5px;

  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
const H3 = styled.h2`
  font-size: 20px;
`;
const Box1 = styled.div`
  width: 80%;
  margin: auto;
  margin-left: 200px;
  margin-top: 50px;
`;
const Pagination=styled.div`
  width:70%;
  border:1px solid black;
  height:30px;
  font-size:16px;
  justify-content:space-between;
  margin:auto;
  display:flex;
`;

const PageNum =styled.div`
display:flex;
margin-left:-67%;

`;
const Num=styled.div`
height:20px;
width:20px;
border:1px solid red;
font-size:10px;
padding:2px 5px 2px 5px;
margin:3px;

`;
const PButton=styled.div`
  font-size:12px;
  border:1px solid blue;
  height:20px;
  width:40px;
  justify-content:center;
`

const KindMoments = () => {
  const [value, setValue] = useState([]);
  const [state, setState] = useState([])
  const[search,setSearch]=useState("")
  const[find,setFind]=useState("")
  const[pageNumber,setPageNumber]=useState(1)
  
  
  useEffect(() => {
    document.title =
      "KindMoments, Saving Lives One Photo At A Time | KindMeal.my";
  });

  useEffect(() => {
    axios.get("https://ic3h4i.sse.codesandbox.io/data?_page=${pageNumber}&_limit=8").then((data) => {
      //setState(data.data);
     if(find===""){
        setState(data.data)
      }
       else{
         setState(data.data.filter((item)=>item.location.includes(find)))
       }
      
      
    });
  },[pageNumber]);

  const handleSearch = async (e) => {
    e.preventDefault();
    return await axios
      .get(`https://21wj24.sse.codesandbox.io/data?q=${value}`)
      .then((response) => {
        setState(response.state);
        setValue("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(state)
  return (
    <>
      <Top>
        <Topleft>
          <Box1>
            <Toplefttop>
              <HeadingPtag1>Kind Moments</HeadingPtag1>
              <HeadingPtag2>
                |&nbsp;&nbsp;&nbsp;&nbsp;Saving Lives with Yummy Photos
              </HeadingPtag2>
            </Toplefttop>
            <About>
              Discover new, delicious meat-free cuisines enjoyed by other
              compassionate food lovers. Share your interesting KindMoments, and
              build your own fans and followers to encourage kind, healthy
              meals.
            </About>
            <About>
              Download our mobile app to easily showcase your masterpieces and
              interact with food lovers.
            </About>
            <About>Get started sharing your tasty moments now.</About>
          </Box1>
        </Topleft>

        <Topright>
          <Box>
            <H3>Share Your KindMoment</H3>
            <About>
              Interesting food or restaurant? Share with 1000s of food lovers!
            </About>
            <ButtonShare>Share</ButtonShare>
          </Box>
        </Topright>
      </Top>
 
        <Bott>
          <BottLeft>
            <Button3>Moments</Button3>
            <Button2>Deal Reviews</Button2>
            <Button2>Following</Button2>
          </BottLeft>
          <BottRight>
            <Input type="text" 
            onChange={(e)=>setSearch(e.target.value)} 
            placeholder="Search user or Shop" />
            <Select onChange={(e)=>setFind(e.target.value)}name="" id="">
              <option value="">All Locations</option>
              <option value="Mumbai" >Mumbai</option>
              <option value="Hyderabad">Hyderabad</option>
              
            </Select>
            <Button >Search</Button>
          </BottRight>
        </Bott>
        

        <Pagination>
        <p style={{ fontSize: "16px" }}>Page : </p>
        <PageNum>
          <Num onClick={() => setPageNumber(1)}>1</Num>
          <Num onClick={() => setPageNumber(2)}>2</Num>
          <Num onClick={() => setPageNumber(3)}>3</Num>
          <Num onClick={() => setPageNumber(4)}>4</Num>
          <Num onClick={() => setPageNumber(5)}>5</Num>
          <Num onClick={() => setPageNumber(6)}>6</Num>
          <Num onClick={() => setPageNumber(7)}>7</Num>
          <Num onClick={() => setPageNumber(8)}>8</Num>
          <Num onClick={() => setPageNumber(9)}>9</Num>
          
        </PageNum>
        
          
          <PButton onClick={() => setPageNumber(pageNumber + 1)}>
            Next »
          </PButton>
        
      </Pagination>
        
        
        {!state.length ? <Heading style={{textAlign:"center",height:"600px"}}><Spinner
  thickness='4px'
  speed='1s'
  emptyColor='gray.200'
  color='blue.600'
  size='xl'
  mt="20px"/>
  <Heading>Loading...</Heading>
  </Heading>
  :
       
  <KindCard res={state} query={search} />
  }
    
     </>
    
  )
}
