import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { getDatasByID } from '../service/service';


function Detail() {
  const [datas, setDatas] = useState([])
  const {id}=useParams()

  async function getDataId() {
    const data=await getDatasByID(id)
    setDatas(data)
  }

  useEffect(() => {
    getDataId()
  }, [])
  
  return (
    <>
    <Helmet>
      <title>Details</title>
    </Helmet>
    <h1 style={{fontSize:"100px",textAlign:"center"}}>Details</h1>
    <div>
      <img width={400} src={datas.imgURL} alt="" />
      <h2>{datas.name}</h2>
      <p>{datas.price}$</p>
    </div>
  </>
  )
}

export default Detail