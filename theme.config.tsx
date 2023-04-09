import cn from 'clsx'
import {FC, ReactNode, React} from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

function renderComponent<T>(
  ComponentOrNode: FC<T> | ReactNode,
  props?: T
) {
  if (!ComponentOrNode) return null
  if (typeof ComponentOrNode !== 'function') return ComponentOrNode
  return <ComponentOrNode {...props} />
}

const config: DocsThemeConfig = {
  logo: <span>Mixpanel Documentation</span>,
  project: {
    link: 'https://github.com/ranic/documentation-starter-kit'
  },
  docsRepositoryBase: 'https://github.com/ranic/documentation-starter-kit/tree/main',
  sidebar: {
    toggleButton: true,
    defaultMenuCollapseLevel: 1,
    titleComponent({ title, type, route }) {
      if (type !== 'separator' && route.match(/\//g).length == 1) {
      	return (
		    <li
		      className={cn(
		        '[word-break:break-word]',
		        title
		          ? 'nx-mt-5 nx-mb-2 nx-px-2 nx-py-1.5 nx-text-sm nx-font-semibold nx-text-gray-900 first:nx-mt-0 dark:nx-text-gray-100'
		          : 'nx-my-4'
		      )}
		    >
		      {title ? (
		        renderComponent(config.sidebar.titleComponent, {
		          title,
		          type: 'separator',
		          route: ''
		        })
		      ) : (
		        <hr className="nx-mx-2 nx-border-t nx-border-gray-200 dark:nx-border-primary-100/10" />
		      )}
		    </li>
		  )
      }
      return <>{title}</>
	},
  }
}

export default config
