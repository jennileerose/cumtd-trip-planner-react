import React from 'react'
import { Container} from '@chakra-ui/react'

const Header = () => {
    return (
        <Container variant="header" centerContent>
            {/* <a href="#maincontent">Skip to main content</a> */}
            <header role="banner">
                <h1>Accessible CUMTD Trip Planner</h1>
            </header>
        </Container>
    )
}

export default Header