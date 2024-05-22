import React, { createContext } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

export const WishlistContext = createContext()

function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useLocalStorage("wishlist", [])

  function addWishlist(item) {
    const index = wishlist.find(x => x._id === item._id)
    !index ? setWishlist([...wishlist, item]) : null
  }
  function removeWishlist(item) {
    setWishlist(wishlist.filter(x => x._id !== item._id))
  }
  return (
    <WishlistContext.Provider value={{ wishlist, addWishlist, removeWishlist }}>{children}</WishlistContext.Provider>
  )
}

export default WishlistProvider