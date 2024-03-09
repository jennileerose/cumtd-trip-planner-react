/* eslint-disable import/no-anonymous-default-export */
// import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools'
// import { Dict } from '@chakra-ui/utils'
import { colors } from '../colors'

export default {
    parts: ['tab', 'tablist', 'tabpanels', 'tabpanel'],
    baseStyle: {
        tab: {
            fontSize: '0.75em',
            fontWeight: 'bold',
            border: 'solid 1px',
            borderRadius: '0',
            padding: '2em'
        },
        tablist: {
            // padding: '1em'
        },
        tabpanels: {
            padding: '0.5em',
            fontWeight: 'bold',
            border: 'solid 1px'
        },
        tabpanel: {
            padding: '1.5em'
        }
    },
    variants: {
        innerTabs: {
            tab: {
                bg: colors.yinMnBlue,
                color: colors.coolWhite
            }
        },
        YELLOW: {
            tab: {
                bg: colors.mtdYellow,
            color: colors.mtdYellowText
            }
        },
        RED: {
            tab: {
               bg: colors.mtdRed,
            color: colors.mtdRedText 
            }
        },
        LAVENDER: {
            tab: {
                bg: colors.mtdLavender,
                color: colors.mtdLavenderText
            }
        },
        BLUE: {
            tab: {
               bg: colors.mtdBlue,
               color: colors.mtdBlueText
            }
        },
        GREEN:{
            tab: {
                bg: colors.mtdGreen,
                color: colors.mtdGreenText
            }
        },
        ORANGE:{
            tab: {
                bg: colors.mtdOrange,
                color: colors.mtdOrangeText
            }
        },
        GREY: {
            tab: {
                bg: colors.mtdGrey,
                color: colors.mtdGreyText
            }
        },
        BRONZE: {
            tab: {
                bg: colors.mtdBronze,
                color: colors.mtdBronzeText
            }
        },
        BROWN: {
            tab: {
                bg: colors.mtdBrown,
                color: colors.mtdBrownText
            }
        },
        GOLD: {
            tab: {
                bg: colors.mtdGold,
                color: colors.mtdGoldText
            }
        },
        RUBY: {
            tab: {
                bg: colors.mtdRuby,
                color: colors.mtdRubyText
            }
        },
        TEAL: {
            tab: {
                bg: colors.mtdTeal,
                color: colors.mtdTealText
            }
        },
        SILVER: {
            tab: {
                bg: colors.mtdSilver,
                color: colors.mtdSilverText
            }
        },
        NAVY: {
            tab: {
                bg: colors.mtdNavy,
                color: colors.mtdNavyText
            }
        },
        PINK: {
            tab: {
                bg: colors.mtdPink,
                color: colors.mtdPinkText
            }
        },
        LIME: {
            tab: {
                bg: colors.mtdLime,
                color: colors.mtdLimeText
            }
        },
        RAVEN: {
            tab: {
                bg: colors.mtdRaven,
                color: colors.mtdRavenText
            }
        },
        ILLINI: {
            tab: {
                bg: colors.mtdIllini,
                color: colors.mtdIlliniText
            }
        },
        LINK: {
            tab: {
                bg: colors.mtdLink,
                color: colors.mtdLinkText
            }
        }
    } 
}