import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { deleteData, getDatas } from '../service/service';


function Admin() {
  const [inp, setInp] = useState("")
  const [datas, setDatas] = useState([])

  async function getProducts() {
    const data = await getDatas()
    setDatas(data)
  }

  useEffect(() => {
    getProducts()
  }, [])
  async function deleteDatas(id) {
    const data=await deleteData(id)
    getDatas()
  }


  function azalan(category) {
    setDatas(datas.toSorted((a, b) => (a[category] > b[category]) ? 1 : ((b[category] > a[category]) ? -1 : 0)))
  }
  function artan(category) {
    setDatas(datas.toSorted((a, b) => (a[category] < b[category]) ? 1 : ((b[category] < a[category]) ? -1 : 0)))
  }

  return (
    <>
      <Helmet>
        <title>Admin Panel</title>
      </Helmet>
      <input onChange={(e) => setInp(e.target.value)} type="text" placeholder='Search...' />
      <button onClick={() => azalan("name")} >A-Z</button>
      <button onClick={() => artan("name")} >Z-A</button>
      <button onClick={() => azalan("price")} >artan</button>
      <button onClick={() => artan("price")} >AZALAN</button>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Price</td>
            <td>Description</td>
            <td>Delete</td>
          </tr>
        </thead>
        <tbody>
          {datas.filter(x => x.name.toLowerCase().includes(inp.toLowerCase().trim())).map(x =>
            <tr key={x._id}>
              <td><img width={600} src={x.imgURL} alt="" />{x.name}</td>
              <td>{x.price}$</td>
              <td>{x.des}</td>
              <td><button onClick={()=>deleteDatas(x._id)}>Delete</button></td>
            </tr>)}
        </tbody>
      </table>
    </>
  )
}

export default Admin
