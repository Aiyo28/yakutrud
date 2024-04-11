/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "zwtt9bndtocwgtvn.public.blob.vercel-storage.com",
            },
            {
                hostname: 'rabota.ykt.ru',
            }
        ],
    },
};

export default nextConfig;
