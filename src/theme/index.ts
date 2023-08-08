import { extendTheme, ThemeConfig } from '@chakra-ui/react'
import { mode, Styles } from '@chakra-ui/theme-tools'
import { darkColors, lightColors } from './colors'
import * as components from './components'

const config: ThemeConfig = {
    initialColorMode: 'light',
    useSystemColorMode: false,
}

const styles: Styles = {
    global: (props) => ({
        body: {
            bg: mode(lightColors.coolWhite, darkColors.darkGrey)(props),
            color: mode(lightColors.richBlack, darkColors.coolWhite)(props),
        },
        p: {
            margin: '1em',
        },
    }),
}

const theme = extendTheme({ config, components, styles })

export default theme