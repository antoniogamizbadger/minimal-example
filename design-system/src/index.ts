import styled from 'styled-components';
import {Tab as TabMaterial} from '@mui/material';
import { TabList as TabListMaterial, TabContext as TabContextMaterial, TabPanel as TabPanelMaterial } from '@mui/lab';

export const TabList: typeof TabListMaterial = styled(TabListMaterial)`
    min-height: 40px !important;
    height: 40px !important;
    margin: 1px;
    background-color: ${({ theme }) => theme.palette.colors.basic.white['white-default'].value};

    & .Mui-selected {
        color: ${({ theme }) => theme.palette.colors.basic.white['white-default'].value} !important;
        font-weight: 700 !important;
        border-radius: 20px !important;
        background-color: ${({ theme }) => theme.palette.colors.theme.primary['primary-default'].value};
    }

    & .MuiTabs-indicator {
        display: none;
    }
`;

export const Tab = styled(TabMaterial)`
    text-transform: none !important;
    color: ${({ theme }) => theme.palette.colors.basic.gray['gray-default'].value} !important;
    font-size: 12px !important;
    min-height: 40px !important;
    height: 40px !important;
`;

export const TabContext = styled(TabContextMaterial)``;

export const TabPanel = styled(TabPanelMaterial)`
    padding: 0 !important;
`;
