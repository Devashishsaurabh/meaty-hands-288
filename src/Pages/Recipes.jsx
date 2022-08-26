import style from "./style.module.css"
import React, { useEffect } from 'react'


const Recipes = () => {

  useEffect(()=>{
    document.title="Yummy Meat-Free Recipes | KindMeal.my"
  })
 
  return (
    
    <div >
              <div className={style.mai}>
            <div className={style.ff}>
              <div>Food & Drinks</div>
              <br />
               <div>|</div>
              <div>Yummy Meat-Free Recipes</div>
            </div>
              <div className={style.ff1}>
              Want to craft your own creative meat-free meals? Get inspiration from other food lovers, or share your own masterpieces!
              </div>
              <br />
              <div className={style.ff1}>Transform into a master chef now.</div>
              <br />
<div>
              <div className={style.food}><input className={style.food1} type="text" placeholder="Search Recipe or Name" /> 
               <div className={style.food3}><select> <option value="">ALL Categories</option>
               <option value="">Appetizers</option>
               <option value="">Bevarages</option>
               
               </select>
                 
                </div>
                  
                 <button className={style.butt}>Search</button>
                 <button className={style.but}>Share My Recipe</button>
              </div>
              </div>
              </div>
      <div className= {style.recipe}>
      <div >
      <div className={style.pehla}>
        <div className={style.corner}> <img src="https://www.kindmeal.my/photos/member/0/6-s.jpg" alt=""/> </div>
        <div className={style.kind}>KindMealChef </div>
        <div className={style.button}><button>View</button></div>
      </div>
           <div className={style.dusra}>
             <img  src="https://www.kindmeal.my/photos/recipe/1000/1000016-19430-m.jpg" alt="" />
           </div>

            <span className= {style.tisra} >
               <div className={style.tisra1}><img src="https://www.kindmeal.my/images/icon_time_small.png" alt="" />  </div>
               <div style={{marginRight:"50px"}}>30 mins</div>
               <div className={style.tisra1}><img src="https://www.kindmeal.my/images/icon_heart_small.png" alt="" /></div>
               <div>1</div>
               <div className={style.tisra1}><img src="https://www.kindmeal.my/images/icon_commentbubble_small.png" alt="" /> </div>
               <div>1</div>
            </span>
      </div>
 
      <div >
      <div className={style.pehla}>
        <div className={style.corner}> <img src="https://www.kindmeal.my/photos/member/14/14169-s.jpg" alt=""/> </div>
        <div className={style.kind}>KindMealChef </div>
        <div className={style.button}><button>View</button></div>
      </div>
           <div className={style.dusra}>
             <img  src="https://www.kindmeal.my/photos/recipe/1000/1000009-19416-m.jpg" alt="" />
           </div>

            <span className= {style.tisra} >
               <div className={style.tisra1}><img src="https://www.kindmeal.my/images/icon_time_small.png" alt="" />  </div>
               <div style={{marginRight:"50px"}}>2 Hrs</div>
               <div className={style.tisra1}><img src="https://www.kindmeal.my/images/icon_heart_small.png" alt="" /></div>
               <div>0</div>
               <div className={style.tisra1}><img src="https://www.kindmeal.my/images/icon_commentbubble_small.png" alt="" /> </div>
               <div>0</div>
            </span>
      </div>

      <div >
      <div className={style.pehla}>
        <div className={style.corner}> <img src="https://www.kindmeal.my/images/default_male-s.jpg" alt=""/> </div>
        <div className={style.kind}>KindMealChef </div>
        <div className={style.button}><button>View</button></div>
      </div>
           <div className={style.dusra}>
             <img  src="https://www.kindmeal.my/photos/recipe/112/112274-17285-m.jpg" alt="" />
           </div>

            <span className= {style.tisra} >
               <div className={style.tisra1}><img src="https://www.kindmeal.my/images/icon_time_small.png" alt="" />  </div>
               <div style={{marginRight:"50px"}}>20 mins</div>
               <div className={style.tisra1}><img src="https://www.kindmeal.my/images/icon_heart_small.png" alt="" /></div>
               <div>0</div>
               <div className={style.tisra1}><img src="https://www.kindmeal.my/images/icon_commentbubble_small.png" alt="" /> </div>
               <div>0</div>
            </span>
      </div>
     

      <div >
        <br />
      <div className={style.pehla}>
        <div className={style.corner}> <img src="https://www.kindmeal.my/images/default_male-s.jpg" alt=""/> </div>
        <div className={style.kind}>BluePenguin</div>
        <div className={style.button}><button>View</button></div>
      </div>
           <div className={style.dusra}>
             <img  src="https://www.kindmeal.my/photos/recipe/1039/1039475-58908-m.jpg" alt="" />
           </div>

            <span className= {style.tisra} >
               <div className={style.tisra1}><img src="https://www.kindmeal.my/images/icon_time_small.png" alt="" />  </div>
               <div style={{marginRight:"50px"}}>55 min</div>
               <div className={style.tisra1}><img src="https://www.kindmeal.my/images/icon_heart_small.png" alt="" /></div>
               <div>0</div>
               <div className={style.tisra1}><img src="https://www.kindmeal.my/images/icon_commentbubble_small.png" alt="" /> </div>
               <div>0</div>
            </span>
      </div>

     

      <div >
        <br />
      <div className={style.pehla}>
        <div className={style.corner}> <img src="https://www.kindmeal.my/photos/member/11/11401-s.jpg" alt=""/> </div>
        <div className={style.kind}>BluePenguin</div>
        <div className={style.button}><button>View</button></div>
      </div>
           <div className={style.dusra}>
             <img  src="https://www.kindmeal.my/photos/recipe/1039/1039471-58904-m.jpg" alt="" />
           </div>

            <span className= {style.tisra} >
               <div className={style.tisra1}><img src="https://www.kindmeal.my/images/icon_time_small.png" alt="" />  </div>
               <div style={{marginRight:"50px"}}>11 mins</div>
               <div className={style.tisra1}><img src="https://www.kindmeal.my/images/icon_heart_small.png" alt="" /></div>
               <div>0</div>
               <div className={style.tisra1}><img src="https://www.kindmeal.my/images/icon_commentbubble_small.png" alt="" /> </div>
               <div>0</div>
            </span>
      </div>

      <div >
        <br />
      <div className={style.pehla}>
        <div className={style.corner}> <img src="https://www.kindmeal.my/photos/member/11/11401-s.jpg" alt=""/> </div>
        <div className={style.kind}>BluePenguin</div>
        <div className={style.button}><button>View</button></div>
      </div>
           <div className={style.dusra}>
             <img  src="https://www.kindmeal.my/photos/recipe/1000/1000013-19421-m.jpg" alt="" />
           </div>

            <span className= {style.tisra} >
               <div className={style.tisra1}><img src="https://www.kindmeal.my/images/icon_time_small.png" alt="" />  </div>
               <div style={{marginRight:"50px"}}>23 mins</div>
               <div className={style.tisra1}><img src="https://www.kindmeal.my/images/icon_heart_small.png" alt="" /></div>
               <div>1</div>
               <div className={style.tisra1}><img src="https://www.kindmeal.my/images/icon_commentbubble_small.png" alt="" /> </div>
               <div>1</div>
            </span>
      </div>
      <br />

     
  
      
      
      </div>
 
                    {/* 2nd             */}

  
                 <div className={style.last} >
                 <div  >
                 
      <div className={style.pehla}>
        <div className={style.corner}> <img src="https://www.kindmeal.my/photos/member/29/29512-s.jpg" alt=""/> </div>
        <div className={style.kind}>KindMealChef</div>
        <div className={style.button}><button>View</button></div>
      </div>
           <div className={style.dusra}>
             <img  src="https://www.kindmeal.my/photos/recipe/1000/1000016-19430-m.jpg" alt="" />
           </div>

            <span className= {style.tisra} >
               <div className={style.tisra1}><img src="https://www.kindmeal.my/images/icon_time_small.png" alt="" />  </div>
               <div style={{marginRight:"50px"}}>30 mins</div>
               <div className={style.tisra1}><img src="https://www.kindmeal.my/images/icon_heart_small.png" alt="" /></div>
               <div>0</div>
               <div className={style.tisra1}><img src="https://www.kindmeal.my/images/icon_commentbubble_small.png" alt="" /> </div>
               <div>0</div>
            </span>
      </div>
 
      <div >
      <div className={style.pehla}>
        <div className={style.corner}> <img src="https://www.kindmeal.my/images/default_male-s.jpg" alt=""/> </div>
        <div className={style.kind}>KindMealChef </div>
        <div className={style.button}><button>View</button></div>
      </div>
           <div className={style.dusra}>
             <img  src="https://www.kindmeal.my/photos/recipe/1039/1039472-58905-m.jpg" alt="" />
           </div>

            <span className= {style.tisra} >
               <div className={style.tisra1}><img src="https://www.kindmeal.my/images/icon_time_small.png" alt="" />  </div>
               <div style={{marginRight:"50px"}}>1 Hr</div>
               <div className={style.tisra1}><img src="https://www.kindmeal.my/images/icon_heart_small.png" alt="" /></div>
               <div>3</div>
               <div className={style.tisra1}><img src="https://www.kindmeal.my/images/icon_commentbubble_small.png" alt="" /> </div>
               <div>3</div>
            </span>
      </div>

      <div >
      <div className={style.pehla}>
        <div className={style.corner}> <img src="https://www.kindmeal.my/images/default_male-s.jpg" alt=""/> </div>
        <div className={style.kind}>KindMealChef </div>
        <div className={style.button}><button>View</button></div>
      </div>
           <div className={style.dusra}>
             <img  src="https://www.kindmeal.my/photos/recipe/1039/1039478-58911-m.jpg" alt="" />
           </div>

            <span className= {style.tisra} >
               <div className={style.tisra1}><img src="https://www.kindmeal.my/images/icon_time_small.png" alt="" />  </div>
               <div style={{marginRight:"50px"}}>30 mins</div>
               <div className={style.tisra1}><img src="https://www.kindmeal.my/images/icon_heart_small.png" alt="" /></div>
               <div>1</div>
               <div className={style.tisra1}><img src="https://www.kindmeal.my/images/icon_commentbubble_small.png" alt="" /> </div>
               <div>1</div>
            </span>
      </div>
     

      <div >
      <br />
      <div className={style.pehla}>
        <div className={style.corner}> <img src="https://www.kindmeal.my/photos/member/38/38334-s.jpg" alt=""/> </div>
        <div className={style.kind}>BluePenguin</div>
        <div className={style.button}><button>View</button></div>
      </div>
           <div className={style.dusra}>
             <img  src="https://www.kindmeal.my/photos/recipe/1039/1039453-58877-m.jpg" alt="" />
           </div>

            <span className= {style.tisra} >
               <div className={style.tisra1}><img src="https://www.kindmeal.my/images/icon_time_small.png" alt="" />  </div>
               <div style={{marginRight:"50px"}}>11 mins</div>
               <div className={style.tisra1}><img src="https://www.kindmeal.my/images/icon_heart_small.png" alt="" /></div>
               <div>0</div>
               <div className={style.tisra1}><img src="https://www.kindmeal.my/images/icon_commentbubble_small.png" alt="" /> </div>
               <div>0</div>
            </span>
      </div>

     

      <div >
      <br />
      <div className={style.pehla}>
        <div className={style.corner}> <img src="https://www.kindmeal.my/images/default_male-s.jpg" alt=""/> </div>
        <div className={style.kind}>BluePenguin</div>
        <div className={style.button}><button>View</button></div>
      </div>
           <div className={style.dusra}>
             <img  src="https://www.kindmeal.my/photos/recipe/1039/1039473-58906-m.jpg" alt="" />
           </div>

            <span className= {style.tisra} >
               <div className={style.tisra1}><img src="https://www.kindmeal.my/images/icon_time_small.png" alt="" />  </div>
               <div style={{marginRight:"50px"}}>1 Hr</div>
               <div className={style.tisra1}><img src="https://www.kindmeal.my/images/icon_heart_small.png" alt="" /></div>
               <div>0</div>
               <div className={style.tisra1}><img src="https://www.kindmeal.my/images/icon_commentbubble_small.png" alt="" /> </div>
               <div>0</div>
            </span>
      </div>

      <div >
      <br />
      <div className={style.pehla}>
        <div className={style.corner}> <img src="https://www.kindmeal.my/photos/member/37/37844-s.jpg" alt=""/> </div>
        <div className={style.kind}>BluePenguin</div>
        <div className={style.button}><button>View</button></div>
      </div>
           <div className={style.dusra}>
             <img  src="https://www.kindmeal.my/photos/recipe/1039/1039450-58870-m.jpg" alt="" />
           </div>

            <span className= {style.tisra} >
               <div className={style.tisra1}><img src="https://www.kindmeal.my/images/icon_time_small.png" alt="" />  </div>
               <div style={{marginRight:"50px"}}>55 min</div>
               <div className={style.tisra1}><img src="https://www.kindmeal.my/images/icon_heart_small.png" alt="" /></div>
               <div>1</div>
               <div className={style.tisra1}><img src="https://www.kindmeal.my/images/icon_commentbubble_small.png" alt="" /> </div>
               <div>1</div>
            </span>
      </div>
                  
                 </div>
    </div>
    
  )
}

export default Recipes