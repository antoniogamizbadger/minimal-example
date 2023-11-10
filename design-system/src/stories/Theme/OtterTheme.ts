import { createTheme } from '@mui/material/styles';

// Colors cannot be modified here. They are defined in the design system.
const OtterTheme = createTheme({
    palette: {
        Basic: {
            _100: '#f0f0f0',
            _200: '#fafafa',
            dark: '#585858',
            darker: '#373333',
            default: '#979797',
            default_10: '#f0f0f1',
            default_20: '#d5d5d5',
            light: '#cecece',
            light_70: '#dbdbdc',
            lighter: '#f5f5f5',
            mainMenu_F: '#050f2a',
            mainMenu_O: '#274060',
            mainMenu_W: '#302d2d',
            menu_F: '#d9d9d926',
            transparent: '#ffffff00',
            white: '#ffffff',
        },
        F_Accent: {
            default: '#ef5648',
            default_30: '#ef56484d',
            default_5: '#ef56480d',
        },
        F_Primary: {
            dark: '#2f5b8f',
            default: '#4a90e2',
            default_10: '#e8eff8',
            default_30: '#c9def6',
            default_40: '#b3cff0',
            h1: '#53a2ff',
        },
        Logo: {
            main: '#c23615',
        },
        O_Accent: {
            default: '#f3b61f',
            default_20: '#f8ebce',
            default_8: '#f8f4e8',
        },
        O_Primary: {
            dark: '#274060',
            darker: '#1b2845',
            default: '#4a90e2',
            default_20: '#d6e4f5',
            light: '#2f5b8f',
        },
        State: {
            alert: '#de3d17',
            alert_20: '#de3d1733',
            alert_5: '#de3d170d',
            destructive: '#de3d17',
            info: '#2f5b8f',
            info_20: '#2f5b8f33',
            info_5: '#2f5b8f0d',
            success: '#0db87f',
            success_20: '#0db87f33',
            success_5: '#0db87f0d',
            warning: '#f1d44a',
            warningDark: '#82711c',
            warning_20: '#f1d44a33',
        },
        W_Primary: {
            dark: '#2f5b8f',
            default: '#4a90e2',
            default_10: '#e8eff8',
            default_40: '#b3cff0',
            h1: '#53a2ff',
            h2: '#d6e4f5',
        },
        W_Secondary: {
            dark: '#7d2a16',
            default: '#c23615',
            hover: '#8a3520',
        },
        Background: {
            bars: {
                Color: '#ffffff',
                footers: {
                    toolbar: '#1df89c',
                },
                headers: {
                    hover: '#56d137',
                    secondaryNav: '#274060',
                },
            },
            button: {
                tools: '#ffffff',
                control: {
                    notSelected: '#ffffff',
                    selected: '#f8f4e8',
                },
                mainMenu: {
                    dataNotSelected: '#22df4b',
                    dataSelected: '#45ec6a',
                    disabled: '#ffffff00',
                    enabled: '#274060',
                    hover: '#f0f0f0',
                    objectSelected: '#74f953',
                    selected: '#4a90e2',
                },
                primary: {
                    active: '#979797',
                    destructive: '#de3d17',
                    directFeedback: '#53f75a',
                    disabled: '#dbdbdc',
                    enabled: '#4a90e2',
                    hover: '#d6e4f5',
                },
                secondary: {
                    active: '#5add67',
                    directFeedback: '#53f75a',
                    disabled: '#dbdbdc',
                    enabled: '#ffffff00',
                    hover: '#f8ebce',
                },
                tertiary: {
                    active: '#ffffff00',
                    directFeedback: '#ffffff00',
                    disabled: '#24e520',
                    enabled: '#ffffff00',
                    hover: '#1ed430',
                },
            },
            fields: {
                picklist: {
                    default: '#6aff35',
                },
                searchBar: {
                    default: '#67e173',
                    default_2: '#67e173',
                },
                suggestions: {
                    default: '#6aff35',
                },
                textField: {
                    default: '#fafafa',
                    error: '#ffffff',
                    filled: '#ffffff',
                    focus: '#d6e4f5',
                },
            },
            listItems: {
                active: '#ffffff',
                default: '#1b2845',
                hover: '#ffffff',
                hover2_remove_when_fixing: '#ffffff',
                selected: '#ffffff',
                related: {
                    collapsed: '#37ed33',
                    expanded: '#40f930',
                },
            },
            menu: {
                default: '#274060',
                subMenu: '#4fc25a',
            },
            primary: {
                default: '#ffffff',
            },
            secondary: {
                default: '#f5f5f5',
            },
            state: {
                alert: '#de3d17',
                alert2: '#de3d170d',
                alert3: '#de3d1733',
                info: '#2f5b8f',
                info2: '#2f5b8f0d',
                info3: '#2f5b8f33',
                success: '#0db87f',
                success2: '#0db87f0d',
                success3: '#0db87f33',
                warning: '#f1d44a',
                warning2: '#f1d44a33',
            },
            summary: {
                body: '#4eff95',
                header: '#54ffb7',
                multiple_summary: '#39ffa0',
            },
            table: {
                content: {
                    default: '#ffffff',
                    hover: '#d6e4f5',
                    selected: '#f8ebce',
                },
                header: {
                    default: '#f0f0f0',
                },
            },
            tooltip: {
                default: '#2f5b8f',
            },
        },
        Border: {
            button: {
                active: '#35ed69',
                directFeedback: '#3af199',
                disabled: '#f0f0f0',
                enabled: '#f1d44a',
                hover: '#f1d44a',
            },
            fields: {
                searchBar: {
                    default: '#f3b61f',
                },
                textField: {
                    default: '#979797',
                    error: '#de3d17',
                    filled: '#d6e4f5',
                    focus: '#2f5b8f',
                },
            },
            listItem: {
                default: '#5deb5a',
            },
        },
        Brand: {
            accent: {
                default: '#f3b61f',
            },
            primary: {
                default: '#4a90e2',
            },
            secondary: {
                default: '#c23615',
            },
        },
        Shadow: {
            button: '#d5d5d5',
        },
        Text: {
            onButton: {
                primary: {
                    active: '#f0f0f0',
                    destructive: '#54e039',
                    direct_feedback: '#54e039',
                    disabled: '#f0f0f0',
                    enabled: '#f0f0f0',
                    hover: '#274060',
                },
                secondary: {
                    active: '#54e039',
                    direct_feedback: '#54e039',
                    disabled: '#f0f0f0',
                    enabled: '#585858',
                    hover: '#585858',
                },
                tertiary: {
                    active: '#1b2845',
                    direct_feedback: '#b3cff0',
                    disabled: '#54e039',
                    enabled: '#4a90e2',
                    hover: '#4a90e2',
                },
            },
            onControl: {
                notSelected: '#1b2845',
                selected: '#1b2845',
            },
            onMenu: {
                disabled: '#ffffff',
                enabled: '#ffffff',
                hover: '#1b2845',
                secondarySelected: '#69cc67',
                selected: '#ffffff',
            },
            onNavigation: {
                default: '#6bf155',
            },
            onSearchBar: {
                icon: '#4a90e2',
                placeholder: '#979797',
            },
            onSurface: {
                accent: '#f3b61f',
                high: '#274060',
                link: '#54e039',
                low: '#cecece',
                medium: '#979797',
                xHigh: '#1b2845',
                xLow: '#ffffff',
            },
            onTools: {
                default: '#54e039',
                selected: '#54e039',
            },
            state: {
                alert: '#de3d17',
                alert2: '#de3d170d',
                alert3: '#de3d1733',
                info: '#2f5b8f',
                info2: '#2f5b8f0d',
                info3: '#2f5b8f33',
                success: '#0db87f',
                success2: '#0db87f0d',
                success3: '#0db87f33',
                warning: '#f1d44a',
                warningDark: '#82711c',
            },
        },
        Measures: {
            height: {
                mainNavHeader: {
                    default: '0px',
                    expanded: '0px',
                },
                segmentedControls: {
                    button: '42px',
                },
            },
            radius: {
                mainMenu: {
                    topLeft: '0px',
                    button: '4px',
                },
                segmentedControl: {
                    button: '0px',
                },
            },
        },
    },
});
export default OtterTheme;
