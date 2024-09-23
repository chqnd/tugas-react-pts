import React from 'react'
import '../Content1/Content1.css'
import Image from '../../assets/bihun.gif'


const Content1 = () => {
  return (
    <>
    <div className="content">

    <div className="teks">
        <h1>Cooking by Mama</h1>
        <br />
        <h3>Sebuah Web Yang Menyediakan Berbagai Resep <br />Makanan Yang Selalu Dibuat Oleh Ibu </h3> 
        <br />
        <a href="https://cookpad.com/id/resep/3174697-bihun-goreng-special" className="cta-button">Disini</a>
        <br />
        <br />
        <p>Klik untuk melihat resep Bihun Goreng</p>
    </div>
    <div className="image-section">
      <img 
      src={Image} 
      alt=""
      className='Image' />
    </div>
    
    </div>

    </>
  )
}

export default Content1