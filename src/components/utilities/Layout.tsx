import Image from 'next/image';
import { FC, Fragment } from 'react';
import { IChildProps } from 'types/react';

const Layout: FC<IChildProps> = (props): JSX.Element => {
	return (
		<Fragment>
			<div>{props.children}</div>
		</Fragment>
	);
};

export default Layout;
