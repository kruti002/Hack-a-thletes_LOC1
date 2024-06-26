import React from "react";
import "./product_display.css";
export default function Product() {
  return (
    <div class="product-container">
      <div class="box">
        <div class="product__img">
          <img src="https://i.ibb.co/xSK7fcJ/oculus.png" alt="" />
        </div>

        <div class="product__video">
          <div class="video">
            <i class="fas fa-play"></i>
          </div>
        </div>

        <div class="product__disc">
          <div class="product__disc--content">
            <div class="disc__content--about">
              <h1>Oculus Rift S</h1>
              <span>get ready to step into a new world</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Consequatur hic minus nihil obcaecati, ratione repellendus saepe
                sint tenetur totam ullam. Accusantium aspernatur ducimus impedit
                perferendis quisquam repellendus similique ullam vitae!
              </p>
            </div>

            <div class="product__view--more">
              <p>view all specifications</p>
              <div class="view__more--block"></div>
            </div>
          </div>
        </div>

        <div class="product_buttons">
          <button class="btn wishlist">wishlist</button>
          <button class="btn buy">buy</button>
        </div>
      </div>
    </div>
  );
}
