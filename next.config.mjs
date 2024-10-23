/** @type {import('next').NextConfig} */
const nextConfig = {
    images : {
        remotePatterns : [
            {hostname : "img.freepik.com"},
            {hostname : "cdn-icons-png.flaticon.com"}, 
            {hostname : "encrypted-tbn0.gstatic.com"}, 
        ]
    }
};

export default nextConfig;
