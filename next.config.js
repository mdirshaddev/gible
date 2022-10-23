/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	typescript: {
		ignoreBuildErrors: false
	},
	eslint: {
		ignoreDuringBuilds: true
	},
	compress: true
};

module.exports = nextConfig;
