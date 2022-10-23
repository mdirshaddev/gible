// Types
import Head from "next/head";

function MetaTag() {
	return (
		<Head>
			<title>Gible</title>
			<meta charSet='utf-8' />
			<meta httpEquiv='X-UA-Compatible' content='IE=edge' />
			<meta
				name='viewport'
				content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no'
			/>
			<meta
				name='description'
				content='A Github Analytics Dashboard Web App build with NextJS and Material UI'
			/>

			{/* Tap highlighting  */}
			<meta name='msapplication-tap-highlight' content='no' />

			{/* Layout mode */}
			<meta name='layoutmode' content='fitscreen/standard' />

			{/* imagemode - show image even in text only mode  */}
			<meta name='imagemode' content='force' />

			{/* Orientation  */}
			<meta name='screen-orientation' content='portrait' />

			{/* Manifest */}
			<link rel='manifest' href='/manifest.webmanifest' />
		</Head>
	);
}

export default MetaTag;
