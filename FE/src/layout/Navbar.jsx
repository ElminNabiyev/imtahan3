import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MainContext } from '../context/MainProvider'
import { WishlistContext } from '../context/WishlistProvider'
import "./Navbar.scss";
function Navbar() {
  const { basket } = useContext(MainContext)
  const { wishlist } = useContext(WishlistContext)

  return (
    <header>
      <nav>
        <div className="container">
          <img src="https://preview.colorlib.com/theme/shop/img/logo.png.webp" alt="" />
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/add"}>Add</Link>
            </li>
            <li>
              <Link to={"/admin"}>Admin</Link>
            </li>
            <li>
              <Link to={"/wishlist"}>Wishlist ({wishlist.length})</Link>
            </li>
            <li>
              <Link to={"/basket"}>Basket ({basket.length})</Link>
            </li>
          </ul>
          <button className='menu'><i className="fa-solid fa-bars"></i></button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar