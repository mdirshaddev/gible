// Types
import { MuiProps } from "types/mui";

// React
import { cloneElement, Fragment, useState } from "react";

// Next
import NextImage from "next/image";

// Material UI
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import GlobalStyles from "@mui/material/GlobalStyles";
import { styled } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

// Material Icons
import {
	Dashboard as IconDashboard,
	Search as IconSearch,
	GitHub as IconGithub,
	LightMode as IconLightMode,
	DarkMode as IconDarkMode
} from "@mui/icons-material";

// Custom Theme
import theme from "themes";

// Utilities
import NextMuiLink from "./utilities/NextMuiLink";
import NextMuiButton from "./utilities/NextMuiButton";

// TODO: Theme based control for transition of header background as per glassmorphism
const Header = styled("header")(({ theme }) => [
	{
		position: "sticky",
		top: 0,
		transition: theme.transitions.create("top"),
		zIndex: theme.zIndex.appBar,
		backdropFilter: "blur(20px)",
		boxShadow: `inset 0px -1px 1px ${grey[800]}`,
		backgroundColor:
			theme.palette.mode === "light"
				? "rgba(255, 255, 255, 0.72)"
				: "rgba(10, 25, 41, 0.72)"
	}
]);

const StyledNextMuiButton = styled(NextMuiButton)(({ theme }) => [
	{
		textTransform: "capitalize",
		padding: "10px",
		borderRadius: "10px",
		"&:hover": {
			background: "#132F4C"
		}
	}
]);

const StyledResponsiveBox = styled(Box)(({ theme }) => [
	{
		[theme.breakpoints.down("sm")]: {
			display: "none"
		},
		[theme.breakpoints.up("sm")]: {
			marginLeft: "10px"
		}
	}
]);

const StyledSearchBox = styled(Box)(({ theme }) => [
	{
		[theme.breakpoints.down("md")]: {
			".search-text": {
				display: "none",
				fontWeight: "medium"
			},
			".control-keys": {
				display: "none"
			}
		}
	}
]);

// TODO: This sytle will be used later
// const StyledIconBox = styled(Box)(({ theme }) => [
// 	{
// 		display: "inline-flex",
// 		alignItems: "center",
// 		justifyContent: "center",
// 		position: "relative",
// 		boxSizing: "border-box",
// 		WebkitTapHighlightColor: "transparent",
// 		backgroundColor: "transparent",
// 		outline: "0",
// 		margin: "0",
// 		padding: "0",
// 		cursor: "pointer",
// 		userSelect: "none",
// 		verticalAlign: "middle",
// 		MozAppearance: "none",
// 		WebkitAppearance: "none",
// 		textDecoration: "none",
// 		textAlign: "center",
// 		flex: "0 0 auto",
// 		fontSize: "1.5rem",
// 		overflow: "visible",
// 		color: "#66B2FF",
// 		transition: "150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
// 		height: "34px",
// 		width: "34px",
// 		borderColor: "#132F4C",
// 		borderRadius: "10px",
// 		border: "2px solid #132F4C",
// 		marginLeft: "10px"
// 	}
// ]);

const StyledNavTypography = styled(Typography)(({ theme }) => [
	{
		fontWeight: "bold",
		color: "white"
	}
]);

const StyledNavButton = styled(Button)(({ theme }) => [
	{
		textTransform: "capitalize",
		fontWeight: "medium",
		minHeight: "34px",
		minWidth: "34px",
		display: "flex",
		alignItems: "center",
		backgroundColor: "rgb(10, 25, 41)",
		color: "rgb(178, 186, 194)",
		fontSize: "0.875rem",
		border: "1px solid rgb(19, 47, 76)",
		borderRadius: "10px",
		cursor: "pointer",
		transitionProperty: "all",
		transitionDuration: "150ms",
		padding: "0 4px 0 4px",
		[theme.breakpoints.up("md")]: {
			minWidth: "200px",
			padding: "0 4px 0 10px"
		}
	}
]);

const StyledIconButton = styled(Button)(({ theme }) => [
	{
		minHeight: "34px",
		minWidth: "34px",
		display: "flex",
		alignItems: "center",
		backgroundColor: "rgb(10, 25, 41)",
		color: "rgb(178, 186, 194)",
		fontSize: "0.875rem",
		border: "1px solid rgb(19, 47, 76)",
		borderRadius: "10px",
		cursor: "pointer",
		transitionProperty: "all",
		transitionDuration: "150ms",
		padding: "0 4px 0 4px",
		marginLeft: "10px"
	}
]);

const StyledIconLink = styled(NextMuiLink)(({ theme }) => [
	{
		minHeight: "34px",
		minWidth: "34px",
		display: "flex",
		alignItems: "center",
		backgroundColor: "rgb(10, 25, 41)",
		color: "rgb(178, 186, 194)",
		fontSize: "0.875rem",
		border: "1px solid rgb(19, 47, 76)",
		borderRadius: "10px",
		cursor: "pointer",
		transitionProperty: "all",
		transitionDuration: "150ms",
		padding: "0 4px 0 4px",
		marginLeft: "10px"
	}
]);

const StyledSearchIcon = styled(IconSearch)(({ theme }) => [
	{
		userSelect: "none",
		width: "1em",
		height: "1em",
		display: "inline-block",
		fill: "currentcolor",
		flexShrink: "0",
		transition: "fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
		fontSize: "1.25rem",
		color: "rgb(102, 178, 255)"
	}
]);

const StyledGithubIcon = styled(IconGithub)(({ theme }) => [
	{
		width: "1em",
		height: "1em",
		display: "flex",
		alignItems: "center",
		flexDirection: "row",
		transition: "fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
		color: "rgb(102, 178, 255)"
	}
]);

const StyledLightModeIcon = styled(IconLightMode)(({ theme }) => [
	{
		width: "1em",
		height: "1em",
		display: "flex",
		alignItems: "center",
		flexDirection: "row",
		transition: "fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
		color: "rgb(102, 178, 255)"
	}
]);

const StyledDarkModeIcon = styled(IconDarkMode)(({ theme }) => [
	{
		width: "1em",
		height: "1em",
		display: "flex",
		alignItems: "center",
		flexDirection: "row",
		transition: "fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
		color: "rgb(102, 178, 255)"
	}
]);

function ElevationScroll(props: MuiProps): JSX.Element {
	const { children, window } = props;
	// Note that you normally won't need to set the window ref as useScrollTrigger
	// will default to window.
	// This is only being set here because the demo is in an iframe.
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
		target: window ? window() : undefined
	});

	return cloneElement(children, {
		elevation: trigger ? 4 : 0
	});
}

// TODO: Theme toggle function and custom theme needs a refractor and rework
export default function ElevateAppBar(props: MuiProps): JSX.Element {
	const [toggleState, setToggleState] = useState<boolean>(false);
	const toggleDarkState = () => {
		setToggleState(!toggleState);
	};
	const HEIGHT: number = 56;
	return (
		<Fragment>
			<ElevationScroll {...props}>
				<Header theme={theme}>
					<GlobalStyles
						styles={{
							":root": {
								"--MuiDocs-header-height": `${HEIGHT}px`
							}
						}}
					/>
					<Container
						maxWidth='xl'
						sx={{ display: "flex", alignItems: "center", minHeight: 60 }}>
						<Toolbar>
							{/* TODO: Here goes content for Header */}
							<NextMuiLink href='/'>
								<Fragment>
									<NextImage
										width='40px'
										height='40px'
										alt='Branding'
										src='/brand-logo.png'
									/>
								</Fragment>
							</NextMuiLink>
							<StyledResponsiveBox>
								<StyledNextMuiButton variant='text' href='/'>
									<StyledNavTypography>Dashboard</StyledNavTypography>
								</StyledNextMuiButton>
								<StyledNextMuiButton variant='text' href='/'>
									<StyledNavTypography>Docs</StyledNavTypography>
								</StyledNextMuiButton>
								<StyledNextMuiButton variant='text' href='/'>
									<StyledNavTypography>About Me</StyledNavTypography>
								</StyledNextMuiButton>
								<StyledNextMuiButton variant='text' href='/'>
									<StyledNavTypography>Timeline</StyledNavTypography>
								</StyledNextMuiButton>
							</StyledResponsiveBox>
						</Toolbar>
						<Box sx={{ ml: "auto" }} />
						<Box sx={{ display: "flex", flexDirection: "row" }}>
							<StyledSearchBox>
								<StyledNavButton>
									<StyledSearchIcon />
									<span
										className='search-text'
										style={{ marginLeft: "10px", marginRight: "auto" }}>
										Search...
									</span>
									<div
										className='control-keys'
										style={{
											fontSize: "0.75rem",
											fontWeight: "400",
											lineHeight: "20px",
											marginLeft: "5px",
											border: "1px solid rgb(30, 73, 118)",
											backgroundColor: "rgb(0, 30, 60)",
											padding: "0px 8px",
											borderRadius: "5px",
											color: "white"
										}}>
										Ctrl+K
									</div>
								</StyledNavButton>
							</StyledSearchBox>
							<StyledIconLink
								aria-label='GitHub Repository'
								href='https://github.com/mdirshaddev/gible'>
								<Tooltip title='GitHub Repository'>
									<StyledGithubIcon />
								</Tooltip>
							</StyledIconLink>
							<StyledIconButton onClick={toggleDarkState}>
								<Tooltip title='Toggle Theme'>
									{toggleState ? (
										<StyledLightModeIcon />
									) : (
										<StyledDarkModeIcon />
									)}
								</Tooltip>
							</StyledIconButton>
						</Box>
					</Container>
				</Header>
			</ElevationScroll>
			<Toolbar />
			<Container maxWidth='xl'>
				<Box color='white' sx={{ my: 2 }}>
					{props.children}
				</Box>
			</Container>
		</Fragment>
	);
}
