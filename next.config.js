/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "img.freepik.com",
                pathname: "free-vector",
                port: "",
                protocol: "https",
            },
        ],
    },
};

module.exports = nextConfig;
