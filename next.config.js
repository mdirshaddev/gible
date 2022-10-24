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
	compress: true,
	images: {
		unoptimized: false
	}
};

module.exports = nextConfig;
