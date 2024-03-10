/* eslint-disable import/no-anonymous-default-export */
import { mode } from '@chakra-ui/theme-tools'
import { Dict } from '@chakra-ui/utils'
import { colors } from '../colors'

export default {
    parts: ['tab', 'tablist', 'tabpanels', 'tabpanel'],
    baseStyle: (props: Dict<any>) => ({
        tab: {
            fontSize: '0.75em',
            fontWeight: 'bold',
            padding: '2em',
            border: 'solid 1px',
            borderRadius: '0',
            borderColor: mode(
                colors.richBlack,
                colors.coolWhite
            )(props),
            _hover: {
                bg: mode(
                    colors.carolinaBlue,
                    colors.yinMnBlue
                    
                )(props),
                color: mode(
                    colors.richBlack,
                    colors.coolWhite
                )(props),
            },
            _active: {
                bg: mode(
                    colors.carolinaBlue,
                    colors.yinMnBlue
                    
                )(props),
                color: mode(colors.richBlack, colors.coolWhite)(props),
            },
            _focus: {
                bg: mode(
                    colors.carolinaBlue,
                    colors.yinMnBlue
                    
                )(props),
                color: mode(colors.richBlack, colors.coolWhite)(props),
            }
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
    }),

    variants: {
        innerTabs: (props: Dict<any>) => ({
            tab: {
                fontSize: '0.75em',
                fontWeight: 'bold',
                border: 'solid 1px',
                borderRadius: '0',
                padding: '2em',
                _hover: {
                    bg: mode(
                        colors.carolinaBlue,
                        colors.yinMnBlue
                        
                    )(props),
                    color: mode(colors.richBlack, colors.coolWhite)(props),
                },
                _active: {
                    bg: mode(
                        colors.carolinaBlue,
                        colors.yinMnBlue
                        
                    )(props),
                    color: mode(colors.richBlack, colors.coolWhite)(props),
                },
                _focus: {
                    bg: mode(
                        colors.carolinaBlue,
                        colors.yinMnBlue
                        
                    )(props),
                    color: mode(colors.richBlack, colors.coolWhite)(props),
                }
            }
        }),
        YELLOW: {
            tab: {
                fontSize: '0.75em',
                fontWeight: 'bold',
                border: 'solid 1px',
                borderRadius: '0',
                padding: '2em',
                _hover: {
                    bg: colors.mtdYellow,
                    color: colors.mtdYellowText
                },
                _active: {
                    bg: colors.mtdYellow,
                    color: colors.mtdYellowText
                },
                _focus: {
                    bg: colors.mtdYellow,
                    color: colors.mtdYellowText
                }
            }
        },
        RED: {
            tab: {
                fontSize: '0.75em',
                fontWeight: 'bold',
                border: 'solid 1px',
                borderRadius: '0',
                padding: '2em',
                _hover: {
                    bg: colors.mtdRed,
                    color: colors.mtdRedText 
                },
                _active: {
                    bg: colors.mtdRed,
                    color: colors.mtdRedText 
                },
                _focus: {
                    bg: colors.mtdRed,
                    color: colors.mtdRedText 
                }
            }
        },
        LAVENDER: {
            tab: {
                fontSize: '0.75em',
                fontWeight: 'bold',
                border: 'solid 1px',
                borderRadius: '0',
                padding: '2em',
                _hover: {
                    bg: colors.mtdLavender,
                    color: colors.mtdLavenderText
                },
                _active: {
                    bg: colors.mtdLavender,
                    color: colors.mtdLavenderText
                },
                _focus: {
                    bg: colors.mtdLavender,
                    color: colors.mtdLavenderText
                }
            }
        },
        BLUE: {
            tab: {
                fontSize: '0.75em',
                fontWeight: 'bold',
                border: 'solid 1px',
                borderRadius: '0',
                padding: '2em',
                _hover: {
                    bg: colors.mtdBlue,
                    color: colors.mtdBlueText
                },
                _active: {
                    bg: colors.mtdBlue,
                    color: colors.mtdBlueText
                },
                _focus: {
                    bg: colors.mtdBlue,
                    color: colors.mtdBlueText
                }
            }
        },
        GREEN:{
            tab: {
                fontSize: '0.75em',
                fontWeight: 'bold',
                border: 'solid 1px',
                borderRadius: '0',
                padding: '2em',
                _hover: {
                    bg: colors.mtdGreen,
                    color: colors.mtdGreenText
                },
                _active: {
                    bg: colors.mtdGreen,
                    color: colors.mtdGreenText
                },
                _focus: {
                    bg: colors.mtdGreen,
                    color: colors.mtdGreenText
                }
            }
        },
        ORANGE:{
            tab: {
                fontSize: '0.75em',
                fontWeight: 'bold',
                border: 'solid 1px',
                borderRadius: '0',
                padding: '2em',
                _hover: {
                    bg: colors.mtdOrange,
                    color: colors.mtdOrangeText
                },
                _active: {
                    bg: colors.mtdOrange,
                    color: colors.mtdOrangeText
                },
                _focus: {
                    bg: colors.mtdOrange,
                    color: colors.mtdOrangeText
                }
            }
        },
        GREY: {
            tab: {
                fontSize: '0.75em',
                fontWeight: 'bold',
                border: 'solid 1px',
                borderRadius: '0',
                padding: '2em',
                _hover: {
                    bg: colors.mtdGrey,
                    color: colors.mtdGreyText
                },
                _active: {
                    bg: colors.mtdGrey,
                    color: colors.mtdGreyText
                },
                _focus: {
                    bg: colors.mtdGrey,
                    color: colors.mtdGreyText
                }
            }
        },
        BRONZE: {
            tab: {
                fontSize: '0.75em',
                fontWeight: 'bold',
                border: 'solid 1px',
                borderRadius: '0',
                padding: '2em',
                _hover: {
                    bg: colors.mtdBronze,
                    color: colors.mtdBronzeText
                },
                _active: {
                    bg: colors.mtdBronze,
                    color: colors.mtdBronzeText
                },
                _focus: {
                    bg: colors.mtdBronze,
                    color: colors.mtdBronzeText
                }
            }
        },
        BROWN: {
            tab: {
                fontSize: '0.75em',
                fontWeight: 'bold',
                border: 'solid 1px',
                borderRadius: '0',
                padding: '2em',
                _hover: {
                    bg: colors.mtdBrown,
                    color: colors.mtdBrownText 
                },
                _active: {
                    bg: colors.mtdBrown,
                    color: colors.mtdBrownText 
                },
                _focus: {
                    bg: colors.mtdBrown,
                    color: colors.mtdBrownText 
                }
            }
        },
        GOLD: {
            tab: {
                fontSize: '0.75em',
                fontWeight: 'bold',
                border: 'solid 1px',
                borderRadius: '0',
                padding: '2em',
                _hover: {
                    bg: colors.mtdGold,
                    color: colors.mtdGoldText
                },
                _active: {
                    bg: colors.mtdGold,
                    color: colors.mtdGoldText
                },
                _focus: {
                    bg: colors.mtdGold,
                    color: colors.mtdGoldText
                }
            }
        },
        RUBY: {
            tab: {
                fontSize: '0.75em',
                fontWeight: 'bold',
                border: 'solid 1px',
                borderRadius: '0',
                padding: '2em',
                _hover: {
                    bg: colors.mtdRuby,
                    color: colors.mtdRubyText
                },
                _active: {
                    bg: colors.mtdRuby,
                    color: colors.mtdRubyText
                },
                _focus: {
                    bg: colors.mtdRuby,
                    color: colors.mtdRubyText
                }
            }
        },
        TEAL: {
            tab: {
                fontSize: '0.75em',
                fontWeight: 'bold',
                border: 'solid 1px',
                borderRadius: '0',
                padding: '2em',
                _hover: {
                    bg: colors.mtdTeal,
                    color: colors.mtdTealText
                },
                _active: {
                    bg: colors.mtdTeal,
                    color: colors.mtdTealText
                },
                _focus: {
                    bg: colors.mtdTeal,
                    color: colors.mtdTealText
                }
            }
        },
        SILVER: {
            tab: {
                fontSize: '0.75em',
                fontWeight: 'bold',
                border: 'solid 1px',
                borderRadius: '0',
                padding: '2em',
                _hover: {
                    bg: colors.mtdSilver,
                    color: colors.mtdSilverText
                },
                _active: {
                    bg: colors.mtdSilver,
                    color: colors.mtdSilverText
                },
                _focus: {
                    bg: colors.mtdSilver,
                    color: colors.mtdSilverText
                }
            }
        },
        NAVY: {
            tab: {
                fontSize: '0.75em',
                fontWeight: 'bold',
                border: 'solid 1px',
                borderRadius: '0',
                padding: '2em',
                _hover: {
                    bg: colors.mtdNavy,
                    color: colors.mtdNavyText
                },
                _active: {
                    bg: colors.mtdNavy,
                    color: colors.mtdNavyText
                },
                _focus: {
                    bg: colors.mtdNavy,
                    color: colors.mtdNavyText
                }
            }
        },
        PINK: {
            tab: {
                fontSize: '0.75em',
                fontWeight: 'bold',
                border: 'solid 1px',
                borderRadius: '0',
                padding: '2em',
                _hover: {
                    bg: colors.mtdPink,
                    color: colors.mtdPinkText
                },
                _active: {
                    bg: colors.mtdPink,
                    color: colors.mtdPinkText
                },
                _focus: {
                    bg: colors.mtdPink,
                    color: colors.mtdPinkText
                }
            }
        },
        LIME: {
            tab: {
                fontSize: '0.75em',
                fontWeight: 'bold',
                border: 'solid 1px',
                borderRadius: '0',
                padding: '2em',
                _hover: {
                    bg: colors.mtdLime,
                    color: colors.mtdLimeText
                },
                _active: {
                    bg: colors.mtdLime,
                    color: colors.mtdLimeText
                },
                _focus: {
                    bg: colors.mtdLime,
                    color: colors.mtdLimeText
                }
            }
        },
        RAVEN: {
            tab: {
                fontSize: '0.75em',
                fontWeight: 'bold',
                border: 'solid 1px',
                borderRadius: '0',
                padding: '2em',
                _hover: {
                    bg: colors.mtdRaven,
                    color: colors.mtdRavenText
                },
                _active: {
                    bg: colors.mtdRaven,
                    color: colors.mtdRavenText
                },
                _focus: {
                    bg: colors.mtdRaven,
                    color: colors.mtdRavenText
                }
            }
        },
        ILLINI: {
            tab: {
                fontSize: '0.75em',
                fontWeight: 'bold',
                border: 'solid 1px',
                borderRadius: '0',
                padding: '2em',
                _hover: {
                    bg: colors.mtdIllini,
                    color: colors.mtdIlliniText
                },
                _active: {
                    bg: colors.mtdIllini,
                    color: colors.mtdIlliniText
                },
                _focus: {
                    bg: colors.mtdIllini,
                    color: colors.mtdIlliniText
                }
            }
        },
        LINK: {
            tab: {
                fontSize: '0.75em',
                fontWeight: 'bold',
                border: 'solid 1px',
                borderRadius: '0',
                padding: '2em',
                _hover: {
                    bg: colors.mtdLink,
                    color: colors.mtdLinkText
                },
                _active: {
                    bg: colors.mtdLink,
                    color: colors.mtdLinkText
                },
                _focus: {
                    bg: colors.mtdLink,
                    color: colors.mtdLinkText
                }
            }
        }
    } 
}