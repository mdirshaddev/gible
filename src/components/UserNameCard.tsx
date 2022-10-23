import { FunctionComponent } from "react";

import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

// Generated GraphQL
import { UserQueryQuery, useUserQueryQuery } from "generated/graphql";

// Libraries
import graphqlRequestClient from "libs/graphqlClient";

interface UserNameProps {
	username: string;
}

const UserNameCard: FunctionComponent<UserNameProps> = (props): JSX.Element => {
	const { data, isLoading } = useUserQueryQuery<UserQueryQuery, Error>(
		graphqlRequestClient,
		{
			username: props.username
		}
	);
	return (
		<Paper
			elevation={2}
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				width: "350px",
				margin: "auto",
				padding: "10px"
			}}>
			<Box>{!isLoading && <pre>{JSON.stringify(data, null, 2)}</pre>}</Box>
		</Paper>
	);
};

export default UserNameCard;
