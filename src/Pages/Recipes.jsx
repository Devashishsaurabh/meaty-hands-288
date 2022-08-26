import style from "./style.module.css"
import React, { useEffect } from 'react'


const Recipes = () => {

  useEffect(()=>{
    document.title="Yummy Meat-Free Recipes | KindMeal.my"
  })
 
  return (
    
    <div >
     
            <div>
              <div>Food & Drinks</div>
              <div>Yummy Meat-Free Recipes</div>
            </div>
              <div>
              Want to craft your own creative meat-free meals? Get inspiration from other food lovers, or share your own masterpieces!
              </div>
              <div>Transform into a master chef now.</div>
<div>
              <div className={style.food}><input className={style.food1} type="text" placeholder="Search Recipe or Name" /> 
               <div className={style.food3}><select> <option value="">ALL Categories</option>
               <option value="">Appetizers</option>
               <option value="">Bevarages</option>
               
               </select>
                 
               
                </div>
              </div>
              </div>
      <div className= {style.recipe}>
      <div >
      <div className={style.pehla}>
        <div className={style.corner}> <img src="https://www.kindmeal.my/photos/member/0/6-s.jpg" alt=""/> </div>
        <div>KindMealChef </div>
        <div className={style.button}><button>View</button></div>
      </div>
           <div className={style.dusra}>
             <img  src="https://www.kindmeal.my/photos/recipe/1000/1000016-19430-m.jpg" alt="" />
           </div>

            <span className= {style.tisra} >
               <div className={style.tisra1}><img src="https://www.kindmeal.my/images/icon_time_small.png" alt="" />  </div>
               <div className={style.tisra1}><img src="https://www.kindmeal.my/images/icon_heart_small.png" alt="" /></div>
               <div className={style.tisra1}><img src="https://www.kindmeal.my/images/icon_commentbubble_small.png" alt="" /> </div>
            </span>
      </div>
 
      <div >
      <div className={style.pehla}>
        <div className={style.corner}> <img src="https://www.kindmeal.my/photos/member/14/14169-s.jpg" alt=""/> </div>
        <div>KindMealChef </div>
        <div className={style.button}><button>View</button></div>
      </div>
           <div className={style.dusra}>
             <img  src="https://www.kindmeal.my/photos/recipe/1000/1000009-19416-m.jpg" alt="" />
           </div>

            <span className= {style.tisra} >
               <div className={style.tisra1}><img src="https://www.kindmeal.my/images/icon_time_small.png" alt="" />  </div>
               <div className={style.tisra1}><img src="https://www.kindmeal.my/images/icon_heart_small.png" alt="" /></div>
               <div className={style.tisra1}><img src="https://www.kindmeal.my/images/icon_commentbubble_small.png" alt="" /> </div>
            </span>
      </div>

      <div >
      <div className={style.pehla}>
        <div className={style.corner}> <img src="https://www.kindmeal.my/images/default_male-s.jpg" alt=""/> </div>
        <div>KindMealChef </div>
        <div className={style.button}><button>View</button></div>
      </div>
           <div className={style.dusra}>
             <img  src="https://www.kindmeal.my/photos/recipe/112/112274-17285-m.jpg" alt="" />
           </div>

            <span className= {style.tisra} >
               <div className={style.tisra1}><img src="https://www.kindmeal.my/images/icon_time_small.png" alt="" />  </div>
               <div className={style.tisra1}><img src="https://www.kindmeal.my/images/icon_heart_small.png" alt="" /></div>
               <div className={style.tisra1}><img src="https://www.kindmeal.my/images/icon_commentbubble_small.png" alt="" /> </div>
            </span>
      </div>
     

      <div >
        <br />
      <div className={style.pehla}>
        <div className={style.corner}> <img src="https://www.kindmeal.my/images/default_male-s.jpg" alt=""/> </div>
        <div>BluePenguin</div>
        <div className={style.button}><button>View</button></div>
      </div>
           <div className={style.dusra}>
             <img  src="https://www.kindmeal.my/photos/recipe/1039/1039475-58908-m.jpg" alt="" />
           </div>

            <span className= {style.tisra} >
               <div className={style.tisra1}><img src="https://www.kindmeal.my/images/icon_time_small.png" alt="" />  </div>
               <div className={style.tisra1}><img src="https://www.kindmeal.my/images/icon_heart_small.png" alt="" /></div>
               <div className={style.tisra1}><img src="https://www.kindmeal.my/images/icon_commentbubble_small.png" alt="" /> </div>
            </span>
      </div>

     

      <div >
        <br />
      <div className={style.pehla}>
        <div className={style.corner}> <img src="https://www.kindmeal.my/photos/member/11/11401-s.jpg" alt=""/> </div>
        <div>BluePenguin</div>
        <div className={style.button}><button>View</button></div>
      </div>
           <div className={style.dusra}>
             <img  src="https://www.kindmeal.my/photos/recipe/1039/1039471-58904-m.jpg" alt="" />
           </div>

            <span className= {style.tisra} >
               <div className={style.tisra1}><img src="https://www.kindmeal.my/images/icon_time_small.png" alt="" />  </div>
               <div className={style.tisra1}><img src="https://www.kindmeal.my/images/icon_heart_small.png" alt="" /></div>
               <div className={style.tisra1}><img src="https://www.kindmeal.my/images/icon_commentbubble_small.png" alt="" /> </div>
            </span>
      </div>

      <div >
        <br />
      <div className={style.pehla}>
        <div className={style.corner}> <img src="https://www.kindmeal.my/photos/member/11/11401-s.jpg" alt=""/> </div>
        <div>BluePenguin</div>
        <div className={style.button}><button>View</button></div>
      </div>
           <div className={style.dusra}>
             <img  src="https://www.kindmeal.my/photos/recipe/1000/1000013-19421-m.jpg" alt="" />
           </div>

            <span className= {style.tisra} >
               <div className={style.tisra1}><img src="https://www.kindmeal.my/images/icon_time_small.png" alt="" />  </div>
               <div className={style.tisra1}><img src="https://www.kindmeal.my/images/icon_heart_small.png" alt="" /></div>
               <div className={style.tisra1}><img src="https://www.kindmeal.my/images/icon_commentbubble_small.png" alt="" /> </div>
            </span>
      </div>
      <br />

     
  
      
      
      </div>
 
                    {/* 2nd             */}

  
                 <div className={style.last} >
                 <div  >
                 
      <div className={style.pehla}>
        <div className={style.corner}> <img src="https://www.kindmeal.my/photos/member/29/29512-s.jpg" alt=""/> </div>
        <div>KindMealChef</div>
        <div className={style.button}><button>View</button></div>
      </div>
           <div className={style.dusra}>
             <img  src="https://www.kindmeal.my/photos/recipe/1000/1000016-19430-m.jpg" alt="" />
           </div>

            <span className= {style.tisra} >
               <div className={style.tisra1}><img src="https://www.kindmeal.my/images/icon_time_small.png" alt="" /> <label >55 min</label> </div>
               <div className={style.tisra1}><img src="https://www.kindmeal.my/images/icon_heart_small.png" alt="" /></div>
               <div className={style.tisra1}><img src="https://www.kindmeal.my/images/icon_commentbubble_small.png" alt="" /> </div>
            </span>
      </div>
 
      <div >
      <div className={style.pehla}>
        <div className={style.corner}> <img src="https://www.kindmeal.my/images/default_male-s.jpg" alt=""/> </div>
        <div>KindMealChef </div>
        <div className={style.button}><button>View</button></div>
      </div>
           <div className={style.dusra}>
             <img  src="https://www.kindmeal.my/photos/recipe/1039/1039472-58905-m.jpg" alt="" />
           </div>

            <span className= {style.tisra} >
               <div className={style.tisra1}><img src="https://www.kindmeal.my/images/icon_time_small.png" alt="" />  </div>
               <div className={style.tisra1}><img src="https://www.kindmeal.my/images/icon_heart_small.png" alt="" /></div>
               <div className={style.tisra1}><img src="https://www.kindmeal.my/images/icon_commentbubble_small.png" alt="" /> </div>
            </span>
      </div>

      <div >
      <div className={style.pehla}>
        <div className={style.corner}> <img src="https://www.kindmeal.my/images/default_male-s.jpg" alt=""/> </div>
        <div>KindMealChef </div>
        <div className={style.button}><button>View</button></div>
      </div>
           <div className={style.dusra}>
             <img  src="https://www.kindmeal.my/photos/recipe/1039/1039478-58911-m.jpg" alt="" />
           </div>

            <span className= {style.tisra} >
               <div className={style.tisra1}><img src="https://www.kindmeal.my/images/icon_time_small.png" alt="" />  </div>
               <div className={style.tisra1}><img src="https://www.kindmeal.my/images/icon_heart_small.png" alt="" /></div>
               <div className={style.tisra1}><img src="https://www.kindmeal.my/images/icon_commentbubble_small.png" alt="" /> </div>
            </span>
      </div>
     

      <div >
      <br />
      <div className={style.pehla}>
        <div className={style.corner}> <img src="https://www.kindmeal.my/photos/member/38/38334-s.jpg" alt=""/> </div>
        <div>BluePenguin</div>
        <div className={style.button}><button>View</button></div>
      </div>
           <div className={style.dusra}>
             <img  src="https://www.kindmeal.my/photos/recipe/1039/1039453-58877-m.jpg" alt="" />
           </div>

            <span className= {style.tisra} >
               <div className={style.tisra1}><img src="https://www.kindmeal.my/images/icon_time_small.png" alt="" />  </div>
               <div className={style.tisra1}><img src="https://www.kindmeal.my/images/icon_heart_small.png" alt="" /></div>
               <div className={style.tisra1}><img src="https://www.kindmeal.my/images/icon_commentbubble_small.png" alt="" /> </div>
            </span>
      </div>

     

      <div >
      <br />
      <div className={style.pehla}>
        <div className={style.corner}> <img src="https://www.kindmeal.my/images/default_male-s.jpg" alt=""/> </div>
        <div>BluePenguin</div>
        <div className={style.button}><button>View</button></div>
      </div>
           <div className={style.dusra}>
             <img  src="https://www.kindmeal.my/photos/recipe/1039/1039473-58906-m.jpg" alt="" />
           </div>

            <span className= {style.tisra} >
               <div className={style.tisra1}><img src="https://www.kindmeal.my/images/icon_time_small.png" alt="" />  </div>
               <div className={style.tisra1}><img src="https://www.kindmeal.my/images/icon_heart_small.png" alt="" /></div>
               <div className={style.tisra1}><img src="https://www.kindmeal.my/images/icon_commentbubble_small.png" alt="" /> </div>
            </span>
      </div>

      <div >
      <br />
      <div className={style.pehla}>
        <div className={style.corner}> <img src="https://www.kindmeal.my/photos/member/37/37844-s.jpg" alt=""/> </div>
        <div>BluePenguin</div>
        <div className={style.button}><button>View</button></div>
      </div>
           <div className={style.dusra}>
             <img  src="https://www.kindmeal.my/photos/recipe/1039/1039450-58870-m.jpg" alt="" />
           </div>

            <span className= {style.tisra} >
               <div className={style.tisra1}><img src="https://www.kindmeal.my/images/icon_time_small.png" alt="" />  </div>
               <div className={style.tisra1}><img src="https://www.kindmeal.my/images/icon_heart_small.png" alt="" /></div>
               <div className={style.tisra1}><img src="https://www.kindmeal.my/images/icon_commentbubble_small.png" alt="" /> </div>
            </span>
      </div>
                  
                 </div>
    </div>
    
  )
}

export default Recipes