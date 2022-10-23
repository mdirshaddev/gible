import type { ReactElement } from "react";

interface MuiProps {
	/**
	 * Injected by the documentation to work in an iframe.
	 * You won't need it on your project.
	 */
	window?: () => Window;
	children: ReactElement;
}
