import createTheme from "@mui/material/styles/createTheme";

export const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1440,
            xl: 1536,
        },
    },
});
