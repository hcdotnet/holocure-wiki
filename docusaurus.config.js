// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "HoloCure Wiki",
  tagline: "Free, community-maintained HoloCure encyclopedia",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://hcw.tomat.dev",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "steviegt6", // Usually your GitHub org/user name.
  projectName: "holocure-wiki", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/steviegt6/holocure-wiki/tree/master/",
        },
        /*blog: {
          showReadingTime: true,
          editUrl: "https://github.com/steviegt6/holocure-wiki/tree/master/",
        },*/
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "HoloCure Wiki",
        logo: {
          alt: "HoloCure Logo",
          src: "img/logo.png",
        },
        items: [
          {
            type: "doc",
            docId: "games/holocure",
            position: "left",
            label: "HoloCure",
          },
          /*{ to: "/blog", label: "Blog", position: "left" },*/
          {
            href: "https://github.com/facebook/docusaurus",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        links: [
          {
            title: "Games",
            items: [
              {
                label: "HoloCure",
                to: "/docs/games/holocure",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/KvqKGQNbhr",
              },
            ],
          },
          /*{
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/facebook/docusaurus",
              },
            ],
          },*/
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Tomat & HoloCure Wiki Contributors`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
