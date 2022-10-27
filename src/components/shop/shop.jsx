import React, { Fragment,  } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import "./shop.css"
import f1 from './media/f1.jpg';
import star from './media/star.png'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import {selectCart} from '../../cart-slice'

function Shop () {
const cartt = useSelector(selectCart);
console.log(cartt);
  return (
  <Fragment>
    <Header/>
                <section  id="prodetails" className="section">
      <div className="sproimg">
        <img src={cartt.img} width="100%" alt="" id="mainimg"/>
      </div>
      <div className="sprodetails">
        <h6>{cartt.title}</h6>
        <h2>د.م  {cartt.price}</h2>
        <h4>{cartt.description}</h4>
        <button key={Math.random()} 
        className="btn btn-primary buybtn">للطلب عبر الواتساب</button>
        <h4>نفاصيل المنتج</h4>
      </div>
    </section>
    <Footer/>
  </Fragment>
  )
}

export default Shop;

