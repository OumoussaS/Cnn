/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  images: {
    domains: [
      "logodownload.org",
      "upload.wikimedia.org",
      "a0.muscache.com",
      "links.papareact.com",
      "www.whitmorerarebooks.com",
      "i.ibb.co",
    ],
  },
  nextConfig,
  env: {
    DB_LOCAL_URI: "mongodb://127.0.0.1:27017/bookit",
    mapbox_key:
      "pk.eyJ1IjoiNG40cyIsImEiOiJja3lyZTNxY28wbTZoMm90ZzliZHBmOXdkIn0.jHN4TGb4AqL0B8Tn2opPdQ",
    JWT_SECRET:
      "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY0NzUxNDQxOCwiaWF0IjoxNjQ3NTE0NDE4fQ.RTVRgAQMk2LZw1-wt8BnJBQQvl6KDHnB7cXMvW5YPqo",
  },
};
