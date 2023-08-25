/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'josestg.com',
  author: 'Jose Sitanggang',
  headerTitle: 'josestg.com',
  description: 'My thoughts on software engineering and computer science',
  language: 'en-us',
  theme: 'system',
  siteUrl: 'https://josestg.com',
  siteRepo: 'https://github.com/josestg/josestg.com',
  siteLogo: '/static/images/logo.svg',
  socialBanner: '/static/images/twitter-card.png',
  email: 'josealfredositanggang@gmail.com',
  github: 'https://github.com/josestg',
  twitter: 'https://twitter.com/@_josestg',
  youtube: 'https://youtube.com/@josestg',
  linkedin: 'https://www.linkedin.com/in/josestg/',
  threads: 'https://threads.net/@_josestg',
  locale: 'en-US',
  analytics: {
    googleAnalytics: {
      googleAnalyticsId: 'G-9WRM2899TP',
    },
  },
  comments: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
      lang: 'en',
    },
  },
  search: {
    provider: 'kbar',
    kbarConfig: {
      searchDocumentsPath: 'search.json',
    },
  },
  newsletter: {
    provider: 'mailchimp',
  },
}

module.exports = siteMetadata
