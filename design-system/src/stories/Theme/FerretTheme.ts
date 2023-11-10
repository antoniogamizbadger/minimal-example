import { createTheme } from '@mui/material/styles';

// Colors cannot be modified here. They are defined in the design system.
const FerretTheme = createTheme({
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
                    toolbar: '#ffffff',
                },
                headers: {
                    hover: '#50e139',
                    secondaryNav: '#f5f5f5',
                },
            },
            secondary: {
                default: '#f5f5f5',
            },
            button: {
                tools: '#ffffff',
                control: {
                    notSelected: '#f0f0f1',
                    selected: '#ef56480d',
                },
                mainMenu: {
                    dataNotSelected: '#585858',
                    dataSelected: '#ef56484d',
                    disabled: '#302d2d',
                    enabled: '#ffffff00',
                    hover: '#ef56484d',
                    objectSelected: '#ffffff00',
                    selected: '#ef56484d',
                },
                primary: {
                    active: '#2f5b8f',
                    destructive: '#de3d17',
                    directFeedback: '#b3cff0',
                    disabled: '#b3cff0',
                    enabled: '#4a90e2',
                    hover: '#53a2ff',
                },
                secondary: {
                    active: '#e8eff8',
                    directFeedback: '#f0f0f1',
                    disabled: '#f0f0f1',
                    enabled: '#f0f0f1',
                    hover: '#e8eff8',
                },
                tertiary: {
                    active: '#ffffff00',
                    directFeedback: '#ffffff00',
                    disabled: '#ffffff00',
                    enabled: '#ffffff00',
                    hover: '#f0f0f1',
                },
            },
            fields: {
                picklist: {
                    default: '#e8eff8',
                },
                searchBar: {
                    default: '#ffffff',
                    default_2: '#f5f5f5',
                },
                suggestions: {
                    default: '#ffffff',
                },
                textField: {
                    default: '#ffffff00',
                    error: '#47ff7b',
                    filled: '#48ff91',
                    focus: '#23ff95',
                },
            },
            listItems: {
                active: '#f5f5f5',
                default: '#ffffff',
                hover: '#c9def6',
                hover2_remove_when_fixing: '#f5f5f5',
                selected: '#c9def6',
                related: {
                    collapsed: '#53f75a',
                    expanded: '#cecece',
                },
            },
            menu: {
                default: '#050f2a',
                subMenu: '#d9d9d926',
            },
            primary: {
                default: '#ffffff',
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
                body: '#ffffff',
                header: '#050f2a',
                multiple_summary: '#2f5b8f',
            },
            table: {
                content: {
                    default: '#57faac',
                    hover: '#57faac',
                    selected: '#57faac',
                },
                header: {
                    default: '#23ffbd',
                },
            },
            tooltip: {
                default: '#050f2a',
            },
        },
        Border: {
            button: {
                active: '#48ff86',
                directFeedback: '#48ff86',
                disabled: '#48ff86',
                enabled: '#48ff86',
                hover: '#48ff86',
            },
            fields: {
                searchBar: {
                    default: '#ffffff00',
                },
                textField: {
                    default: '#979797',
                    error: '#de3d17',
                    filled: '#ffffff',
                    focus: '#585858',
                },
            },
            listItem: {
                default: '#f5f5f5',
            },
        },
        Brand: {
            accent: {
                default: '#ef5648',
            },
            primary: {
                default: '#4a90e2',
            },
            secondary: {
                default: '#ef5648',
            },
        },
        Shadow: {
            button: '#d5d5d5',
        },
        Text: {
            onButton: {
                primary: {
                    active: '#ffffff',
                    destructive: '#ffffff',
                    direct_feedback: '#ffffff',
                    disabled: '#ffffff',
                    enabled: '#ffffff',
                    hover: '#ffffff',
                },
                secondary: {
                    active: '#2f5b8f',
                    direct_feedback: '#979797',
                    disabled: '#979797',
                    enabled: '#585858',
                    hover: '#585858',
                },
                tertiary: {
                    active: '#2f5b8f',
                    direct_feedback: '#b3cff0',
                    disabled: '#b3cff0',
                    enabled: '#4a90e2',
                    hover: '#53a2ff',
                },
            },
            onControl: {
                notSelected: '#585858',
                selected: '#ef5648',
            },
            onMenu: {
                disabled: '#585858',
                enabled: '#ffffff',
                hover: '#ffffff',
                secondarySelected: '#ffffff',
                selected: '#ffffff',
            },
            onNavigation: {
                default: '#585858',
            },
            onSearchBar: {
                icon: '#ef5648',
                placeholder: '#979797',
            },
            onSurface: {
                accent: '#ef5648',
                high: '#585858',
                link: '#4a90e2',
                low: '#cecece',
                medium: '#979797',
                xHigh: '#373333',
                xLow: '#ffffff',
            },
            onTools: {
                default: '#4a90e2',
                selected: '#979797',
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
                    default: '60px',
                    expanded: '90px',
                },
                segmentedControls: {
                    button: '30px',
                },
            },
            radius: {
                mainMenu: {
                    button: '5px',
                    topLeft: '15px',
                },
                segmentedControl: {
                    button: '0px',
                },
            },
        },
    },
});
export default FerretTheme;
