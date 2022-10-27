import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {cart} from '../../cart-slice'
import img2 from '../../images/img2.png';
import img3 from '../../images/img3.webp';
import img4 from '../../images/img4.png';
import img5 from '../../images/img5.png';
import img6 from '../../images/img6.png';
import './Products.css'
function Products({products}) {
        const dispatch=useDispatch();
    const navigate=useNavigate ();

    const productss=products.map((product,index)=>{
        return(
                    <div class="box" onClick={()=>{dispatch(cart(product));navigate('/product')}}>
            <div class="icons">
                <a href="#" class="fas fa-shopping-cart" title='شارك المنتج'></a>
                <a href="#" class="fas fa-heart" title='أعجبني'></a>
                <a href="#" class="fas fa-eye" title='تفاصيل  المنتج'></a>
            </div>
            <div class="image">
                <img src={product.img} alt=""/>
            </div>
            <div class="content">
                <h3>{product.title}</h3>
                <br />
                {/* <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                </div> */}
                <div class="price"> {product.price}  <span>55.99</span><br />د,م </div>
            <a href="#" class="btn buynow"> اشتر الان  <i class="fa-brands fa-whatsapp"></i></a>

            </div>
        </div>
        )
    })
  return (
<section class="products" id="products">

    <h1 class="heading"> منت<span>جاتنا</span> </h1>

    <div class="box-container">
        {productss}
    </div>

</section>

  )
}

export default Products
