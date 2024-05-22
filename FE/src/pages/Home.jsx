import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { MainContext } from '../context/MainProvider';
import { WishlistContext } from '../context/WishlistProvider';
import { getDatas } from '../service/service';
import "./Home.scss"

function Home() {
  const [datas, setDatas] = useState([])
  const { addBasket } = useContext(MainContext)
  const { addWishlist } = useContext(WishlistContext)

  async function getProducts() {
    const data = await getDatas()
    setDatas(data)
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <section className="hero">
        <div className='hero_img'>
          <img src="https://preview.colorlib.com/theme/shop/img/header-img.png.webp" alt="" />
        </div>
        <div className="writes">
          <span>Flat <span>75%Off</span></span>
          <h1>IT’S HAPPENING
            THIS SEASON!</h1>
          <button>PURCHASE NOW</button>
        </div>
      </section>
      <section className='shop'>
        <div className='shop_writes'>
          <h4>Shop for Different Categories</h4>
          <p>Who are in extremely love with eco friendly system.</p>
        </div>
        <div className="boxes">
          <div className="imgs">
            <div className="third_img">
              <img src="https://preview.colorlib.com/theme/shop/img/c1.jpg.webp" alt="" />
              <img src="https://preview.colorlib.com/theme/shop/img/c2.jpg" alt="" />
            </div>
            <img style={{ marginTop: "20px" }} src="https://preview.colorlib.com/theme/shop/img/c3.jpg" alt="" />
          </div>
          <img src="https://preview.colorlib.com/theme/shop/img/c4.jpg" alt="" />
          <div className="second_img">
          </div>
        </div>
      </section>
      <section className="all_products">
        <div className="title">
          <h4>New realeased Products for Men</h4>
          <p>Who are in extremely love with eco friendly system.</p>
        </div>
        <div className="products">
          <div className='card'>
            <img src="https://preview.colorlib.com/theme/shop/img/l1.jpg.webp" alt="" />
            <h5>Long Sleeve shirt</h5>
            <p style={{ fontSize: "24px", fontWeight: "600" }}>$150.00</p>
          </div>
          <div className='card'>
            <img src="https://preview.colorlib.com/theme/shop/img/l2.jpg.webp" alt="" />
            <h5>Long Sleeve shirt</h5>
            <p style={{ fontSize: "24px", fontWeight: "600" }}>$150.00</p>
          </div>
          <div className='card'>
            <img src="https://preview.colorlib.com/theme/shop/img/l3.jpg" alt="" />
            <h5>Long Sleeve shirt</h5>
            <p style={{ fontSize: "24px", fontWeight: "600" }}>$150.00</p>
          </div>
          <div className='card'>
            <img src="https://preview.colorlib.com/theme/shop/img/l4.jpg" alt="" />
            <h5>Long Sleeve shirt</h5>
            <p style={{ fontSize: "24px", fontWeight: "600" }}>$150.00</p>
          </div>
        </div>
        <div className="overlay"></div>
      </section>
      <section className="fetch_products">
        <div className="title">
          <h4 style={{ color: "black" }}>New realeased Products for Men</h4>
          <p style={{ color: "gray" }}>Who are in extremely love with eco friendly system.</p>
        </div>
        <div className='products grid1fr'>
          {datas.map(x =>
            <div key={x._id} className='card'>
              <div className="product_img_div">
                <img className='product_photo' src={x.imgURL} alt="" />
              </div>
              <div className="infos">
                <h2 style={{ color: "black" }}>{x.name}</h2>
                <h3 style={{ color: "black" }}>${x.price}</h3>
              </div>
              <div className="btns">
                <button onClick={() => addBasket(x)}>Add to Cart</button>
                <button><Link style={{ color: "black" }} to={`/detail/${x._id}`}>Go Details</Link></button>
                <button onClick={() => addWishlist(x)}>Add to Wishlist</button>
              </div>
            </div>
          )}
        </div>
      </section>
      <section style={{padding:"50px 0px"}} className='mini_photos'>
        <div className="title">
          <h4 style={{ color: "black" }}>Related Searched Products</h4>
          <p style={{ color: "gray" }}>Who are in extremely love with eco friendly system.</p>
        </div>
        <div className="all">
          <div className='blacklaceheels'>
            <div className='product'>
              <div className='mini_photo'>
                <img src="https://preview.colorlib.com/theme/shop/img/r1.jpg" alt="" />
              </div>
              <div className='tags'>
                <h5 style={{ fontWeight: "400", fontSize: "14px" }}>Black lace Heels</h5>
                <i class="fa-solid fa-tag"></i>
                <span style={{ fontWeight: "600" }}>$189.00</span>
              </div>
            </div>
            <div className='product'>
              <div className='mini_photo'>
                <img style={{ borderRadius: "0.1rem" }} src="https://preview.colorlib.com/theme/shop/img/r2.jpg" alt="" />
              </div>
              <div className='tags'>
                <h5 style={{ fontWeight: "400", fontSize: "14px" }}>Black lace Heels</h5>
                <i class="fa-solid fa-tag"></i>
                <span style={{ fontWeight: "600" }}>$189.00</span>
              </div>
            </div>
            <div className='product'>
              <div className='mini_photo'>
                <img style={{ borderRadius: "0.1rem" }} src="https://preview.colorlib.com/theme/shop/img/r3.jpg" alt="" />
              </div>
              <div className='tags'>
                <h5 style={{ fontWeight: "400", fontSize: "14px" }}>Black lace Heels</h5>
                <i class="fa-solid fa-tag"></i>
                <span style={{ fontWeight: "600" }}>$189.00</span>
              </div>
            </div>
            <div className='product'>
              <div className='mini_photo'>
                <img style={{ borderRadius: "0.1rem" }} src="https://preview.colorlib.com/theme/shop/img/r4.jpg" alt="" />
              </div>
              <div className='tags'>
                <h5 style={{ fontWeight: "400", fontSize: "14px" }}>Black lace Heels</h5>
                <i class="fa-solid fa-tag"></i>
                <span style={{ fontWeight: "600" }}>$189.00</span>
              </div>
            </div>
          </div>
          <div className='blacklaceheels'>
            <div className='product'>
              <div className='mini_photo'>
                <img style={{ borderRadius: "0.1rem" }} src="https://preview.colorlib.com/theme/shop/img/r5.jpg" alt="" />
              </div>
              <div className='tags'>
                <h5 style={{ fontWeight: "400", fontSize: "14px" }}>Black lace Heels</h5>
                <i class="fa-solid fa-tag"></i>
                <span style={{ fontWeight: "600" }}>$189.00</span>
              </div>
            </div>
            <div className='product'>
              <div className='mini_photo'>
                <img style={{ borderRadius: "0.1rem" }} src="https://preview.colorlib.com/theme/shop/img/r6.jpg" alt="" />
              </div>
              <div className='tags'>
                <h5 style={{ fontWeight: "400", fontSize: "14px" }}>Black lace Heels</h5>
                <i class="fa-solid fa-tag"></i>
                <span style={{ fontWeight: "600" }}>$189.00</span>
              </div>
            </div>
            <div className='product'>
              <div className='mini_photo'>
                <img style={{ borderRadius: "0.1rem" }} src="https://preview.colorlib.com/theme/shop/img/r7.jpg" alt="" />
              </div>
              <div className='tags'>
                <h5 style={{ fontWeight: "400", fontSize: "14px" }}>Black lace Heels</h5>
                <i class="fa-solid fa-tag"></i>
                <span style={{ fontWeight: "600" }}>$189.00</span>
              </div>
            </div>
            <div className='product'>
              <div className='mini_photo'>
                <img style={{ borderRadius: "0.1rem" }} src="https://preview.colorlib.com/theme/shop/img/r8.jpg" alt="" />
              </div>
              <div className='tags'>
                <h5 style={{ fontWeight: "400", fontSize: "14px" }}>Black lace Heels</h5>
                <i class="fa-solid fa-tag"></i>
                <span style={{ fontWeight: "600" }}>$189.00</span>
              </div>
            </div>
          </div>
          <div className='blacklaceheels'>
            <div className='product'>
              <div className='mini_photo'>
                <img style={{ borderRadius: "0.1rem" }} src="https://preview.colorlib.com/theme/shop/img/r9.jpg" alt="" />
              </div>
              <div className='tags'>
                <h5 style={{ fontWeight: "400", fontSize: "14px" }}>Black lace Heels</h5>
                <i class="fa-solid fa-tag"></i>
                <span style={{ fontWeight: "600" }}>$189.00</span>
              </div>
            </div>
            <div className='product'>
              <div className='mini_photo'>
                <img style={{ borderRadius: "0.1rem" }} src="https://preview.colorlib.com/theme/shop/img/r10.jpg" alt="" />
              </div>
              <div className='tags'>
                <h5 style={{ fontWeight: "400", fontSize: "14px" }}>Black lace Heels</h5>
                <i class="fa-solid fa-tag"></i>
                <span style={{ fontWeight: "600" }}>$189.00</span>
              </div>
            </div>
            <div className='product'>
              <div className='mini_photo'>
                <img style={{ borderRadius: "0.1rem" }} src="https://preview.colorlib.com/theme/shop/img/r11.jpg" alt="" />
              </div>
              <div className='tags'>
                <h5 style={{ fontWeight: "400", fontSize: "14px" }}>Black lace Heels</h5>
                <i class="fa-solid fa-tag"></i>
                <span style={{ fontWeight: "600" }}>$189.00</span>
              </div>
            </div>
            <div className='product'>
              <div className='mini_photo'>
                <img style={{ borderRadius: "0.1rem" }} src="https://preview.colorlib.com/theme/shop/img/r12.jpg" alt="" />
              </div>
              <div className='tags'>
                <h5 style={{ fontWeight: "400", fontSize: "14px" }}>Black lace Heels</h5>
                <i class="fa-solid fa-tag"></i>
                <span style={{ fontWeight: "600" }}>$189.00</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home