// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'LEARN',
  tagline: 'Focus on micro:bit accessories!',
  url: 'https://test.elecfreaks.com/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'ELECFREAKS',
  projectName: 'learn.elecfreaks.com',
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['en', 'zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          disableVersioning: false,
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: ({ locale, docPath }) => {
            if (locale === 'zh-Hans') {
              return `https://github.com/elecfreaks/learn.elecfreaks.com/edit/main/docs/${docPath}`;
            }
            return `https://github.com/elecfreaks/learn.elecfreaks.com/edit/main/i18n/${locale}/docusaurus-plugin-content-docs/current/${docPath}`;
          },
        },
        blog: false,
        theme: {
          customCss: require.resolve('./css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'LEARN',
        logo: {
          alt: 'ELECFREAKS Logo',
          src: 'img/logo.svg',
        },
        style: 'primary',
        items: [
          {
            type: 'localeDropdown',
          },
          
        ],
      },
      docs: {
        sidebar: {
          autoCollapseCategories: true
        }
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/elecfreaks',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/ElecFreaksTech',
              },
              {
                label: 'Instagram',
                href: 'http://instagram.com/elecfreaks',
              },
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/channel/UCNx8XvTeFVnJuYQYhH-FxmQ',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                href: 'https://www.elecfreaks.com/blog.html',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/elecfreaks',
              },
            ],
          },
        ],
        copyright: `Copyright © 2013~${new Date().getFullYear()} ELECFREAKS, Inc. All rights reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
