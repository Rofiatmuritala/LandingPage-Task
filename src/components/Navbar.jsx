import React from "react";

function Navbar() {
  return (
    <header class="bg">
      <div class="items">
        <div class="top-items">
          <div class="home">
            <h2 class="logo">
              <a href="Index.html">SwankyShrugs</a>
            </h2>
          </div>
          <nav>
            <ul>
              <li>
                <a class="current" href="Index.html">
                  Home Finds
                </a>
              </li>
              <li>
                <a href="Fashion Finds.html">Fashion Finds</a>
              </li>
              <li>
                <a href="">Shop</a>
              </li>
              <li>
                <a href="product.html">Inspiration</a>
              </li>
              <li>
                <a href="contact.html">Contact Us</a>
              </li>
            </ul>
          </nav>
          <div>
            <button type="submit" class="btn">
              SIGN UP
            </button>
          </div>
        </div>

        <div class="header-text">
          <h1>WELCOME TO SWANKYSHRUG</h1>
          <p>Free Crochet Patterns</p>

          <a href="#">Shop Now</a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
