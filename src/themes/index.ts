// Material Styles
import { createTheme } from "@mui/material/styles";

// TODO: Need a rework in this theme function
const theme = createTheme({
	breakpoints: {
		values: {
			xs: 300, // phone
			sm: 600, // tablets
			md: 900, // small laptop
			lg: 1200, // desktop
			xl: 1536 // large screens
		}
	},
	palette: {
		mode: "dark"
	}
});

export default theme;
