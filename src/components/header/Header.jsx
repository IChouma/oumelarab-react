import React, {Fragment, useRef, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import './header.css'
import Logo from "./logo.png"

function  Header() {
    const [active,setActive]=useState(false)
    const [search,setSearch]=useState(false)
    return (
   <header class="header">

    <a href="#" class="logo">
        <img src={Logo} alt=""/>
    </a>

    <nav class={`navbar ${active===true?"active":""}`}>
        <a href="/">الرئيسية</a>
        <a href="#about" onClick={()=>setActive(false)}>من نحن</a>
        <a href="#menu" onClick={()=>setActive(false)}>القائمة</a>
        <a href="#products" onClick={()=>setActive(false)}>المنتجات</a>
        <a href="#contact" onClick={()=>setActive(false)}>اتصل بنا</a>
        {/* <a href="#blogs">المقالات</a> */}
    </nav>

    <div class="icons">
        {/* <div class="fas fa-search" id="search-btn"
        onClick={()=>setSearch(!search)}></div> */}
        <a href="#products"><div class="fas fa-shopping-cart" id="cart-btn"></div></a>
        <div class="fas fa-bars" id="menu-btn" 
        onClick={()=>setActive(!active)}
        ></div>
    </div>

    <div class={`search-form  ${search===true?"active":""}`}>
        <input type="search" id="search-box" placeholder="search here..."/>
        <label for="search-box" class="fas fa-search"></label>
    </div>

    <div class="cart-items-container">
        <div class="cart-item">
            <span class="fas fa-times"></span>
            <img src="images/img2.png" alt=""/>
            <div class="content">
                <h3>cart item 01</h3>
                <div class="price">$35.99/-</div>
            </div>
        </div>
        <div class="cart-item">
            <span class="fas fa-times"></span>
            <img src="images/img3.webp" alt=""/>
            <div class="content">
                <h3>cart item 02</h3>
                <div class="price">$35.99/-</div>
            </div>
        </div>
        <div class="cart-item">
            <span class="fas fa-times"></span>
            <img src="images/img4.png" alt=""/>
            <div class="content">
                <h3>cart item 03</h3>
                <div class="price">$35.99/-</div>
            </div>
        </div>
        <div class="cart-item">
            <span class="fas fa-times"></span>
            <img src="images/img5.png" alt=""/>
            <div class="content">
                <h3>cart item 04</h3>
                <div class="price">$35.99/-</div>
            </div>
        </div>
        <a href="#" class="btn">checkout now</a>
    </div>

</header>

    
  )
}


export default Header


