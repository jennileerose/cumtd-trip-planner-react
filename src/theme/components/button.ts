/* eslint-disable import/no-anonymous-default-export */
import { mode } from '@chakra-ui/theme-tools'
import { Dict } from '@chakra-ui/utils'
import { darkColors, lightColors } from '../colors'

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
                lightColors.mainAccentColor,
                darkColors.mainAccentColor
            )(props),
            color: mode(lightColors.coolWhite, darkColors.coolWhite)(props),
            _hover: {
                bg: mode(
                    darkColors.mainAccentColor,
                    lightColors.mainAccentColor
                )(props),
                color: mode(lightColors.coolWhite, darkColors.coolWhite)(props),
            },
            _active: {
                bg: mode(
                    darkColors.mainAccentColor,
                    lightColors.mainAccentColor
                )(props),
                color: mode(lightColors.coolWhite, darkColors.coolWhite)(props),
                transform: 'scale(0.98)',
            },
            _focus: {
                bg: mode(
                    darkColors.mainAccentColor,
                    lightColors.mainAccentColor
                )(props),
                color: mode(lightColors.coolWhite, darkColors.coolWhite)(props),
            },
        }),
        mainNavigationEnd: (props: Dict<any>) => ({
            padding: '0.5em',
            // borderRight: '1px solid',
            // borderColor: 'coolWhite',
            margin: '0',
            bg: mode(
                lightColors.mainAccentColor,
                darkColors.mainAccentColor
            )(props),
            color: mode(lightColors.coolWhite, darkColors.coolWhite)(props),
            _hover: {
                bg: mode(
                    darkColors.mainAccentColor,
                    lightColors.mainAccentColor
                )(props),
                color: mode(lightColors.coolWhite, darkColors.coolWhite)(props),
            },
            _active: {
                bg: mode(
                    darkColors.mainAccentColor,
                    lightColors.mainAccentColor
                )(props),
                color: mode(lightColors.coolWhite, darkColors.coolWhite)(props),
                transform: 'scale(0.98)',
            },
            _focus: {
                bg: mode(
                    darkColors.mainAccentColor,
                    lightColors.mainAccentColor
                )(props),
                color: mode(lightColors.coolWhite, darkColors.coolWhite)(props),
            },
        }),
        footerNavigationStart: (props: Dict<any>) => ({
            padding: '0.25em',
            borderRight: '1px solid',
            borderColor: 'coolWhite',
            margin: '0',
            bg: mode(
                lightColors.secondaryAccentColor,
                darkColors.secondaryAccentColor
            )(props),
            color: mode(lightColors.coolWhite, darkColors.coolWhite)(props),
            _hover: {
                bg: mode(
                    darkColors.secondaryAccentColor,
                    lightColors.secondaryAccentColor
                )(props),
                color: mode(lightColors.coolWhite, darkColors.coolWhite)(props),
            },
            _active: {
                bg: mode(
                    darkColors.secondaryAccentColor,
                    lightColors.secondaryAccentColor
                )(props),
                color: mode(lightColors.coolWhite, darkColors.coolWhite)(props),
                transform: 'scale(0.98)',
            },
            _focus: {
                bg: mode(
                    darkColors.secondaryAccentColor,
                    lightColors.secondaryAccentColor
                )(props),
                color: mode(lightColors.coolWhite, darkColors.coolWhite)(props),
            },
        }),
        footerNavigationEnd: (props: Dict<any>) => ({
            padding: '0.25em',
            margin: '0',
            bg: mode(
                lightColors.secondaryAccentColor,
                darkColors.secondaryAccentColor
            )(props),
            color: mode(lightColors.coolWhite, darkColors.coolWhite)(props),
            _hover: {
                bg: mode(
                    darkColors.secondaryAccentColor,
                    lightColors.secondaryAccentColor
                )(props),
                color: mode(lightColors.coolWhite, darkColors.coolWhite)(props),
            },
            _active: {
                bg: mode(
                    darkColors.secondaryAccentColor,
                    lightColors.secondaryAccentColor
                )(props),
                color: mode(lightColors.coolWhite, darkColors.coolWhite)(props),
                transform: 'scale(0.98)',
            },
            _focus: {
                bg: mode(
                    darkColors.secondaryAccentColor,
                    lightColors.secondaryAccentColor
                )(props),
                color: mode(lightColors.coolWhite, darkColors.coolWhite)(props),
            },
        }),
    },
}
