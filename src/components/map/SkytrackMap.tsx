import type { FeatureCollection } from 'geojson'
import type { LayerProps } from 'react-map-gl/maplibre'
import Map, { Layer, Source } from 'react-map-gl/maplibre'

import 'maplibre-gl/dist/maplibre-gl.css'

const geojson: FeatureCollection = {
	type: 'FeatureCollection',
	features: [
		{
			type: 'Feature',
			geometry: {
				type: 'Point',
				coordinates: [0, 0]
			},
			properties: { title: '915 Front Street, San Francisco' }
		}
	]
}

const layerStyle: LayerProps = {
	id: 'point',
	type: 'circle',
	paint: {
		'circle-radius': 10,
		'circle-color': '#007cdf'
	}
}

export function SkyTrackMap() {
	return (
		<Map
			initialViewState={{ longitude: 32.45, latitude: 37.85, zoom: 7 }}
			style={{
				position: 'absolute',
				top: 0,
				left: 0,
				right: 0,
				bottom: 0,
				zIndex: 0
			}}
			mapStyle={
				'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json'
			}
		>
			<Source type='geojson' data={geojson}>
				<Layer {...layerStyle} />
			</Source>
		</Map>
	)
}
