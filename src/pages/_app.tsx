import { Fragment } from 'react';
import { AppProps } from 'next/app';

import HeadMetaTag from 'components/utilities/MetaTag';

function App({ Component, pageProps }: AppProps) {
	// Use the layout defined at the page level, if available
	const getLayout = Component.getLayout ?? (page => page);
	// TODO: Need a loader for page transitions
	return getLayout(
		<Fragment>
			<HeadMetaTag />
			<Component {...pageProps} />
		</Fragment>
	);
}

export default App;
