import './App.css';
import Header from './sections/header'
import Footer from './sections/footer'

function App() {
  return (
   <div id="content" class="content-styling">
      <Header />
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
         <Footer />
   </div>
  );
}

export default App;
