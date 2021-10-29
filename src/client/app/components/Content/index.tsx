import React, { FC } from 'react'
import { MDXProvider } from '@mdx-js/react'
import { Wrap } from './style'
import { API, CodeBlock } from 'vitepress-rc'

export const Content: FC<any> = (props) => {
	return (
		<Wrap>
			<MDXProvider
				components={{
					// @ts-ignore
					API: API,
					pre: (props: any) => <div {...props} />,
					// @ts-ignore
					code: CodeBlock,
				}}
			>
				{props.children}
			</MDXProvider>
		</Wrap>
	)
}
