import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
	overwrite: true,
	schema: "https://api.github.com/graphql",
	config: {
		headers: {
			Authorization: `Bearer ${process.env.GITHUB_SECRET_TOKEN}`
		}
	},
	documents: ["src/graphql/**/*.graphql"],
	generates: {
		"src/generated/graphql.tsx": {
			plugins: [
				"typescript",
				"typescript-operations",
				"typescript-react-query"
			],
			config: {
				fetcher: "graphql-request",
				isReactHook: true
			}
		},
		"./graphql.schema.json": {
			plugins: ["introspection"]
		}
	}
};

export default config;
