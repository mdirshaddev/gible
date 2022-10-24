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

// React Query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// Material UI
import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

// Emotion
import { CacheProvider, EmotionCache } from "@emotion/react";

// Framer Motion
import { AnimatePresence } from "framer-motion";

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
	// React Query client
	const client = new QueryClient();

	// Use the layout defined at the page level, if available
	const getLayout = Component.getLayout ?? (page => page);
	// TODO: Need a loader for page transitions
	// TODO: Need a progress bar for the page when is loading show a loadinf effect for better eexperience
	return getLayout(
		<Fragment>
			<AnimatePresence onExitComplete={() => window.scrollTo(0, 0)}>
				<QueryClientProvider client={client}>
					<CacheProvider value={emotionCache}>
						<HeadMetaTag />
						{/* <CssVarsProvider theme={theme}> */}
						<ThemeProvider theme={theme}>
							{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
							<CssBaseline />
							<ReactQueryDevtools initialIsOpen={true} />
							<Component {...pageProps} />
						</ThemeProvider>
						{/* </CssVarsProvider> */}
					</CacheProvider>
				</QueryClientProvider>
			</AnimatePresence>
		</Fragment>
	);
}

export default App;
