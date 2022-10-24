import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
	overwrite: true,
	schema: process.env.NEXT_PUBLIC_GITHUB_GRAPHQL_API,
	config: {
		headers: {
			Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_SECRET_TOKEN}`
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
				fetcher: {
					endpoint: process.env.NEXT_PUBLIC_GITHUB_GRAPHQL_API,
					fetchParams: {
						headers: {
							Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_SECRET_TOKEN}`
						}
					}
				},
				isReactHook: true,
				writeHooks: true
			}
		},
		"./graphql.schema.json": {
			plugins: ["introspection"]
		}
	}
};

export default config;
