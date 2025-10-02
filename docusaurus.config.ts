import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'init my macbook',
  tagline: 'MacBook 初始化与开发环境安装记录，开箱即用的工具清单',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // GitHub Pages 部署配置
  url: 'https://chiaki-xps.github.io',
  baseUrl: (process.env.BASE_URL as string) || '/',

  // GitHub Pages 所属组织/仓库名
  organizationName: 'Chiaki-xps',
  projectName: 'init-my-macbook',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          path: 'docs',
          include: ['index.mdx'],
          sidebarPath: false,
        },
        pages: false,
        blog: false,
        sitemap: {
          changefreq: 'weekly',
          priority: 0.8,
          filename: 'sitemap.xml',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'init my macbook',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          href: 'https://github.com/Chiaki-xps/init-my-macbook',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/Chiaki-xps/init-my-macbook',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    metadata: [
      {name: 'description', content: '为新 MacBook 提供一键式初始化指南：Homebrew、开发工具、Node.js/Go、数据库与系统设置等完整清单与命令。'},
      {name: 'keywords', content: 'MacBook, 初始化, 安装记录, 开发环境, 工具清单, Node.js, Go, PostgreSQL, Redis'},
      {name: 'author', content: 'Chiaki-xps'},
    ],
  } satisfies Preset.ThemeConfig,
  // 保留原生 SEO 配置（metadata/sitemap/i18n），不再注入外部 JSON-LD 脚本
};

export default config;
