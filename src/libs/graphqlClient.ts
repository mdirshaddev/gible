import { GraphQLClient } from "graphql-request";

const graphqlRequestClient = new GraphQLClient(
	"https://api.github.com/graphql",
	{
		headers: {
			authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_SECRET_TOKEN}`
		}
	}
);

export default graphqlRequestClient;
