module.exports = {
  title: "VuePress Blog",
  description: "個人部落格",
  head: [
    ['meta', { name: "viewport", content: "width=device-width,user-scaleble=0,initial-scale=1.0,maximum-scale=1.0" }],
  ],
  locales: {
    '/': {
      lang: 'zh-TW',
    }
  },
//   plugins: ['@vuepress/blog'],
    plugins: [
        ['@vuepress/blog', {
            directories: [{
                id: 'article',
                dirname: '_articles',
                // itemPermalink: '/articles/:slug',
                itemPermalink: '/articles/:slug',
                pagination: {
                    lengthPerPage: 2,
                },
            }],
            sitemap: {
                hostname: 'https://nateritter.com'
            },
        }]
    ],
    themeConfig: {
        author: 'Nate Ritter',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Articles 文章', link: '/articles/' },
        ],
    }
};