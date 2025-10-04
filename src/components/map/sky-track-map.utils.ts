import type { LayerProps } from 'react-map-gl/maplibre'

export const solidStyle: LayerProps = {
	id: 'route-solid',
	type: 'line',
	layout: { 'line-cap': 'round', 'line-join': 'round' },
	paint: {
		'line-color': '#73433F',
		'line-width': 4,
		'line-opacity': 1
	}
}

export const dashedStyle: LayerProps = {
	id: 'route-dashed',
	type: 'line',
	layout: { 'line-cap': 'round', 'line-join': 'round' },
	paint: {
		'line-color': '#fff',
		'line-width': 2,
		'line-dasharray': [4, 4],
		'line-opacity': 0.4
	}
}
