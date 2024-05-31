import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/x-template-doc/',
  head:[['link', { rel: 'icon', href: './public/logo.svg'}]],
  title: "x-template",
  description: "A VitePress Site",
  themeConfig: {
    logo: '/public/logo.svg',
    outlineTitle:'目录',
    
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '开始', link: '/start' }
    ],
    sidebar: [
      {
        text: '概述',
        items: [
          { text: '前言', link: '/preface' },
          { text: '快速开始', link: '/start' }
        ]
      },
      {
        text: '组件',
        items: [
          { text: 'x-form', link: '/components/x-form' },
          { text: 'x-table', link: '/components/x-table' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Sumca/x-template/tree/develop' }
    ],
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换'
            }
          }
        }
      }
    },
    // footer: {
    //   message: 'Released under the MIT License.',
    //   copyright: 'Copyright © 2019-present Evan You'
    // }
  }
})
