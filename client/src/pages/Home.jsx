import React from 'react'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import Products from '../components/Products'
import Slider from '../components/Slider'
import Newsletter from '../components/Newsletter'

const Home = () => {
  return (
    <div>
        <Announcement/>
        <NavBar/>
        <Slider/>
        <Categories/>
        <Products/>
        <Newsletter/>
        <Footer/>

        </div>
  )
}

export default Home