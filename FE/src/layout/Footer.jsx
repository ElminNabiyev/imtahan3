import React from 'react'
import "./Footer.scss";

function Footer() {
  return (
    <footer>
      <div className="footer_container">
        <div>
          <h6>About Us</h6>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua</p>
        </div>
        <div>
          <h6>Newsletter</h6>
          <p>Stay update with our latest</p>
          <input type="text" placeholder='Enter Email' />
          <button>→</button>
        </div>
        <div>
          <h6>Instragram Feed</h6>
          <div className="imgs_footer">
            <div className="footer_div">
              <img src="https://preview.colorlib.com/theme/shop/img/i1.jpg.webp" alt="" />
              <img src="https://preview.colorlib.com/theme/shop/img/i2.jpg.webp" alt="" />
              <img src="https://preview.colorlib.com/theme/shop/img/i3.jpg.webp" alt="" />
              <img src="https://preview.colorlib.com/theme/shop/img/i4.jpg.webp" alt="" />
            </div>
            <div className="footer_div">
              <img src="https://preview.colorlib.com/theme/shop/img/i5.jpg.webp" alt="" />
              <img src="https://preview.colorlib.com/theme/shop/img/i6.jpg.webp" alt="" />
              <img src="https://preview.colorlib.com/theme/shop/img/i7.jpg.webp" alt="" />
              <img src="https://preview.colorlib.com/theme/shop/img/i8.jpg.webp" alt="" />
            </div>
          </div>
        </div>
        <div>
          <h6>Follow Us</h6>
          <p>Let us be social</p>
          <div className="logos">
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-solid fa-basketball"></i>
            <i className="fa-brands fa-behance"></i>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer