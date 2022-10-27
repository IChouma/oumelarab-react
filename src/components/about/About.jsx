import React from 'react';
import './About.css'
import Aboutimg from '../../images/About.jpg'
function About() {
  return (
<section class="about" id="about">

    <h1 class="heading"> <span>من </span> نحن </h1>

    <div class="row">

        <div class="image">
            <img src={Aboutimg} alt=""/>
        </div>

        <div class="content">
            <h3>لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور</h3>
            <ul>
              <li>
            <p>لوريم ايبسوم دولار سيت أميت ,كونسيكتيتورلوريم ايبسوم دولار سيت أميت ,كونسيكتيتورلوريم ايبسوم دولار سيت أميت ,كونسيكتيتور</p>
              </li>
              <li>
            <p>لوريم ايبسوم دولار سيت أميت ,كونسيكتيتورلوريم ايبسوم دولار سيت أميت ,كونسيكتيتورلوريم ايبسوم دولار سيت أميت ,كونسيكتيتور</p>
              </li>
              <li>
            <p>لوريم ايبسوم دولار سيت أميت ,كونسيكتيتورلوريم ايبسوم دولار سيت أميت ,كونسيكتيتورلوريم ايبسوم دولار سيت أميت ,كونسيكتيتور</p>
              </li>
            </ul>
            {/* <a href="#" class="btn"></a> */}
        </div>

    </div>

</section>
  )
}

export default About
