/* eslint-disable import/no-anonymous-default-export */
import { mode } from '@chakra-ui/theme-tools'
import { Dict } from '@chakra-ui/utils'
import { colors } from '../colors'

export default {
    parts: ['table', 'thead', 'tbody', 'tfoot', 'tr', 'th', 'td', 'caption'],
    baseStyle: (props: Dict<any>) => ({
        table: {
            border: 'solid 1px',
            borderRadius: '0',
            borderColor: mode(
                colors.richBlack,
                colors.coolWhite
            )(props),
            width: '75%',
            margin: '1em 0 0 0'

        },
        thead: {
            fontSize: '0.75em',
            fontWeight: 'bold',
        },
        tbody: {},
        tfoot: {},
        tr: {
            border: 'solid 1px',
            borderRadius: '0',
            borderColor: mode(
                colors.richBlack,
                colors.coolWhite
            )(props),
        },
        th: {
            fontSize: '0.75em',
            border: 'solid 1px',
            borderRadius: '0',
            borderColor: mode(
                colors.richBlack,
                colors.coolWhite
            )(props),
            wordWrap: 'wrap',
            width: '5em',
            bg: mode(
                colors.carolinaBlue,
                colors.yinMnBlue
                
            )(props),
            color: mode(
                colors.richBlack,
                colors.coolWhite
            )(props),

        },
        td: {
            fontSize: '0.5em',
            border: 'solid 1px',
            borderRadius: '0',
            borderColor: mode(
                colors.richBlack,
                colors.coolWhite
            )(props),
            textAlign: 'center'
        },
        caption: {}
        // tab: {
        //     fontSize: '0.75em',
        //     fontWeight: 'bold',
        //     padding: '2em',
        //     border: 'solid 1px',
        //     borderRadius: '0',
        //     borderColor: mode(
        //         colors.richBlack,
        //         colors.coolWhite
        //     )(props),
        //     _hover: {
        //         bg: mode(
        //             colors.carolinaBlue,
        //             colors.yinMnBlue
                    
        //         )(props),
        //         color: mode(
        //             colors.richBlack,
        //             colors.coolWhite
        //         )(props),
        //     },
        //     _active: {
        //         bg: mode(
        //             colors.carolinaBlue,
        //             colors.yinMnBlue
                    
        //         )(props),
        //         color: mode(colors.richBlack, colors.coolWhite)(props),
        //     },
        //     _focus: {
        //         bg: mode(
        //             colors.carolinaBlue,
        //             colors.yinMnBlue
                    
        //         )(props),
        //         color: mode(colors.richBlack, colors.coolWhite)(props),
        //     }
        // },
        // tablist: {
        //     // padding: '1em'
        // },
        // tabpanels: {
        //     padding: '0.5em',
        //     fontWeight: 'bold',
        //     border: 'solid 1px'
        // },
        // tabpanel: {
        //     padding: '1.5em'
        // }
    }),

    // variants: {
    //     innerTabs: (props: Dict<any>) => ({
    //         tab: {
    //             fontSize: '0.75em',
    //             fontWeight: 'bold',
    //             border: 'solid 1px',
    //             borderRadius: '0',
    //             padding: '2em',
    //             _hover: {
    //                 bg: mode(
    //                     colors.carolinaBlue,
    //                     colors.yinMnBlue
                        
    //                 )(props),
    //                 color: mode(colors.richBlack, colors.coolWhite)(props),
    //             },
    //             _active: {
    //                 bg: mode(
    //                     colors.carolinaBlue,
    //                     colors.yinMnBlue
                        
    //                 )(props),
    //                 color: mode(colors.richBlack, colors.coolWhite)(props),
    //             },
    //             _focus: {
    //                 bg: mode(
    //                     colors.carolinaBlue,
    //                     colors.yinMnBlue
                        
    //                 )(props),
    //                 color: mode(colors.richBlack, colors.coolWhite)(props),
    //             }
    //         }
    //     }),
    //     YELLOW: {
    //         tab: {
    //             fontSize: '0.75em',
    //             fontWeight: 'bold',
    //             border: 'solid 1px',
    //             borderRadius: '0',
    //             padding: '2em',
    //             _hover: {
    //                 bg: colors.mtdYellow,
    //                 color: colors.mtdYellowText
    //             },
    //             _active: {
    //                 bg: colors.mtdYellow,
    //                 color: colors.mtdYellowText
    //             },
    //             _focus: {
    //                 bg: colors.mtdYellow,
    //                 color: colors.mtdYellowText
    //             }
    //         }
    //     },
    //     GREEN:{
    //         tab: {
    //             fontSize: '0.75em',
    //             fontWeight: 'bold',
    //             border: 'solid 1px',
    //             borderRadius: '0',
    //             padding: '2em',
    //             _hover: {
    //                 bg: colors.mtdGreen,
    //                 color: colors.mtdGreenText
    //             },
    //             _active: {
    //                 bg: colors.mtdGreen,
    //                 color: colors.mtdGreenText
    //             },
    //             _focus: {
    //                 bg: colors.mtdGreen,
    //                 color: colors.mtdGreenText
    //             }
    //         }
    //     },
    //     ORANGE:{
    //         tab: {
    //             fontSize: '0.75em',
    //             fontWeight: 'bold',
    //             border: 'solid 1px',
    //             borderRadius: '0',
    //             padding: '2em',
    //             _hover: {
    //                 bg: colors.mtdOrange,
    //                 color: colors.mtdOrangeText
    //             },
    //             _active: {
    //                 bg: colors.mtdOrange,
    //                 color: colors.mtdOrangeText
    //             },
    //             _focus: {
    //                 bg: colors.mtdOrange,
    //                 color: colors.mtdOrangeText
    //             }
    //         }
    //     },
    //     GOLD: {
    //         tab: {
    //             fontSize: '0.75em',
    //             fontWeight: 'bold',
    //             border: 'solid 1px',
    //             borderRadius: '0',
    //             padding: '2em',
    //             _hover: {
    //                 bg: colors.mtdGold,
    //                 color: colors.mtdGoldText
    //             },
    //             _active: {
    //                 bg: colors.mtdGold,
    //                 color: colors.mtdGoldText
    //             },
    //             _focus: {
    //                 bg: colors.mtdGold,
    //                 color: colors.mtdGoldText
    //             }
    //         }
    //     },
    // } 
}