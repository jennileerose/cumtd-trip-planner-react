import React from 'react'

const Footer = () => {
    return (
        <footer role="contentinfo" class="footer-styling">
        <div>
           <ul class="footer-link-list">
              <li><a href="index.html">Plan Trip</a></li>
           </ul>
        </div>
        <div class="copyright-statement">
           <p>Copyright <i class="far fa-copyright" aria-label="copyright symbol"></i> 2019, Jennilee Benda - Data fetched from <a href="https://developer.cumtd.com/" target="_blank">CUMTD API</a> and this is not an offically <a href="https://mtd.org/" target="_blank">CUTMD</a> approved application. Background genereated on <a href="http://patternico.com/" target="_blank">Seamless Pattern Maker</a></p>
        </div>
        <div class="social-media-links">
           <ul class="social-media-links">
              <li><a href="http://www.jennileerose.com" target="_blank"><i class="fas fa-globe" aria-label="My website"></i></a></li>
              <li><a href="http://www.twitter.com/JenniLRose" target="_blank"><i class="fab fa-twitter" aria-label="Twitter Profile Link @JenniLRose"></i></a></li>
              <li><a href="http://www.linkedin.com/jennileerose" target="_blank"><i aria-label="LinkedIn Link for Jennilee Rose Benda" class="fab fa-linkedin"></i></a></li>
              <li><a href="https://www.facebook.com/JennileeRoseDesigns/" target="_blank"><i aria-label="Facebook Profile Link for Jennilee Rose Designs" class="fab fa-facebook"></i></a></li>
           </ul>
        </div>
     </footer>
    )
}

export default Footer