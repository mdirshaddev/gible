// Types
import type { NextPageWithLayout } from "next";

// React
import React, { ChangeEvent, ReactElement, useEffect, useState } from "react";

// Framer motion
import { motion } from "framer-motion";

// Material UI
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";

// Utilities
import Layout from "components/utilities/Layout";
import UserNameCard from "components/UserNameCard";

const Landing: NextPageWithLayout = () => {
	const [userName, setUserName] = useState<string>("");
	useEffect(() => {});
	const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		setUserName(e.target.value);
	};
	const variants = {
		hidden: { opacity: 0, x: -200, y: 0 },
		enter: { opacity: 1, x: 0, y: 0 },
		exit: { opacity: 0, x: 0, y: -100 }
	};
	return (
		<Box
			component={motion.div}
			variants={variants} // Pass the variant object into Framer Motion
			initial='hidden' // Set the initial state to variants.hidden
			animate='enter' // Animated state to variants.enter
			exit='exit' // Exit state (used later) to variants.exit
			transition={{ type: "linear" }} // Set the transition to linear
		>
			<Container maxWidth='xl'>
				<Paper
					elevation={2}
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
						width: "250px",
						margin: "auto",
						padding: "10px"
					}}>
					<Typography>Gible - NextJS with Material UI</Typography>
				</Paper>
				{userName != "" && <UserNameCard username={userName} />}
				<FormControl
					component='form'
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
						width: "350px",
						margin: "auto",
						padding: "10px",
						"& > :not(style)": { m: 1, width: "25ch" }
					}}
					noValidate
					autoComplete='off'>
					<TextField
						id='filled-basic'
						label='Username'
						onChange={handleInput}
						variant='filled'
					/>
					<Button>Submit</Button>
				</FormControl>
			</Container>
		</Box>
	);
};

Landing.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

export default Landing;
