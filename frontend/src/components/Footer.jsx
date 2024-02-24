import React from 'react'
import appstore from '../images/appstore.png'
import playstore from '../images/playstore.png'
import '../components/footer.css'
const Footer = () => {
  return(
     <footer id="footer">
        <div class="leftfooter">
          <h4>Download our App</h4>
          <p>Get our App on</p>
          <img src={appstore} alt="appstore" />
          <img src={playstore} alt="playstore" />
        </div>
        <div class="midfooter">
          <h1>ECOMMERCE</h1>
          <p>High qualtiy is our First priority</p>

          <p>copyright 2021 &copy; balwinder</p>
          
        </div>
        <div class="rightfooter">
          <h4>Follow us</h4>
          <a href="https://instagram.com">instagram</a>
          <a href="https://facebook.com">facebook</a>

          
        </div>
     </footer>
  );
}

export default Footer