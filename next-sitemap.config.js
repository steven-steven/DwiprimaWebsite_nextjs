/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.SITE_URL || 'https://dwiprimakaryaguna.vercel.app',
  generateRobotsTxt: true,
  robotsTxtOptions: {
     policies: [
        {userAgent: "*", allow: "/blog/*"},
        {userAgent: "*", allow: "/"},
     ],
  },
};
