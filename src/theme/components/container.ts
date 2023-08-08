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
            colors.UCLABlue,
            colors.prussianBlue
        )(props),
        color: mode(
          colors.richBlack,
          colors.coolWhite
        )(props),
        margin: 'auto',
        textAlign: 'center',
        fontSize: '1.75em',
        fontWeight: 'bold'
    }),
    navigation: (props: Dict<any> | StyleFunctionProps) => ({
      bg: mode(
          colors.carolinaBlue,
          colors.prussianBlue
      )(props),
      color: mode(
        colors.richBlack,
        colors.coolWhite
      )(props),
      margin: '0',
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
      padding: '2.5em',
      overflow: 'auto',
      justifyContent: 'flex-start',
  }),
    footer: (props: Dict<any> | StyleFunctionProps) => ({
      bg: mode(
          colors.UCLABlue,
          colors.prussianBlue
      )(props),
      color: mode(
        colors.richBlack,
        colors.coolWhite
      )(props),
      margin: 'auto',
  }),
  },
}
