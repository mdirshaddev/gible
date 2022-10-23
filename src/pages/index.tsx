// Types
import type { NextPageWithLayout } from "next";

// React
import React, { ChangeEvent, ReactElement, useEffect, useState } from "react";

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
	return (
		<Box>
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
