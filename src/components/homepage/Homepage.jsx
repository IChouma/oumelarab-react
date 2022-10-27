import React from 'react';
import Header from '../header/Header';
import About from '../about/About';
import Blog from '../Blog/Blog'
import Home from '../home/Home';
import Footer from '../footer/Footer';
import Contact from '../Contact/Contact';
import Menu from '../menu/Menu';
import Products from '../products/Products';
import Review from '../Review/Review';
import {products} from '../../api/products'

function Homepage() {
  
  return (
<>
    <Header />
    <Home />
    <About />
    <Menu products={products}/>
    <Products products={products}/>
    <Review/>
    <Contact />
    <Blog />
    <Footer />
</>
     
  )
}

export default Homepage
