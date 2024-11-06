/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "raw.githubusercontent.com",
                pathname: "/amitsgh/jamboree_admission/main/images/**", // Adjust path as needed
            },
        ],
    },
};

export default nextConfig;
