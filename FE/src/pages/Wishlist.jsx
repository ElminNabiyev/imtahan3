import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async';
import { WishlistContext } from '../context/WishlistProvider';

function Wishlist() {
  const { wishlist, removeWishlist } = useContext(WishlistContext)

  return (
    <>
      <Helmet>
        <title>Wishlist</title>
      </Helmet>
      {wishlist.map(x =>
        <div key={x._id}>
          <img width={400} src={x.imgURL} alt="" />
          <h1>{x.name}</h1>
          <p>{x.price}$</p>
          <button onClick={() => removeWishlist(x)}>remove from Wishlist</button>
        </div>

      )}
    </>
  )
}

export default Wishlist