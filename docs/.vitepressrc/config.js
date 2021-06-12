const path = require('path');

module.exports = {
  lang: 'en-US',
  title: 'RUI.next',
  description: 'Vite & React powered static site generator.',
  base: '/rui-next',
  alias:{
    'root': path.resolve(__dirname, '../')
  },

  md:{
	  codeScope: {
		  'rui-next': path.resolve(__dirname, '../components/index.tsx'),
	  },
	  docgen:{
		  
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
        text: 'Release Notes',
        link: 'https://github.com/bluepower/rui-next/releases'
      }
    ],

    sidebar: {
      // '/guide/': getGuideSidebar(),
      // '/local/': getLocalSidebar(),
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
			]
		},
	]
}

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
