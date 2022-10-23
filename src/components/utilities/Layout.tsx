// Types
import { IChildProps } from "types/react";

// React
import { FC, Fragment } from "react";

// Components
import ElevateAppBar from "components/NavBar";

const Layout: FC<IChildProps> = (props): JSX.Element => {
	return (
		<Fragment>
			<ElevateAppBar>
				<div>{props.children}</div>
			</ElevateAppBar>
		</Fragment>
	);
};

export default Layout;
