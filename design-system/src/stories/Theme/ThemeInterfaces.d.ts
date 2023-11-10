import '@mui/material/styles';
// Augment the Palette and PaletteOptions interface
declare module '@mui/material/styles' {
    interface Palette {
        Basic: {
            _100: string;
            _200: string;
            dark: string;
            darker: string;
            default: string;
            default_10: string;
            default_20: string;
            light: string;
            light_70: string;
            lighter: string;
            mainMenu_F: string;
            mainMenu_O: string;
            mainMenu_W: string;
            menu_F: string;
            transparent: string;
            white: string;
        };
        F_Accent: {
            default: string;
            default_30: string;
            default_5: string;
        };
        F_Primary: {
            dark: string;
            default: string;
            default_10: string;
            default_30: string;
            default_40: string;
            h1: string;
        };
        Logo: {
            main: string;
        };
        O_Accent: {
            default: string;
            default_20: string;
            default_8: string;
        };
        O_Primary: {
            dark: string;
            darker: string;
            default: string;
            default_20: string;
            light: string;
        };
        State: {
            alert: string;
            alert_20: string;
            alert_5: string;
            destructive: string;
            info: string;
            info_20: string;
            info_5: string;
            success: string;
            success_20: string;
            success_5: string;
            warning: string;
            warningDark: string;
            warning_20: string;
        };
        W_Primary: {
            dark: string;
            default: string;
            default_10: string;
            default_40: string;
            h1: string;
            h2: string;
        };
        W_Secondary: {
            dark: string;
            default: string;
            hover: string;
        };
        Background: {
            bars: {
                Color: string;
                footers: {
                    toolbar: string;
                };
                headers: {
                    hover: string;
                    secondaryNav: string;
                };
            };
            button: {
                tools: string;
                control: {
                    notSelected: string;
                    selected: string;
                };
                mainMenu: {
                    dataNotSelected: string;
                    dataSelected: string;
                    disabled: string;
                    enabled: string;
                    hover: string;
                    objectSelected: string;
                    selected: string;
                };
                primary: {
                    active: string;
                    destructive: string;
                    directFeedback: string;
                    disabled: string;
                    enabled: string;
                    hover: string;
                };
                secondary: {
                    active: string;
                    directFeedback: string;
                    disabled: string;
                    enabled: string;
                    hover: string;
                };
                tertiary: {
                    active: string;
                    directFeedback: string;
                    disabled: string;
                    enabled: string;
                    hover: string;
                };
            };
            fields: {
                picklist: {
                    default: string;
                };
                searchBar: {
                    default: string;
                    default_2: string;
                };
                suggestions: {
                    default: string;
                };
                textField: {
                    default: string;
                    error: string;
                    filled: string;
                    focus: string;
                };
            };
            secondary: {
                default: string;
            };
            listItems: {
                active: string;
                default: string;
                hover: string;
                hover2_remove_when_fixing: string;
                selected: string;
                related: {
                    collapsed: string;
                    expanded: string;
                };
            };
            menu: {
                default: string;
                subMenu: string;
            };
            primary: {
                default: string;
            };
            state: {
                alert: string;
                alert2: string;
                alert3: string;
                info: string;
                info2: string;
                info3: string;
                success: string;
                success2: string;
                success3: string;
                warning: string;
                warning2: string;
            };
            summary: {
                body: string;
                header: string;
                multiple_summary: string;
            };
            table: {
                content: {
                    default: string;
                    hover: string;
                    selected: string;
                };
                header: {
                    default: string;
                };
            };
            tooltip: {
                default: string;
            };
        };
        Border: {
            button: {
                active: string;
                directFeedback: string;
                disabled: string;
                enabled: string;
                hover: string;
            };
            fields: {
                searchBar: {
                    default: string;
                };
                textField: {
                    default: string;
                    error: string;
                    filled: string;
                    focus: string;
                };
            };
            listItem: {
                default: string;
            };
        };
        Brand: {
            accent: {
                default: string;
            };
            primary: {
                default: string;
            };
            secondary: {
                default: string;
            };
        };
        Shadow: {
            button: string;
        };
        Text: {
            onButton: {
                primary: {
                    active: string;
                    destructive: string;
                    direct_feedback: string;
                    disabled: string;
                    enabled: string;
                    hover: string;
                };
                secondary: {
                    active: string;
                    direct_feedback: string;
                    disabled: string;
                    enabled: string;
                    hover: string;
                };
                tertiary: {
                    active: string;
                    direct_feedback: string;
                    disabled: string;
                    enabled: string;
                    hover: string;
                };
            };
            onControl: {
                notSelected: string;
                selected: string;
            };
            onMenu: {
                disabled: string;
                enabled: string;
                hover: string;
                secondarySelected: string;
                selected: string;
            };
            onNavigation: {
                default: string;
            };
            onSearchBar: {
                icon: string;
                placeholder: string;
            };
            onSurface: {
                accent: string;
                high: string;
                link: string;
                low: string;
                medium: string;
                xHigh: string;
                xLow: string;
            };
            onTools: {
                default: string;
                selected: string;
            };
            state: {
                alert: string;
                alert2: string;
                alert3: string;
                info: string;
                info2: string;
                info3: string;
                success: string;
                success2: string;
                success3: string;
                warning: string;
                warningDark: string;
            };
        };
        Measures: {
            height: {
                mainNavHeader: {
                    default: string;
                    expanded: string;
                };
                segmentedControls: {
                    button: string;
                };
            };
            radius: {
                mainMenu: {
                    button: string;
                    topLeft: string;
                };
                segmentedControl: {
                    button: string;
                };
            };
        };
    }
    interface PaletteOptions {
        Basic: {
            _100: string;
            _200: string;
            dark: string;
            darker: string;
            default: string;
            default_10: string;
            default_20: string;
            light: string;
            light_70: string;
            lighter: string;
            mainMenu_F: string;
            mainMenu_O: string;
            mainMenu_W: string;
            menu_F: string;
            transparent: string;
            white: string;
        };
        F_Accent: {
            default: string;
            default_30: string;
            default_5: string;
        };
        F_Primary: {
            dark: string;
            default: string;
            default_10: string;
            default_30: string;
            default_40: string;
            h1: string;
        };
        Logo: {
            main: string;
        };
        O_Accent: {
            default: string;
            default_20: string;
            default_8: string;
        };
        O_Primary: {
            dark: string;
            darker: string;
            default: string;
            default_20: string;
            light: string;
        };
        State: {
            alert: string;
            alert_20: string;
            alert_5: string;
            destructive: string;
            info: string;
            info_20: string;
            info_5: string;
            success: string;
            success_20: string;
            success_5: string;
            warning: string;
            warningDark: string;
            warning_20: string;
        };
        W_Primary: {
            dark: string;
            default: string;
            default_10: string;
            default_40: string;
            h1: string;
            h2: string;
        };
        W_Secondary: {
            dark: string;
            default: string;
            hover: string;
        };
        Background: {
            bars: {
                Color: string;
                footers: {
                    toolbar: string;
                };
                headers: {
                    hover: string;
                    secondaryNav: string;
                };
            };
            button: {
                tools: string;
                control: {
                    notSelected: string;
                    selected: string;
                };
                mainMenu: {
                    dataNotSelected: string;
                    dataSelected: string;
                    disabled: string;
                    enabled: string;
                    hover: string;
                    objectSelected: string;
                    selected: string;
                };
                primary: {
                    active: string;
                    destructive: string;
                    directFeedback: string;
                    disabled: string;
                    enabled: string;
                    hover: string;
                };
                secondary: {
                    active: string;
                    directFeedback: string;
                    disabled: string;
                    enabled: string;
                    hover: string;
                };
                tertiary: {
                    active: string;
                    directFeedback: string;
                    disabled: string;
                    enabled: string;
                    hover: string;
                };
            };
            fields: {
                picklist: {
                    default: string;
                };
                searchBar: {
                    default: string;
                    default_2: string;
                };
                suggestions: {
                    default: string;
                };
                textField: {
                    default: string;
                    error: string;
                    filled: string;
                    focus: string;
                };
            };
            secondary: {
                default: string;
            };
            listItems: {
                active: string;
                default: string;
                hover: string;
                hover2_remove_when_fixing: string;
                selected: string;
                related: {
                    collapsed: string;
                    expanded: string;
                };
            };
            menu: {
                default: string;
                subMenu: string;
            };
            primary: {
                default: string;
            };
            state: {
                alert: string;
                alert2: string;
                alert3: string;
                info: string;
                info2: string;
                info3: string;
                success: string;
                success2: string;
                success3: string;
                warning: string;
                warning2: string;
            };
            summary: {
                body: string;
                header: string;
                multiple_summary: string;
            };
            table: {
                content: {
                    default: string;
                    hover: string;
                    selected: string;
                };
                header: {
                    default: string;
                };
            };
            tooltip: {
                default: string;
            };
        };
        Border: {
            button: {
                active: string;
                directFeedback: string;
                disabled: string;
                enabled: string;
                hover: string;
            };
            fields: {
                searchBar: {
                    default: string;
                };
                textField: {
                    default: string;
                    error: string;
                    filled: string;
                    focus: string;
                };
            };
            listItem: {
                default: string;
            };
        };
        Brand: {
            accent: {
                default: string;
            };
            primary: {
                default: string;
            };
            secondary: {
                default: string;
            };
        };
        Shadow: {
            button: string;
        };
        Text: {
            onButton: {
                primary: {
                    active: string;
                    destructive: string;
                    direct_feedback: string;
                    disabled: string;
                    enabled: string;
                    hover: string;
                };
                secondary: {
                    active: string;
                    direct_feedback: string;
                    disabled: string;
                    enabled: string;
                    hover: string;
                };
                tertiary: {
                    active: string;
                    direct_feedback: string;
                    disabled: string;
                    enabled: string;
                    hover: string;
                };
            };
            onControl: {
                notSelected: string;
                selected: string;
            };
            onMenu: {
                disabled: string;
                enabled: string;
                hover: string;
                secondarySelected: string;
                selected: string;
            };
            onNavigation: {
                default: string;
            };
            onSearchBar: {
                icon: string;
                placeholder: string;
            };
            onSurface: {
                accent: string;
                high: string;
                link: string;
                low: string;
                medium: string;
                xHigh: string;
                xLow: string;
            };
            onTools: {
                default: string;
                selected: string;
            };
            state: {
                alert: string;
                alert2: string;
                alert3: string;
                info: string;
                info2: string;
                info3: string;
                success: string;
                success2: string;
                success3: string;
                warning: string;
                warningDark: string;
            };
        };
        Measures: {
            height: {
                mainNavHeader: {
                    default: string;
                    expanded: string;
                };
                segmentedControls: {
                    button: string;
                };
            };
            radius: {
                mainMenu: {
                    button: string;
                    topLeft: string;
                };
                segmentedControl: {
                    button: string;
                };
            };
        };
    }
}
