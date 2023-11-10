import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import React from 'react';
import { render } from '@testing-library/react';

import { ThemeProvider as MaterialThemeProvider } from '@mui/material/styles';
import WolverineTheme from './WolverineTheme';
import 'jest-styled-components';

export const renderWithTheme: any = (component: any) => {
    const result = render(
        <StyledComponentsThemeProvider theme={WolverineTheme}>
            <MaterialThemeProvider theme={WolverineTheme}>{component}</MaterialThemeProvider>
        </StyledComponentsThemeProvider>
    );
    return {
        ...result,
        rerender: (component: any) =>
            result.rerender(
                <StyledComponentsThemeProvider theme={WolverineTheme}>
                    <MaterialThemeProvider theme={WolverineTheme}>{component}</MaterialThemeProvider>
                </StyledComponentsThemeProvider>
            ),
    };
};
