/* eslint-disable import/no-anonymous-default-export */
import { mode } from '@chakra-ui/theme-tools'
import { Dict } from '@chakra-ui/utils'
import { colors } from '../colors'

export default {
    baseStyle: {
        fontWeight: 'bold',
        borderRadius: '0',
    },
    variants: {
        mainNavigationStart: (props: Dict<any>) => ({
            padding: '0.5em',
            borderRight: '1px solid',
            borderColor: 'coolWhite',
            margin: '0',
            bg: mode(
                colors.yinMnBlue,
                colors.onyx
            )(props),
            color: mode(colors.coolWhite, colors.coolWhite)(props),
            _hover: {
                bg: mode(
                    colors.prussianBlue,
                    colors.UCLABlue
                )(props),
                color: mode(colors.coolWhite, colors.coolWhite)(props),
            },
            _active: {
                bg: mode(
                    colors.prussianBlue,
                    colors.UCLABlue
                )(props),
                color: mode(colors.coolWhite, colors.coolWhite)(props),
                transform: 'scale(0.98)',
            },
            _focus: {
                bg: mode(
                    colors.prussianBlue,
                    colors.UCLABlue
                )(props),
                color: mode(colors.coolWhite, colors.coolWhite)(props),
            },
        }),
        mainNavigationEnd: (props: Dict<any>) => ({
            padding: '0.5em',
            // borderRight: '1px solid',
            // borderColor: 'coolWhite',
            margin: '0',
            bg: mode(
                colors.UCLABlue,
                colors.prussianBlue
            )(props),
            color: mode(colors.coolWhite, colors.coolWhite)(props),
            _hover: {
                bg: mode(
                    colors.prussianBlue,
                    colors.UCLABlue
                )(props),
                color: mode(colors.coolWhite, colors.coolWhite)(props),
            },
            _active: {
                bg: mode(
                    colors.prussianBlue,
                    colors.UCLABlue
                )(props),
                color: mode(colors.coolWhite, colors.coolWhite)(props),
                transform: 'scale(0.98)',
            },
            _focus: {
                bg: mode(
                    colors.prussianBlue,
                    colors.UCLABlue
                )(props),
                color: mode(colors.coolWhite, colors.coolWhite)(props),
            },
        }),
        footerNavigationStart: (props: Dict<any>) => ({
            padding: '0.25em',
            borderRight: '1px solid',
            borderColor: 'coolWhite',
            margin: '0',
            bg: mode(
                colors.yinMnBlue,
                colors.prussianBlue
            )(props),
            color: mode(colors.coolWhite, colors.coolWhite)(props),
            _hover: {
                bg: mode(
                    colors.prussianBlue,
                    colors.yinMnBlue
                )(props),
                color: mode(colors.coolWhite, colors.coolWhite)(props),
            },
            _active: {
                bg: mode(
                    colors.prussianBlue,
                    colors.yinMnBlue
                )(props),
                color: mode(colors.coolWhite, colors.coolWhite)(props),
                transform: 'scale(0.98)',
            },
            _focus: {
                bg: mode(
                    colors.prussianBlue,
                    colors.yinMnBlue
                )(props),
                color: mode(colors.coolWhite, colors.coolWhite)(props),
            },
        }),
        footerNavigationEnd: (props: Dict<any>) => ({
            padding: '0.25em',
            margin: '0',
            bg: mode(
                colors.yinMnBlue,
                colors.prussianBlue
            )(props),
            color: mode(colors.coolWhite, colors.coolWhite)(props),
            _hover: {
                bg: mode(
                    colors.prussianBlue,
                    colors.yinMnBlue
                )(props),
                color: mode(colors.coolWhite, colors.coolWhite)(props),
            },
            _active: {
                bg: mode(
                    colors.prussianBlue,
                    colors.yinMnBlue
                )(props),
                color: mode(colors.coolWhite, colors.coolWhite)(props),
                transform: 'scale(0.98)',
            },
            _focus: {
                bg: mode(
                    colors.prussianBlue,
                    colors.yinMnBlue
                )(props),
                color: mode(colors.coolWhite, colors.coolWhite)(props),
            },
        }),
    },
}
