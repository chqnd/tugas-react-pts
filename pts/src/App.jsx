import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Content1 from './components/Content1/Content1'
import Content2 from './components/Content2/Content2'
import Content3 from './components/Content3/Content3'
import Footer from './components/Footer/Footer'


const App = () => {
  return (
    <div className="container">
      <Navbar/>
      <Content1/>
      <Content2/>
      <Content3/>
      <Footer/>

    </div>
  )
}

export default App