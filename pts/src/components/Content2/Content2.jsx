import React from 'react'
import '../Content2/Content2.css'
import Jeruk from '../../assets/esjeruk.png'

const Content2 = () => {
  return (
    <>
    <div className="main">
        <div className="title">
            <h1>Tentang Web ini</h1>
        </div>
        <div className="content">
            <img src={Jeruk}
            alt="" className="image" />
            <h3>Web ini dibuat untuk memudahkan kita dalam mencari  <br />resep makanan dan minuman daerah.</h3>
        </div>
    </div>
    </>
  )
}

export default Content2