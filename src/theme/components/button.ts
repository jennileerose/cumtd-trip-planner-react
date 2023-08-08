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
                colors.carolinaBlue,
                colors.yinMnBlue
            )(props),
            color: mode(colors.richBlack, colors.coolWhite)(props),
            _hover: {
                bg: mode(
                    colors.yinMnBlue,
                    colors.carolinaBlue
                )(props),
                color: mode(colors.coolWhite, colors.richBlack)(props),
            },
            _active: {
                bg: mode(
                    colors.yinMnBlue,
                    colors.carolinaBlue
                )(props),
                color: mode(colors.coolWhite, colors.richBlack)(props),
                transform: 'scale(0.98)',
            },
            _focus: {
                bg: mode(
                    colors.yinMnBlue,
                    colors.carolinaBlue
                )(props),
                color: mode(colors.coolWhite, colors.richBlack)(props),
            },
        }),
        mainNavigationEnd: (props: Dict<any>) => ({
            padding: '0.5em',
            margin: '0',
            bg: mode(
                colors.carolinaBlue,
                colors.yinMnBlue
            )(props),
            color: mode(colors.richBlack, colors.coolWhite)(props),
            _hover: {
                bg: mode(
                    colors.yinMnBlue,
                    colors.carolinaBlue
                )(props),
                color: mode(colors.coolWhite, colors.richBlack)(props),
            },
            _active: {
                bg: mode(
                    colors.yinMnBlue,
                    colors.carolinaBlue
                )(props),
                color: mode(colors.coolWhite, colors.richBlack)(props),
                transform: 'scale(0.98)',
            },
            _focus: {
                bg: mode(
                    colors.yinMnBlue,
                    colors.carolinaBlue
                )(props),
                color: mode(colors.coolWhite, colors.richBlack)(props),
            },
        }),
        footerNavigationStart: (props: Dict<any>) => ({
            padding: '0.25em',
            borderRight: '1px solid',
            borderColor: 'coolWhite',
            margin: '0',
            bg: mode(
                colors.carolinaBlue,
                colors.indigoDye
            )(props),
            color: mode(colors.indigoDye, colors.coolWhite)(props),
            _hover: {
                bg: mode(
                    colors.indigoDye,
                    colors.carolinaBlue
                )(props),
                color: mode(colors.coolWhite, colors.richBlack)(props),
            },
            _active: {
                bg: mode(
                    colors.indigoDye,
                    colors.carolinaBlue
                )(props),
                color: mode(colors.coolWhite, colors.richBlack)(props),
                transform: 'scale(0.98)',
            },
            _focus: {
                bg: mode(
                    colors.indigoDye,
                    colors.carolinaBlue
                )(props),
                color: mode(colors.coolWhite, colors.richBlack)(props),
            },
        }),
        footerNavigationEnd: (props: Dict<any>) => ({
            padding: '0.25em',
            margin: '0',
            bg: mode(
                colors.carolinaBlue,
                colors.indigoDye
            )(props),
            color: mode(colors.indigoDye, colors.coolWhite)(props),
            _hover: {
                bg: mode(
                    colors.indigoDye,
                    colors.carolinaBlue
                )(props),
                color: mode(colors.coolWhite, colors.richBlack)(props),
            },
            _active: {
                bg: mode(
                    colors.indigoDye,
                    colors.carolinaBlue
                )(props),
                color: mode(colors.coolWhite, colors.richBlack)(props),
                transform: 'scale(0.98)',
            },
            _focus: {
                bg: mode(
                    colors.indigoDye,
                    colors.carolinaBlue
                )(props),
                color: mode(colors.coolWhite, colors.richBlack)(props),
            },
        }),
        socialMedia: (props: Dict<any>) => ({
            padding: '0.5em',
            margin: '0',
            bg: mode(
                colors.carolinaBlue,
                colors.indigoDye
            )(props),
            color: mode(colors.indigoDye, colors.coolWhite)(props),
            _hover: {
                bg: mode(
                    colors.indigoDye,
                    colors.carolinaBlue
                )(props),
                color: mode(colors.coolWhite, colors.richBlack)(props),
            },
            _active: {
                bg: mode(
                    colors.indigoDye,
                    colors.carolinaBlue
                )(props),
                color: mode(colors.coolWhite, colors.richBlack)(props),
                transform: 'scale(0.98)',
            },
            _focus: {
                bg: mode(
                    colors.indigoDye,
                    colors.carolinaBlue
                )(props),
                color: mode(colors.coolWhite, colors.richBlack)(props),
            },
        }),
        primary: (props: Dict<any>) => ({
            padding: '0.25em',
            marginLeft: '0.5em',
            border: '1p solid',
            borderColor: colors.gray,
            borderRadius: '0',
            fontSize: '1em',
            bg: mode(
                colors.UCLABlue,
                colors.indigoDye
            )(props),
            color: mode(colors.coolWhite, colors.coolWhite)(props),
            _hover: {
                bg: mode(
                    colors.indigoDye,
                    colors.UCLABlue
                )(props),
                color: mode(colors.coolWhite, colors.richBlack)(props),
            },
            _active: {
                bg: mode(
                    colors.indigoDye,
                    colors.UCLABlue
                )(props),
                color: mode(colors.coolWhite, colors.richBlack)(props),
                transform: 'scale(0.98)',
            },
            _focus: {
                bg: mode(
                    colors.indigoDye,
                    colors.UCLABlue
                )(props),
                color: mode(colors.coolWhite, colors.richBlack)(props),
            },
        }),
    },
}
