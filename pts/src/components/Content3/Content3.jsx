import React from 'react'
import '../Content3/Content3.css'
import Gambar1 from '../../assets/rendang.jpg'
import Gambar2 from '../../assets/nasi-goreng.jpg'
import Gambar3 from '../../assets/es-cincau.jpg'


const Content3 = () => {
  return (
    <>
    <div className="main-cntn">
        <div className="judul">
            <h1>Pencarian Terbanyak</h1>
        </div> 
        <div className="image-container">
      <ul className="image-list">
        <li>
          <div className="image-item">
            <p className="text-overlay">Rendang</p>
            <img src={Gambar1} alt="Gambar 1" />
          </div>
        </li>
        <li>
          <div className="image-item">
            <p className="text-overlay">Nasi Goreng</p>
            <img src={Gambar2} alt="Gambar 2" />
          </div>
        </li>
        <li>
          <div className="image-item">
            <p className="text-overlay">Es Cincau</p>
            <img src={Gambar3} alt="Gambar 3" />
          </div>
        </li>
      </ul>
    </div>
    </div>
    </>
  )
}

export default Content3