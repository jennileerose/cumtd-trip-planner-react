import React from 'react'

const Footer = () => {
    return (
        <footer role="contentinfo" className="footer-styling">
        <div>
           <ul className="footer-link-list">
              <li><a href="index.html">Plan Trip</a></li>
           </ul>
        </div>
        <div className="copyright-statement">
           <p>Copyright <i className="far fa-copyright" aria-label="copyright symbol"></i> 2022, Jennilee Benda - Data fetched from <a href="https://developer.cumtd.com/" rel="noreferrer" target="_blank">CUMTD API</a> and this is not an offically <a href="https://mtd.org/" rel="noreferrer" target="_blank">CUTMD</a> approved application. Background genereated on <a href="http://patternico.com/" rel="noreferrer" target="_blank">Seamless Pattern Maker</a></p>
        </div>
        <div className="social-media-links">
           <ul className="social-media-links">
              <li><a href="http://www.jennileerose.com" rel="noreferrer" target="_blank"><i className="fas fa-globe" aria-label="My website"></i></a></li>
              <li><a href="http://www.twitter.com/JenniLRose" rel="noreferrer" target="_blank"><i className="fab fa-twitter" aria-label="Twitter Profile Link @JenniLRose"></i></a></li>
              <li><a href="http://www.linkedin.com/jennileerose" rel="noreferrer" target="_blank"><i aria-label="LinkedIn Link for Jennilee Rose Benda" className="fab fa-linkedin"></i></a></li>
              <li><a href="https://www.facebook.com/JennileeRoseDesigns/" rel="noreferrer" target="_blank"><i aria-label="Facebook Profile Link for Jennilee Rose Designs" className="fab fa-facebook"></i></a></li>
           </ul>
        </div>
     </footer>
    )
}

export default Footer