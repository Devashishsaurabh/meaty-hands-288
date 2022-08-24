import React from 'react'
import styles from "./KindMoments.module.css"

const KindMoments = () => {
  return (
    <div>
     <div className={styles.top}>

      <div className={styles.topleft}>
        <div className={styles.box1}>
          <div className={styles.toplefttop}>
           <div className={styles.headingptag}>Kind Moments</div>
           <div className={styles.headingptag}>| Saving Lives with Yummy Photos</div>
          </div>
          <div className={styles.about}> 
               Discover new, delicious meat-free cuisines enjoyed by other
                compassionate food lovers. Share your interesting KindMoments,
                and build your own fans and followers to encourage kind, healthy
                meals.
          </div>
          <div className={styles.about}>Download our mobile app to easily showcase your masterpieces and
                interact with food lovers.</div>
          <div className={styles.about}>Get started sharing your tasty moments now.</div>
        </div>
      </div>



      <div className={styles.topright}></div>

     </div>
    </div>
  )
}

export default KindMoments