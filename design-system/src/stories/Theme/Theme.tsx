import { ThemeProvider as MaterialThemeProvider } from '@mui/material';
import React, { LegacyRef } from 'react';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import WolverineTheme from './WolverineTheme';
import FerretTheme from './FerretTheme';

interface Props {
    children: any;
    name: string;
}

class Theme extends React.Component<Props> {
    childrenRef: React.LegacyRef<any>;

    constructor(props: Props) {
        super(props);
        this.childrenRef = React.createRef() as LegacyRef<any>;
    }

    childrenWithProps = (child: any) => React.cloneElement(child, { ref: this.childrenRef as LegacyRef<unknown> });

    render() {
        const { children, name } = this.props;

        let selectedTheme = WolverineTheme;

        if (name === 'FerretTheme') {
            selectedTheme = FerretTheme;
        }

        return (
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            <StyledComponentsThemeProvider theme={selectedTheme} ref={children as LegacyRef<any>}>
                <MaterialThemeProvider theme={selectedTheme}>{this.childrenWithProps(children)}</MaterialThemeProvider>
            </StyledComponentsThemeProvider>
        );
    }
}

export default Theme;
