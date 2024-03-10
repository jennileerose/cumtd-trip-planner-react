/* eslint-disable import/no-anonymous-default-export */
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools'
import { Dict } from '@chakra-ui/utils'
import { colors } from '../colors'

export default {
  baseStyle: {
      margin: '0',
      borderRadius: '0'
  },
  variants: {
    header: (props: Dict<any> | StyleFunctionProps) => ({
      bg: mode(
          colors.AliceBlue,
          colors.indigoDye
      )(props),
      color: mode(
        colors.richBlack,
        colors.coolWhite
      )(props),
      margin: 'auto',
      textAlign: 'center',
      fontSize: '1.75em',
      fontWeight: 'bold',
      border: '1px solid',
      borderColor: colors.richBlack
    }),
    navigation: (props: Dict<any> | StyleFunctionProps) => ({
      bg: mode(
          colors.carolinaBlue,
          colors.yinMnBlue
      )(props),
      color: mode(
        colors.richBlack,
        colors.coolWhite
      )(props),
      margin: '0',
      border: '1px solid',
      borderColor: colors.richBlack
  }),
    mainContent: (props: Dict<any> | StyleFunctionProps) => ({
      bg: mode(
          colors.coolWhite,
          colors.prussianBlue
      )(props),
      color: mode(
        colors.richBlack,
        colors.coolWhite
      )(props),
      // padding: '1.5em',
      padding: '0.5em',
      overflow: 'auto',
      justifyContent: 'flex-start',
      border: '1px solid',
      borderColor: colors.richBlack
  }),
    footer: (props: Dict<any> | StyleFunctionProps) => ({
      bg: mode(
          colors.carolinaBlue,
          colors.indigoDye
      )(props),
      color: mode(
        colors.richBlack,
        colors.coolWhite
      )(props),
      margin: 'auto',
      padding: '0.25em',
      border: '1px solid',
      borderColor: colors.richBlack
  }),
  },
}
