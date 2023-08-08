import React from 'react'
import { Box, Button, Flex, Container, Spacer, useColorMode } from '@chakra-ui/react'
import { useHistory } from 'react-router-dom';

const Footer = () => {
   const history = useHistory();
   const colorMode = useColorMode()
    return (
        <footer role="contentinfo">
         <Container variant="footer">
         <Flex direction="row" flexWrap="wrap">
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
                  variant="footerNavigationStart"
                  onClick={() => history.push('/route-info')}
               >
                  Route Information
               </Button>
            </Box>
            <Box>
               <Button
                  variant="footerNavigationEnd"
                  onClick={() => history.push('/departures-by-stop')}
               >
                  Departures By Stop
               </Button>
            </Box>
            <Spacer />
            <Box>
               <a href="http://www.jennileerosedesigns.com" rel="noreferrer" target="_blank">
                  <Button variant="socialMedia" aria-label="My Website Jennilee Rose Designs dot com"><span className="fas fa-globe" aria-label="My website"></span></Button>
               </a>
            </Box>
            <Box>
               <a href="http://www.twitter.com/JenniLRose" target="_blank" rel="noreferrer">
                  <Button variant="socialMedia" aria-label="Twitter Profile Link @JenniLRose"><span className="fab fa-twitter" aria-label="Twitter Profile Link @JenniLRose"></span></Button>
               </a>
            </Box>
            <Box>
               <a href="https://www.linkedin.com/in/jennilee-benda-22382942/" rel="noreferrer" target="_blank">
                  <Button variant="socialMedia"><span aria-label="LinkedIn Link for Jennilee Rose Benda" className="fab fa-linkedin"></span></Button>
               </a>
            </Box>
            <Box>
               <a href="https://www.facebook.com/JennileeRoseDesigns/" rel="noreferrer" target="_blank">
                  <Button variant="socialMedia" aria-label="Facebook Profile Link for Jennilee Rose Designs"><span aria-label="Facebook Profile Link for Jennilee Rose Designs" className="fab fa-facebook"></span></Button>
               </a>
            </Box>
         </Flex>
        <div className="copyright-statement">
           <p>Copyright <span className="far fa-copyright" aria-label="copyright symbol"></span> 2023, Jennilee Benda - Data fetched from <a href="https://developer.cumtd.com/" rel="noreferrer" target="_blank" className={colorMode.colorMode === 'light' ? 'statement-link-light' : 'statement-link-dark'}>CUMTD API</a> and this is not an officially <a href="https://mtd.org/" rel="noreferrer" target="_blank" className={colorMode.colorMode === 'light' ? 'statement-link-light' : 'statement-link-dark'}>CUTMD</a> approved application. Background generated on <a href="http://patternico.com/" rel="noreferrer" target="_blank" className={colorMode.colorMode === 'light' ? 'statement-link-light' : 'statement-link-dark'}>Seamless Pattern Maker</a></p>
        </div>
        </Container>
     </footer>
    )
}

export default Footer