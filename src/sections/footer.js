import React from 'react'
import { Box, Button, Flex } from '@chakra-ui/react'
import { useHistory } from 'react-router-dom';

const Footer = () => {
   const history = useHistory();
    return (
        <footer role="contentinfo" className="footer-styling">
        <Flex direction="row" className="footer-link-list">
            <Box>
               <Button
                  variant="footerNavigationStart"
                  onClick={() => history.push('/')}
               >
                  Home
               </Button>
            </Box>
            <Box>
               <Button
                  variant="footerNavigationStart"
                  onClick={() => history.push('/basic-trip-planner')}
               >
                  Plan Trip
               </Button>
            </Box>
            <Box>
               <Button
                  variant="footerNavigationEnd"
                  onClick={() => history.push('/route-info')}
               >
                  Route Information
               </Button>
            </Box>
         </Flex>
        <div className="copyright-statement">
           <p>Copyright <span className="far fa-copyright" aria-label="copyright symbol"></span> 2023, Jennilee Benda - Data fetched from <a href="https://developer.cumtd.com/" rel="noreferrer" target="_blank" className="statement-link">CUMTD API</a> and this is not an offically <a href="https://mtd.org/" rel="noreferrer" target="_blank" className="statement-link">CUTMD</a> approved application. Background genereated on <a href="http://patternico.com/" rel="noreferrer" target="_blank" className="statement-link">Seamless Pattern Maker</a></p>
        </div>
        <div className="social-media-links">
           <ul className="social-media-links">
            <li><a href="http://www.jennileerosedesigns.com" rel="noreferrer" target="_blank"><span className="fas fa-globe" aria-label="My website"></span></a></li>
            <li><a href="http://www.twitter.com/JenniLRose" target="_blank" rel="noreferrer"><span className="fab fa-twitter" aria-label="Twitter Profile Link @JenniLRose"></span></a></li>
            <li><a href="https://www.linkedin.com/in/jennilee-benda-22382942/" target="_blank" rel="noreferrer"><span aria-label="LinkedIn Link for Jennilee Rose Benda" className="fab fa-linkedin"></span></a></li>
            <li><a href="https://www.facebook.com/JennileeRoseDesigns/" target="_blank" rel="noreferrer"><span aria-label="Facebook Profile Link for Jennilee Rose Designs" className="fab fa-facebook"></span></a></li>
           </ul>
        </div>
     </footer>
    )
}

export default Footer