import './App.css';
import logo from './images/mock-logo.png'

function App() {
  return (
    <div id="content" class="content-styling">
   <header role="banner" class="header-styling">
    <img class="logo-placement flex-item" alt="Mock logo with bus, map marker, disability, location and information icons" src={logo}/>
  <h2 class="header-text flex-item">Accessible CUMTD Trip Planner</h2>
  </header>
   <nav role="navigation" class="nav-styling">
      <ul class="nav-link-list">
         <li><a href="index.html">Plan Trip</a></li>
      </ul>
   </nav>
   <main role="main" class="main-styling" tabindex="1">
      <div class="flex-item">
         <h1>Trip Planner</h1>
      </div>
   </main>
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
</div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
