import { createTheme } from '@mui/material/styles';
import { grey, common } from '@mui/material/colors';

export const theme = createTheme({
    palette: {
        primary: {
            main: common.black, // Black for primary
        },
        secondary: {
            main: grey[800], // Darker grey for secondary
            contrastText: '#ffffff' // White text on secondary background
        },
        background: {
            default: grey[200], // Darker light grey background
            paper: grey[300], // Darker grey paper color
        },
        text: {
            primary: common.black, // Black text
            secondary: grey[600], // Darker grey text for secondary content
        },
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', // Ensure consistent typography
        h1: {
            fontWeight: 700,
        },
        h2: {
            fontWeight: 700,
        },
        h3: {
            fontWeight: 700,
        },
        h4: {
            fontWeight: 700,
        },
        h5: {
            fontWeight: 700,
        },
        h6: {
            fontWeight: 700,
        },
        button: {
            textTransform: 'none', // Disable uppercase text transformation for buttons
        },
    },
    shape: {
        borderRadius: 8, // Slightly rounded corners for elements
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none', // Disable uppercase text transformation for buttons
                    borderRadius: 8, // Consistent border radius
                },
            },
        },
        
        MuiPaper: {
            styleOverrides: {
                root: {
                    padding: '5px', // Consistent padding for paper components
                    borderRadius: 30, 
                },
            },
        },
    },
});
