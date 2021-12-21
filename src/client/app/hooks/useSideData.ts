import serialized from '@virtual-module/siteData'
import { useEffect, useState } from 'react'
import type { SiteData } from '@vitepress-rc/types'

export function useSideData() {
	const [siteData, setSiteData] = useState<SiteData>(JSON.parse(serialized))
	useEffect(() => { // @ts-ignore
		if (import.meta.hot) { // @ts-ignore
			import.meta.hot!.accept('@virtual-module/siteData', (val) => {
				setSiteData(JSON.parse(val))
			})
		}
	}, [])

	return siteData
}
