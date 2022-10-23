// React
import React from "react";

// Next
import NextLink, { LinkProps as NextLinkProps } from "next/link";

// Material UI
import LinkMui, { LinkProps as LinkMUIProps } from "@mui/material/Link";

export type LinkProps = Omit<LinkMUIProps, "href" | "classes"> &
	Pick<NextLinkProps, "href" | "as" | "prefetch">;

const NextMuiLink = React.forwardRef<HTMLAnchorElement, LinkProps>(
	({ href, as, prefetch, ...props }, ref) => (
		<NextLink href={href} as={as} prefetch={prefetch} passHref>
			<LinkMui ref={ref} {...props} />
		</NextLink>
	)
);

export default NextMuiLink;
