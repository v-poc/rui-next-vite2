const path = require('path');

module.exports = {
  base: '/rui-next/docs',
  lang: 'en-US',
  title: 'RUI.next',
  description: 'The docs+demos of RUI.next',
  alias: {
    'root': path.resolve(__dirname, '../')
  },

  md: {
	  codeScope: {
		  'rui-next': path.resolve(__dirname, '../components/index.ts'),
	  },
	  docgen: {
		  
	  }
  },

  themeConfig: {
    repo: 'v-poc/rui-next',
    docsDir: 'docs',

    editLinks: true,
    editLinkText: 'Suggest changes to this page',
    lastUpdated: 'Last Updated',

    algolia: {
      apiKey: 'c57105e511faa5558547599f120ceeba',
      indexName: 'vitepress'
    },

    nav: [
      {
        text: 'IndexPage',
        link: '/'
      },
      {
        text: 'Changelog',
        link: 'https://github.com/v-poc/rui-next/blob/main/CHANGELOG.md'
      },
      {
        text: 'Links',
        items: [
          {
            text: 'Vite',
            link: 'https://vitejs.dev/'
          },
          {
            text: 'Vitepress',
            link: 'https://vitepress.vuejs.org/'
          },
          {
            text: 'Vitepress-rc',
            link: 'https://github.com/cvnine/vitepress-rc'
          }
        ]
      }
    ],

    sidebar: {
      // '/guide/': getGuideSidebar(),
      // '/config/': getConfigSidebar(),
      '/': getLocalSidebar()
    }
  }
}

function getLocalSidebar(){
	return [
		{
			text: "Layout",
			children: [
				{ text: "Flex", link: "/components/flex/index" },
        { text: "WhiteSpace", link: "/components/white-space/index" },
        { text: "Divider", link: "/components/divider/index" },
			]
		},
    {
      text: "Navigation",
      children: [
        { text: "NavBar", link: "/components/nav-bar/index" },
      ]
    },
		{
			text: "Data-Display",
			children: [
        { text: "Card", link: "/components/card/index" },
        { text: "Badge", link: "/components/badge/index" },
        { text: "Icon", link: "/components/icon/index" },
        { text: "Tag", link: "/components/tag/index" },
			]
		},
    {
      text: "Data-Entry",
      children: [
        { text: "Button", link: "/components/button/index" },
        { text: "Switch", link: "/components/switch/index" },
      ]
    },
		{
			text: "Feedback",
			children: [
				{ text: "ActivityIndicator", link: "/components/activity-indicator/index" },
        { text: "Progress", link: "/components/progress/index" },
			]
		},
		{
			text: "Misc",
			children: [
        { text: "QRCode", link: "/components/qr-code/index" },
        { text: "OnePiece", link: "/components/one-piece/index" },
        { text: "Result", link: "/components/result/index" },
        { text: "Skeleton", link: "/components/skeleton/index" },
        { text: "Chart", link: "/components/chart/index" },
        { text: "Clamp", link: "/components/clamp/index" },
			]
		},
    {
      text: "Hooks",
      children: [
        { text: "useNetwork", link: "/components/_hooks/useNetwork/index" },
        { text: "useFullscreen", link: "/components/_hooks/useFullscreen/index" },
        { text: "useVisibilityChange", link: "/components/_hooks/useVisibilityChange/index" },
        { text: "useClickAway", link: "/components/_hooks/useClickAway/index" },
      ]
    },
	]
}

/*
function getGuideSidebar() {
  return [
    {
      text: 'Introduction',
      children: [
        { text: 'What is VitePress?', link: '/'},
        { text: 'Getting Started', link: '/guide/getting-started' },
        { text: 'Configuration', link: '/guide/configuration' },
        { text: 'Asset Handling', link: '/guide/assets' },
        { text: 'Markdown Extensions', link: '/guide/markdown' },
        { text: 'Deploying', link: '/guide/deploy' }
      ]
    },
    {
      text: 'Advanced',
      children: [
        { text: 'Frontmatter', link: '/guide/frontmatter' },
        { text: 'Global Computed', link: '/guide/global-computed' },
        { text: 'Global Component', link: '/guide/global-component' },
        { text: 'Customization', link: '/guide/customization' },
        {
          text: 'Differences from Vuepress',
          link: '/guide/differences-from-vuepress'
        }
      ]
    }
  ]
}

function getConfigSidebar() {
  return [
    {
      text: 'App Config',
      children: [{ text: 'Basics', link: '/config/basics' }]
    },
    {
      text: 'Theme Config',
      children: [
        { text: 'Homepage', link: '/config/homepage' },
        { text: 'Algolia Search', link: '/config/algolia-search' },
        { text: 'Carbon Ads', link: '/config/carbon-ads' }
      ]
    }
  ]
}
*/
