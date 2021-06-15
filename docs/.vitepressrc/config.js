const path = require('path');

module.exports = {
  base: '/rui-next/docs',
  lang: 'en-US',
  title: 'RUI.next',
  description: 'The demo+docs of RUI.next',
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
    repo: 'bluepower/rui-next',
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
        link: 'https://github.com/bluepower/rui-next/blob/main/CHANGELOG.md'
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
				{ text: "Flex", link: "/components/flex/demo/index" },
        { text: "WhiteSpace", link: "/components/white-space/demo/index" },
			]
		},
		{
			text: "Data-Display",
			children: [
        { text: "Card", link: "/components/card/demo/index" },
			]
		},
		{
			text: "Feedback",
			children: [
				{ text: "ActivityIndicator", link: "/components/activity-indicator/demo/index" },
        { text: "Progress", link: "/components/progress/demo/index" },
			]
		},
		{
			text: "Misc",
			children: [
        { text: "QRCode", link: "/components/qr-code/demo/index" },
        { text: "OnePiece", link: "/components/one-piece/demo/index" },
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
