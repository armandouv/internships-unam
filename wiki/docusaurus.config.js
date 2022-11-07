// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Internships UNAM by CPCFI',
  tagline: '¿Cómo obtener una pasantía en FAANG?',
  url: 'https://armandouv.github.io/',
  baseUrl: '/internships-unam/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'armandouv', // Usually your GitHub org/user name.
  projectName: 'internships-unam', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'wiki',
          routeBasePath: 'wiki',
          sidebarPath: require.resolve('./sidebars.js')
        },
        blog: {
          showReadingTime: true
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Internships UNAM',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Wiki',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {to: '/cursos', label: 'Cursos', position: 'left'}
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Recursos',
            items: [
              {
                label: 'Wiki',
                to: '/wiki/intro'
              },
              {
                label: 'Cursos',
                to: '/cursos',
              },
              {
                label: 'Blog',
                to: '/blog',
              }
            ],
          },
          {
            title: 'Contacto',
            items: [
              {
                label: 'Instagram',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Facebook',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Correo electrónico',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              }
            ],
          },
          {
            title: 'Más links',
            items: [
              {
                label: 'Discord (sólo estudiantes de la UNAM)',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'CPCFI GitHub',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              }
            ],
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Internships UNAM by CPCFI`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
