// React
import React from "react";

// Next
import NextLink, { LinkProps as NextLinkProps } from "next/link";

// Material UI
import ButtonMui, { ButtonProps as ButtonMuiProps } from "@mui/material/Button";

export type LinkProps = Omit<ButtonMuiProps, "href" | "classes"> &
	Pick<NextLinkProps, "href" | "as" | "prefetch">;

const NextMuiButton = React.forwardRef<HTMLAnchorElement, LinkProps>(
	({ href, as, prefetch, ...props }, ref) => (
		<NextLink href={href} as={as} prefetch={prefetch} passHref>
			<ButtonMui {...props} />
		</NextLink>
	)
);

export default NextMuiButton;
