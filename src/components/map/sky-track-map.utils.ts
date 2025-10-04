import type { LayerProps } from 'react-map-gl/maplibre'

import type { ThemeType } from '@/providers/theme/theme.context'

export const solidStyle = (theme: ThemeType): LayerProps => ({
	id: 'route-solid',
	type: 'line',
	layout: { 'line-cap': 'round', 'line-join': 'round' },
	paint: {
		'line-color': theme === 'dark' ? '#73433F' : '#E8B4B0',
		'line-width': 4,
		'line-opacity': 1
	}
})

export const dashedStyle = (theme: ThemeType): LayerProps => ({
	id: 'route-dashed',
	type: 'line',
	layout: { 'line-cap': 'round', 'line-join': 'round' },
	paint: {
		'line-color': theme === 'dark' ? '#fff' : '#111',
		'line-width': 2,
		'line-dasharray': [4, 4],
		'line-opacity': 0.4
	}
})
