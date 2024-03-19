import React from "react";
import ShopImage1 from "../assets/shrugs/image1.jpg";
import ShopImage2 from "../assets/shrugs/image2.jpg";
import ShopImage3 from "../assets/shrugs/image3.jpg";
import ShopImage4 from "../assets/shrugs/image4.jpg";
import ShopImage5 from "../assets/shrugs/image5.jpg";
import ShopImage6 from "../assets/shrugs/image6.jpg";
import ShopImage7 from "../assets/shrugs/image7.jpg";
import ShopImage8 from "../assets/shrugs/image8.jpg";
import ShopImage9 from "../assets/shrugs/image9.jpg";
import ShopImage10 from "../assets/shrugs/image10.jpg";
import ShopImage11 from "../assets/shrugs/image11.jpg";
import ShopImage12 from "../assets/shrugs/image12.jpg";

export default function Shop() {
  return (
    <section class="Products">
      <h2 class="title">Shop</h2>

      <div class="product-items">
        <div class="product-card">
          <img src={ShopImage1} alt="Shrugs" />
          <h2>Cropped Mesh Top</h2>
          <p>GHC 100 </p>
          <p>Sales ends in 24hours</p>
        </div>

        <div class="product-card">
          <img src={ShopImage2} alt="Shrugs" />
          <h2>Cropped Mesh Top</h2>
          <p>Price </p>
          <p>Sales ends in 24hours</p>
        </div>

        <div class="product-card">
          <img src={ShopImage3} alt="Shrugs" />
          <h2>Cropped Mesh Top</h2>
          <p>Price </p>
          <p>Sales ends in 24hours</p>
        </div>
        <div class="product-card">
          <img src={ShopImage4} alt="Shrugs" />
          <h2>Cropped Mesh Top</h2>
          <p>Price </p>
          <p>Sales ends in 24hours</p>
        </div>
        <div class="product-card">
          <img src={ShopImage5} alt="Shrugs" />
          <h2>Cropped Mesh Top</h2>
          <p>Price </p>
          <p>Sales ends in 24hours</p>
        </div>
        <div class="product-card">
          <img src={ShopImage6} alt="Shrugs" />
          <h2>Cropped Mesh Top</h2>
          <p>Price </p>
          <p>Sales ends in 24hours</p>
        </div>
        <div class="product-card">
          <img src={ShopImage7} alt="Shrugs" />
          <h2>Cropped Mesh Top</h2>
          <p>Price </p>
          <p>Sales ends in 24hours</p>
        </div>
        <div class="product-card">
          <img src={ShopImage8} alt="Shrugs" />
          <h2>Cropped Mesh Top</h2>
          <p>Price </p>
          <p>Sales ends in 24hours</p>
        </div>
        <div class="product-card">
          <img src={ShopImage9} alt="Shrugs" />
          <h2>Cropped Mesh Top</h2>
          <p>Price </p>
          <p>Sales ends in 24hours</p>
        </div>
        <div class="product-card">
          <img src={ShopImage10} alt="Shrugs" />
          <h2>Cropped Mesh Top</h2>
          <p>Price </p>
          <p>Sales ends in 24hours</p>
        </div>
        <div class="product-card">
          <img src={ShopImage11} alt="Shrugs" />
          <h2>Cropped Mesh Top</h2>
          <p>Price </p>
          <p>Sales ends in 24hours</p>
        </div>
        <div class="product-card">
          <img src={ShopImage12} alt="Shrugs" />
          <h2>Cropped Mesh Top</h2>
          <p>Price </p>
          <p>Sales ends in 24hours</p>
        </div>
      </div>

      <div>
        <button type="submit" class="btn">
          View All
        </button>
      </div>
    </section>
  );
}
