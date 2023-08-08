import React from 'react'
import { Box, Button, Flex, useColorMode, Spacer, Container } from '@chakra-ui/react'
import { useHistory } from 'react-router-dom';

const Navigation = () => {
    const history = useHistory();
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <nav role="navigation">
            <Container variant="navigation">
                <Flex direction="row" className="nav-link-list">
                    <Box>
                        <Button
                            variant="mainNavigationStart"
                            onClick={() => history.push('/')}
                        >
                            Home
                        </Button>
                    </Box>
                    <Box>
                        <Button
                            variant="mainNavigationStart"
                            onClick={() => history.push('/basic-trip-planner')}
                        >
                            Plan Trip
                        </Button>
                    </Box>
                    <Box>
                        <Button
                            variant="mainNavigationEnd"
                            onClick={() => history.push('/route-info')}
                        >
                            Route Information
                        </Button>
                    </Box>
                    <Spacer />
                    <Button variant="mainNavigationEnd" onClick={toggleColorMode}>{colorMode + ' mode on'}</Button>
                </Flex>
            </Container>
        </nav>
    )
}

export default Navigation