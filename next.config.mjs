/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
   images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
      {
        protocol:"https",
        hostname:"i.pravatar.cc"
      },
      
      {
        protocol:"https",
        hostname:"job-oriented-course.grras.com"
      },
    ],
  },
};

export default nextConfig;
