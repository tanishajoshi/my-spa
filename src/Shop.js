import React, { Component } from "react";
import "./shop.css";
 
class Shop extends Component {
  render() {
    return (
      <div class="container">
            
        <div class="gallery">
            <a target="_blank" href="img_mat.jpg">
            <img src="https://cdn.shopify.com/s/files/1/1728/2157/products/05-63623_5MM-YOGA-MAT-WILD-AUBERGINE_A_1024x1024.jpg?v=1570823523" alt="Mat" width="150" height="100"/>
            </a>
        <div class="desc">Yoga Mat</div>
        </div>

        <div class="gallery">
            <a target="_blank" href="img_block.jpg">
            <img src="https://i5.walmartimages.com/asr/909b2044-58ba-47ad-a191-57ad696f1443.173457eff7555629bc1d5e1cd5b3b08e.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF" alt="Blocks" width="150" height="100"/>
            </a>
            <div class="desc">Yoga Support Block</div>
        </div>

        <div class="gallery">
            <a target="_blank" href="img_diffuser.jpg">
            <img src="https://mobileimages.lowes.com/productimages/c7e695ea-f35c-4457-b3db-aef87ece2636/12173276.jpg?size=pdhism" alt="Oil Diffuser" width="150" height="100"/>
            </a>
            <div class="desc">Oil Diffuser</div>
        </div>

        <div class="gallery">
            <a target="_blank" href="img_bag.jpg">
            <img src="https://m.media-amazon.com/images/I/51LLBuz4tsL._AC_.jpg" alt="Yoga Bag" width="150" height="100"/>
            </a>
        <div class="desc">Yoga Bag</div>
        </div>
            

      </div>
      
        
      

    );
  }
}
 
export default Shop;