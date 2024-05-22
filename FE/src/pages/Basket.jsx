import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async';
import { MainContext } from '../context/MainProvider';


function Basket() {
  const { basket, removeBasket ,addBasket,decreaseBasket} = useContext(MainContext)

  return (
    <>
      <Helmet>
        <title>Basket</title>
      </Helmet>
      {basket.map(x =>
        <div key={x._id}>
          <img width={400} src={x.imgURL} alt="" />
          <h3>{x.name}</h3>
          <p>{x.price}</p>
          <button onClick={()=>removeBasket(x)}>Remove from basket</button>
          <button onClick={()=>decreaseBasket(x)}>-</button>
          <span>{x.count}</span>
          <button onClick={()=>addBasket(x)}>+</button>
        </div>
      )}
    </>
  )
}

export default Basket