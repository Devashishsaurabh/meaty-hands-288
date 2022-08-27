import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import {getProductsData5} from "../Redux/AppReducer/action"
import  { useEffect } from "react";
import style from "./style.module.css";
import { useState } from 'react';
import {Button,Flex} from "@chakra-ui/react"
function Articles() {

   useEffect(()=>{
  
    document.title="Articles"

   })

    const dispatch = useDispatch();
   
    const articals = useSelector((state) => state.AppReducer.artical);

    const [mpage,setmpage]=useState(1)
    const [load,setload]=useState(false)

    function changepage(mpage){
      setmpage(mpage)
       setload(true)
      setTimeout(()=>{
         setload(false)
         getProductsData5(mpage)
         
      },1000)
   }
   
    
    useEffect(() => {
        dispatch(getProductsData5(mpage));
      }, [dispatch,mpage]);
  return (
    <div>
        <div style={{backgroundColor:"#F0F0F0"}}>
        <div style={{ paddingLeft:"20%",paddingTop:"30px",width:"70%"}}>
       

          <div style={{fontSize:"28px",fontWeight:"normal",marginBottom:"10px",color:"#444444"}}> Yummy News, Articles & Videos</div>
          <br />
          <p>Want to keep updated on the latest news of delicious meat-free meals and adorable animals? Check out this section for interesting daily happenings and articles that will melt your tummy (and heart too).</p>
          <br />
          <p>You can also follow our Facebook Page or Twitter for more news and updates.</p>
          <br />
          <br />
        </div>
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
                 onClick={()=>changepage(5)}>5</Button>
                </Flex>
            </div>



         <div>
         <div className={style.artical}>
          {articals.map((item) => {
            return (
              <div className={style.dono} key={item.id} >
                <div className={style.image1}>
                  <img
                    style={{height:"100%",width:"100%", borderTopLeftRadius:"5px",borderBottomLeftRadius:"5px"}}
                    src={item.image}
                    alt=""
                  />{" "}
                </div>
                <div className={style.recname} >
                 <div style={{fontSize:"20px"}}>{item.contain}{" "}</div> 
                 <div>{item.kind} </div>
                 <br />
                 <div style={{fontSize:"14px"}}>{item.des} </div>
                 <br />

                 <div style={{display:"flex" , justifyContent:"space-around"}}>
                    <button className={style.button3}>View Video</button>
                    <div>26 August 2022</div>
                 </div>

                </div>
              </div>
            );
          })}
        </div>
         </div>
    </div>
  )
}

export default Articles