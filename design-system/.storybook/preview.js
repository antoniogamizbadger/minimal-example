import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import { ThemeProvider } from 'styled-components';

import theme from '../src/stories/Theme/WolverineTheme';

const preview = {
    decorators: [
        withThemeFromJSXProvider({
            themes: {
                light: theme,
            },
            defaultTheme: 'light',
            Provider: ThemeProvider,
        }),
    ],
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
};

export default preview;
