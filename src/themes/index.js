import { createTheme } from '@mui/material/styles';

import themePalette from './palette';
import themeTypography from './typography';
// import componentStyleOverrides from './componentStyleOverrides';
import colors from '../assets/scss/themeVars.module.scss';

const color = colors;

const themeOption = {
    colors: color,
    heading: color.grey900,
    paper: color.paper,
    backgroundDefault: color.paper,
    background: color.primaryLight,
    darkTextPrimary: color.grey700,
    darkTextSecondary: color.grey500,
    textDark: color.grey900,
    menuSelected: color.secondaryDark,
    menuSelectedBack: color.secondaryLight,
    divider: color.grey200,
};

const themeOptions = {
    palette: themePalette(themeOption),
    typography: themeTypography(themeOption),
};

const theme = createTheme(themeOptions);
export default theme;