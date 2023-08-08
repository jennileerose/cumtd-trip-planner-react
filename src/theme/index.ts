import { extendTheme, ThemeConfig } from '@chakra-ui/react'
import { mode, Styles } from '@chakra-ui/theme-tools'
import { colors } from './colors'
import * as components from './components'


const config: ThemeConfig = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
}

const styles: Styles = {
    global: (props) => ({
        body: {
            fontFamily: 'Helvetica, Arial, sans-serif',
            bgColor: mode(colors.AliceBlue, colors.richBlack)(props),
            // backgroundImage: mode("url('background.png')", colors.navyBlue)(props),
            // backgroundRepeat: 'repeat',
            color: mode(colors.richBlack, colors.coolWhite)(props),
        },
        p: {
            margin: '1em',
        },
    }),
}

const theme = extendTheme({ config, components, styles })

export default theme