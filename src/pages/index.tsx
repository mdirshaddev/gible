// Types
import type { NextPageWithLayout } from "next";

// React
import React, { ReactElement } from "react";

// Material UI
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

// Utilities
import Layout from "components/utilities/Layout";

const Landing: NextPageWithLayout = () => {
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
			</Container>
		</Box>
	);
};

Landing.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

export default Landing;
