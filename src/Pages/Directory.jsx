
import React, { useEffect } from 'react'
import { useDispatch ,useSelector} from 'react-redux';
import { getProductsData6 } from '../Redux/AppReducer/action';
import style from "./style.module.css";
import { useState } from 'react';
import {Button,Flex} from "@chakra-ui/react"
function Directory() {

    useEffect(()=>{
  
        document.title="Directory"
    
       })

    const dispatch = useDispatch();
   
    const directory = useSelector((state) => state.AppReducer.directory);

 
    const [mpage,setmpage]=useState(1)
    const [load,setload]=useState(false)

    function changepage(mpage){
      setmpage(mpage)
       setload(true)
      setTimeout(()=>{
         setload(false)
         getProductsData6(mpage)
         
      },1000)
   }
   
    
    useEffect(() => {
        dispatch(getProductsData6(mpage));
      }, [dispatch,mpage]);

  return (
    <div>

<div style={{backgroundColor:"#F0F0F0"}}>
        <div style={{ paddingLeft:"20%",paddingTop:"30px",width:"70%"}}>
       

          <div style={{fontSize:"28px",fontWeight:"normal",marginBottom:"10px",color:"#444444"}}> Vegetarian Restaurants In Malaysia</div>
          <br />
          <p>Looking for even more delicious choices? Explore hundreds of vegetarian and vegan restaurants in Malaysia.</p>
          <br />
          <p>Are you a restaurant or cafe owner? Boost your business with an attractive KindMeal profile and deals for FREE. <a color="blue" href="">Find out</a>  more or contact us now.</p>
          <br />
          <br />
        </div>
        </div>

        <div style={{display:"flex",width:"70%",paddingLeft:"20%",gap:"40px",paddingTop:"30px"}}>
          <button className={style.veg}>Vegetarian Directory</button>
          <button className={style.veg1}>Featured Restaurants</button>
          <button className={style.veg1}>Food Menu</button>
           <button className={style.veg1}>Food Map</button>
        </div>

<div style={{width: '50%', margin:"auto",display: "flex",marginBottom:"1rem",marginTop:"1rem",marginLeft:"19%"}}>
                
                <h1 style={{fontSize: "17px" ,textAlign: "center",marginTop: "7px"}}>PAGE :</h1>
                <Flex gap="0.5rem" >
                 <Button disabled={mpage===1}
                 onClick={()=>changepage(1)}>1</Button>
                 <Button disabled={mpage===2}
                 onClick={()=>changepage(2)}>2</Button>
                 <Button disabled={mpage===3}
                 onClick={()=>changepage(3)}>3</Button>
                  <Button disabled={mpage===4}
                 onClick={()=>changepage(4)}>4</Button>
                  <Button disabled={mpage===5}
                 onClick={()=>changepage(4)}>5</Button>


                </Flex>
            </div>

<div className={style.directory}>
          {directory.map((item) => {
            return (
              <div className={style.dono1} key={item.id} >
                
                <div  >
                 <div style={{fontSize:"20px",paddingTop:"14px",paddingBottom:"10px"}}>{item.name}{" "}</div> 
                 
                 
                 <div style={{fontSize:"14px",paddingBottom:"10px"}}>{item.des} </div>

                 <div className={style.dish}> <h1>Address</h1></div>
                 <div style={{fontSize:"14px",paddingBottom:"10px"}}>{item.add} </div>
                  <div className={style.dish}>Phone</div>
                 <div style={{paddingBottom:"10px"}}>{item.phone} </div>
                 <div className={style.dish}>Opening Hours</div>
                 <div style={{fontSize:"14px",paddingBottom:"10px"}}>{item.hour} </div>
                
                 <div > <img width="90%" src={item.image} alt="" /> </div>

                 <div style={{color:"#2184FF", display:"flex",gap:"15px",paddingTop:"10px"}}>
                     <button>Visit</button>
                      <div>|</div>
                      <button>Get Directions</button>
                      <div>|</div>
                      <button>Nearby Shops</button>
                 </div>
                 <br />

                 

                </div>
              </div>
            );
          })}
        </div>
<br />
    </div>
  )
}

export default Directory