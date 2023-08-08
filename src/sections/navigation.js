import React from 'react'
import { Box, Button, Flex } from '@chakra-ui/react'
import { useHistory } from 'react-router-dom';

const Navigation = () => {
    const history = useHistory();

    return (
        <nav role="navigation" className="nav-styling">
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
            </Flex>
        </nav>
    )
}

export default Navigation