import type { Site, Ui, Features } from './types'

export const SITE: Site = {
  website: 'https://astro-antfustyle-theme.vercel.app/',
  base: '/',
  title: 'Advanced Combinatorics',
  description:
    'A customizable, feature-rich Astro theme for blog and portfolio creation',
  author: 'Stephanie Lin',
  lang: 'en',
  ogLocale: 'en_US',
}

export const UI: Ui = {
  internalNavs: [
    {
      path: '/my_blog',
      title: 'Blog',
      displayMode: 'textToIconOnMobile',
      text: 'Blog',
      icon: 'i-ri-article-line',
    },
    {
      path: '/numeric_systems',
      title: '"The Best" Numerical System',
      displayMode: 'textToIconOnMobile',
      text: '"The Best" Numerical System',
      icon: 'i-mdi-numbers',
    },
  ],
  socialLinks: [
    {
      link: 'https://github.com/lin-stephanie/astro-antfustyle-theme',
      title: 'AntfuStyle on Github',
      displayMode: 'alwaysIcon',
      icon: 'i-uil-github-alt',
    },
    {
      link: 'https://x.com/ste7lin',
      title: `${SITE.author} on Twitter`,
      displayMode: 'iconHiddenOnMobile',
      icon: 'i-ri-twitter-x-fill',
    },
  ],
  navBarLayout: {
    left: [],
    right: ['themeButton', 'internalNavs'],
  },
  tabbedLayoutTabs: [
    { title: 'Changelog', path: '/changelog' },
    { title: 'AstroBlog', path: '/feeds' },
    { title: 'AstroStreams', path: '/streams' },
  ],
  maxGroupColumns: 3,
  showGroupItemColorOnHover: true,
}

/**
 * Configures whether to enable special features:
 *  - Set to `false` or `[false, {...}]` to disable the feature.
 *  - Set to `[true, {...}]` to enable and configure the feature.
 */
export const FEATURES: Features = {
  share: [
    true,
    {
      twitter: [true, '@ste7lin'],
      mastodon: [true, '@ste7lin@fairy.id'],
      facebook: false,
      pinterest: false,
      reddit: false,
      telegram: false,
      whatsapp: false,
      email: false,
    },
  ],
  toc: [
    true,
    {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
      displayPosition: 'left',
      displayMode: 'hover',
    },
  ],
  ogImage: [
    true,
    {
      authorOrBrand: `${SITE.title}`,
      fallbackTitle: `${SITE.description}`,
      fallbackBgType: 'plum',
    },
  ],
}
