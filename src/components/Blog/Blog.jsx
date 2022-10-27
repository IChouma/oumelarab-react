import React from 'react'
import './Blog.css'
import img2 from '../../images/img2.png';
import img3 from '../../images/img3.webp';
import img4 from '../../images/img4.png';
import img5 from '../../images/img5.png';
import img6 from '../../images/img6.png';


function Blog() {
  return (

    <section class="blogs" id="blogs">

    <h1 class="heading"> قائمة  <span>المقالات</span> </h1>

    <div class="box-container">

        <div class="box">
            <div class="image">
                <img src={img2}alt=""/>
            </div>
            <div class="content">
                <a href="#" class="title">عطور أم العرب</a>
                <span>بواسطة:أحمد 22 ماي 2022</span>
                <p>رلوريم ايبسوم دولار سيت أميت ,كونسيكتيتورلوريم ايبسوم دولار سيت أميت ,كونسيكتيتور</p>
                <a href="#" class="btn">اقرأ المزيد</a>
            </div>
        </div>

        <div class="box">
            <div class="image">
                <img src={img3} alt=""/>
            </div>
            <div class="content">
                <a href="#" class="title">عطور أم العرب</a>
                <span>بواسطة:أحمد 22 ماي 2022</span>
                <p>رلوريم ايبسوم دولار سيت أميت ,كونسيكتيتورلوريم ايبسوم دولار سيت أميت ,كونسيكتيتور</p>
                <a href="#" class="btn">اقرأ المزيد</a>
            </div>
        </div>

        <div class="box">
            <div class="image">
                <img src={img4} alt=""/>
            </div>
            <div class="content">
                <a href="#" class="title">عطور أم العرب</a>
                <span>بواسطة:أحمد 22 ماي 2022</span>
                <p>رلوريم ايبسوم دولار سيت أميت ,كونسيكتيتورلوريم ايبسوم دولار سيت أميت ,كونسيكتيتور</p>
                <a href="#" class="btn">اقرأ المزيد</a>
            </div>
        </div>

    </div>

</section>
  )
}

export default Blog
