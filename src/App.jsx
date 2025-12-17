import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/home.jsx'
import About from './pages/about.jsx'
import Contac from './pages/contact.jsx'
import Collection from './pages/collection.jsx'
import Cart from './pages/cart.jsx'
import Login from './pages/login.jsx'
import Orders from './pages/orders.jsx'
import PlaceOrder from './pages/placeorder.jsx'
import Product from './pages/product.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import SearchBar from './components/SearchBar.jsx'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>

  
   <Navbar/>
   <SearchBar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contac/>} />
      <Route path='/collection' element={<Collection/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/orders' element={<Orders/>} />
      <Route path='/placeorder' element={<PlaceOrder/>} />
      <Route path='/product/:productid' element={<Product/>} />
    </Routes>
    <Footer/>
    </div>

  )
  
}

export default App