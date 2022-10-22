import Layout from 'components/utilities/Layout';
import type { NextPageWithLayout } from 'next';
import React, { ReactElement } from 'react';

const Landing: NextPageWithLayout = () => {
	return (
		<div>
			<div>
				<div>Gible - NextJS and Material UI</div>
			</div>
		</div>
	);
};

Landing.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

export default Landing;
