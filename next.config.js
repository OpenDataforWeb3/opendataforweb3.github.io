
// If you have other Next.js configurations, you can pass them as the parameter:
// module.exports = withNextra({ /* other next.js config */ })
const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
});
const base_path = process.env.NEXT_PUBLIC_BASE_PATH || ""
let assetPrefix = base_path + '/'
let basePath = base_path


module.exports = {
  ...withNextra(),
  images: {
    unoptimized: true,
  },
  assetPrefix: assetPrefix,
  basePath: basePath,
};
