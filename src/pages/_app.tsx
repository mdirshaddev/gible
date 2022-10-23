// CSS Stylesheets
import "styles/globals.css";

// Roboto Font CSS
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

// React
import { Fragment } from "react";
import { AppProps } from "next/app";

// Material UI
import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";

// Utilities
import HeadMetaTag from "components/utilities/MetaTag";
import createEmotionCache from "utilities/createEmotionCache";

// Custom Theme
import theme from "themes";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache: EmotionCache = createEmotionCache();

function App({
	Component,
	pageProps,
	emotionCache = clientSideEmotionCache
}: AppProps) {
	// Use the layout defined at the page level, if available
	const getLayout = Component.getLayout ?? (page => page);
	// TODO: Need a loader for page transitions
	// TODO: Need a progress bar for the page when is loading show a loadinf effect for better eexperience
	return getLayout(
		<Fragment>
			<CacheProvider value={emotionCache}>
				<HeadMetaTag />
				{/* <CssVarsProvider theme={theme}> */}
				<ThemeProvider theme={theme}>
					{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
					<CssBaseline />
					<Component {...pageProps} />
				</ThemeProvider>
				{/* </CssVarsProvider> */}
			</CacheProvider>
		</Fragment>
	);
}

export default App;
