import React, { useEffect } from "react";
import HelpRoute from "./HelpRoute";
import styled from "./Pages.module.css";
const HelpMerchant = () => {
  useEffect(()=>{
    document.title="Help-Merchant"
  })
  return (
    <div className={styled.helpmain}>
      <div className={styled.sidebarMainLeft}>
        <HelpRoute />
      </div>
      <div className={styled.sidebarMainContent}>
        <h2>Merchant Help</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad provident
          nihil nobis a, dolorem in sunt cumque reiciendis! Unde perferendis
          voluptatum voluptate architecto facilis eligendi consectetur, quia
          laboriosam sapiente harum!
        </p>
        <br />
        <hr />
        <br />
        <h2>Kind Of Merchant</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas sit
          libero molestias harum facilis tenetur eius quaerat adipisci. Omnis
          cum eligendi est labore. Vero doloribus provident fugit sit ad
          cumque!. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Itaque reiciendis quisquam magni numquam rem sint doloribus, excepturi
          id dignissimos ullam, magnam iusto! Labore nemo inventore officiis
          quaerat tempora adipisci molestiae? Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Ad corporis exercitationem repudiandae
          optio quisquam odio accusamus id sint autem, placeat praesentium,
          aliquid incidunt provident vel tenetur, impedit magnam est fugiat?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          odio cupiditate at cum facilis necessitatibus animi nostrum nisi, illo
          voluptatem nobis corrupti. Eligendi saepe autem dolores minus atque
          quaerat ratione?
        </p>
        <br />
        <hr />
        <br />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas sit
          libero molestias harum facilis tenetur eius quaerat adipisci. Omnis
          cum eligendi est labore. Vero doloribus provident fugit sit ad
          cumque!. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Itaque reiciendis quisquam magni numquam rem sint doloribus, excepturi
          id dignissimos ullam, magnam iusto! Labore nemo inventore officiis
          quaerat tempora adipisci molestiae? Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Ad corporis exercitationem repudiandae
          optio quisquam odio accusamus id sint autem, placeat praesentium,
          aliquid incidunt provident vel tenetur, impedit magnam est fugiat?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          odio cupiditate at cum facilis necessitatibus animi nostrum nisi, illo
          voluptatem nobis corrupti. Eligendi saepe autem dolores minus atque
          quaerat ratione?
        </p>
      </div>
    </div>
  );
};

export default HelpMerchant;
