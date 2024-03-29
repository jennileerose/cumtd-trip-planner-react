import { extendTheme, ThemeConfig } from '@chakra-ui/react'
import {
    mode,
    Styles
} from '@chakra-ui/theme-tools'
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
            width: '100%',
            // bgColor: mode(colors.AliceBlue, colors.richBlack)(props),
            // backgroundImage: mode(lightBgImageURL, darkBgImageURL)(props),
            // backgroundRepeat: 'repeat',
            // color: mode(colors.richBlack, colors.coolWhite)(props),
        },
        p: {
            margin: '1em',
        },
        input: {
            bgColor: mode(colors.AliceBlue, colors.richBlack)(props),
            border: '1px solid',
            borderColor: mode(colors.richBlack, colors.coolWhite),
            marginLeft: '1em',
            marginRight: '1em'
        }
    }),
}

const theme = extendTheme({ config, components, styles })

export default theme