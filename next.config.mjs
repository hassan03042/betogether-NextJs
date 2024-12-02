/** @type {import('next').NextConfig} */
const nextConfig = {
    images : {
        remotePatterns : [
            {hostname : "img.freepik.com"},
            {hostname : "cdn-icons-png.flaticon.com"}, 
            {hostname : "encrypted-tbn0.gstatic.com"}, 
            {hostname : "www.southernliving.com"}, 
            {hostname : "marketplace.canva.com"}, 
            {hostname : "encrypted-tbn0.gstatic.com"}, 
            {hostname : "png.pngtree.com"}, 
            {hostname : "res.cloudinary.com"}, 
            {hostname : "lh3.googleusercontent.com"}, 
        ]
    }
};

export default nextConfig;
