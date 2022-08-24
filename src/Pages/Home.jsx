import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Slider from '../Components/Slider'

const Home = () => {
  return (
   
    <div>
       <Navbar/>
            <h1>Home Page</h1>
            <Slider/>
          <Footer/>
    </div>
  )
}

export default Home