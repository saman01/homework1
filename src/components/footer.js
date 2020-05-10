import React from 'react';
import instaIcon from '../images/icons/insta.png';
import telegramIcon from '../images/icons/telegram.png';
import whatsappIcon from '../images/icons/whatsapp.png';


export const Footy = () => {

   return (
    <footer className="site-footer">
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-6 hello">
          <h6>About</h6>
          <p className="text-justify">don't you see how cool is my website ! this is it's footer</p>
          <a href="/"><img id="overlay" className='icons' src={instaIcon} alt="insta-icon"/></a>
          <a href="/"><img id="overlay" className='icons icon2' src={telegramIcon} alt="telegram-icon"/></a>
          <a href="/"><img id="overlay" className='icons icon3' src={whatsappIcon} alt="whatsapp-icon"/></a>
        </div>
        
      </div>
      
    </div>
    <div className="container">
      <div className="row">
                  <p className="copyright-text">Copyright © 2020 All Rights Reserved by Ehsan mortazavie
          </p>
        
        <div className="col-md-4 col-sm-6 col-xs-12">
          <ul className="social-icons">
          
          </ul>
        </div>
      </div>
    </div>
  </footer>
   
   )
}