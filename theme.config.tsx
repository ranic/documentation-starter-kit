import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Mixpanel Documentation</span>,
  project: {
    link: 'https://github.com/ranic/documentation-starter-kit',
  },
  docsRepositoryBase: 'https://github.com/ranic/documentation-starter-kit/tree/main',
  sidebar: {
    toggleButton: true,
    defaultMenuCollapseLevel: 1,
    titleComponent({ title, type, route }) {
      return <> {route} </>
    }
  },
}

export default config
