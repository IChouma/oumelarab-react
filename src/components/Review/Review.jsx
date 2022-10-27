import React from 'react';
import quote from '../../images/quote-img.png';
import pic1 from '../../images/pic-1.png';
import pic2 from '../../images/pic-2.png';
import pic3 from '../../images/pic-3.png';

function Review() {
  return (
<section class="review" id="review">

    <h1 class="heading"> تقييمات  <span>العملاء</span> </h1>

    <div class="box-container">

        <div class="box">
            <img src={quote} alt="" class="quote"/>
            <p>لوريم ايبسوم دولار سيت أميت ,كونسيكتيتورلوريم ايبسوم دولار سيت أميت ,كونسيكتيتورلوريم ايبسوم دولار سيت أميت ,كونسيكتيتور</p>
            <img src={pic1} class="user" alt=""/>
            <h3>زكرياء</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
            </div>
        </div>

        <div class="box">
            <img src={quote} alt="" class="quote"/>
            <p>لوريم ايبسوم دولار سيت أميت ,كونسيكتيتورلوريم ايبسوم دولار سيت أميت ,كونسيكتيتورلوريم ايبسوم دولار سيت أميت ,كونسيكتيتور</p>
            <img src={pic2} class="user" alt=""/>
            <h3>فاطمة الزهراء</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
            </div>
        </div>
        
        <div class="box">
            <img src={quote} alt="" class="quote"/>
            <p>لوريم ايبسوم دولار سيت أميت ,كونسيكتيتورلوريم ايبسوم دولار سيت أميت ,كونسيكتيتورلوريم ايبسوم دولار سيت أميت ,كونسيكتيتور</p>
            <img src={pic3} class="user" alt=""/>
            <h3>أحمد</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
            </div>
        </div>

    </div>

</section>
  )
}

export default Review
