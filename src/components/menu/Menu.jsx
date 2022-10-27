import React from 'react';
import { useNavigate } from 'react-router-dom';
import {cart} from '../../cart-slice'
import { useDispatch } from 'react-redux';
import img2 from '../../images/img2.png';
import img3 from '../../images/img3.webp';
import img4 from '../../images/img4.png';
import img5 from '../../images/img5.png';
import img6 from '../../images/img6.png';
import './Menu.css'
function Menu({products}) {
    const dispatch=useDispatch();
    const navigate=useNavigate ();
    const productss=products.map((product,index)=>{
        return(
            <div key={index} class="box" onClick={()=>{dispatch(cart(product));navigate('/product')}}>
            <img src={product.img} alt=""/>
            <h3>{product.title}</h3>
            <div class="price">{product.price}  <span>55.99</span><br />د,م  </div>
            <a href="#" class="btn buynow"><i class="fa-brands fa-whatsapp"></i>اشتر الان</a>
        </div>
        )
    })
  return (
<section class="menu" id="menu">

    <h1 class="heading">الق<span>ائمة</span> </h1>

    <div class="box-container">

{productss}



    </div>

</section>
  )
}

export default Menu
