import React, {Fragment, useRef, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import './Contact.css'
function  Contact() {
  const [active,setActive]=useState(false);
const ContactUs=useNavigate()
const home=useNavigate()
    return (
   <section class="contact" id="contact">

    <h1 class="heading"> <span>اتصل </span> بنا </h1>

    <div class="row">
        <iframe
         class="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53198.41990399895!2d-7.763680768750013!3d33.55594210000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda62df862285f43%3A0x9fd0f3b129621a1d!2sAndalocy%20parfum%20oulfa%20Casablanca!5e0!3m2!1sen!2sma!4v1666804098954!5m2!1sen!2sma" allowfullscreen="" loading="lazy"
          ></iframe>

        <form action="">
            <h3>أدخل معلوماتك</h3>
            <div class="inputBox">
                <span class="fas fa-user"></span>
                <input type="text" placeholder="الاسم"/>
            </div>
            <div class="inputBox">
                <span class="fas fa-envelope"></span>
                <input type="email" placeholder="الايمايل"/>
            </div>
            <div class="inputBox">
                <span class="fas fa-phone"></span>
                <input type="number" placeholder="الهاتف"/>
            </div>
            <input type="submit" value="أرسل الان" class="btn"/>
        </form>

    </div>

</section>
    
  )
}


export default Contact


