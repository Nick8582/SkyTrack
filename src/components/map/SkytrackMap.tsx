import { useEffect, useMemo, useRef } from 'react'

import { Dot, Plane } from 'lucide-react'
import type { MapRef } from 'react-map-gl/maplibre'
import Map, { Layer, Marker, Source } from 'react-map-gl/maplibre'

import { FLIGHTS } from '@/components/flight-list/flights.data'
import { dashedStyle, solidStyle } from '@/components/map/sky-track-map.utils'

import { useCurrentFlight } from '@/hooks/useCurrentFlight'

import { useTheme } from '@/providers/theme/useTheme'

import 'maplibre-gl/dist/maplibre-gl.css'

export function SkyTrackMap() {
	const { flight } = useCurrentFlight()

	const currentOtherFlightCoordinates = useMemo(() => {
		return FLIGHTS.filter(f => f.id !== flight?.id).map(
			f => f.currentLocation.coordinates
		)
	}, [flight])

	const ref = useRef<MapRef>(null)

	useEffect(() => {
		if (ref.current && flight) {
			ref.current.flyTo({
				center: [
					flight.currentLocation.coordinates[1],
					flight.currentLocation.coordinates[0]
				],
				duration: 2000
			})
		}
	}, [flight])

	const [solidCoords, dashedCoords] = useMemo(() => {
		if (!flight?.from || !flight.to || !flight.currentLocation) return [[], []]

		const all = [
			[flight.from.coordinates[1], flight.from.coordinates[0]],
			[
				flight.currentLocation.coordinates[1],
				flight.currentLocation.coordinates[0]
			],
			[flight.to.coordinates[1], flight.to.coordinates[0]]
		]

		return [all.slice(0, 2), all.slice(1)]
	}, [flight])

	const solidGeoJson: GeoJSON.FeatureCollection = {
		type: 'FeatureCollection',
		features: [
			{
				type: 'Feature',
				properties: {},
				geometry: {
					type: 'LineString',
					coordinates: solidCoords
				}
			}
		]
	}

	const dashedGeoJson: GeoJSON.FeatureCollection = {
		type: 'FeatureCollection',
		features: [
			{
				type: 'Feature',
				properties: {},
				geometry: {
					type: 'LineString',
					coordinates: dashedCoords
				}
			}
		]
	}

	const { theme } = useTheme()

	return (
		<Map
			ref={ref}
			initialViewState={{
				latitude: flight?.currentLocation.coordinates[0] || 37.8,
				longitude: flight?.currentLocation.coordinates[1] || -122.4,
				zoom: 5,
				bearing: 0,
				pitch: 0
			}}
			style={{
				position: 'absolute',
				top: 0,
				left: 0,
				right: 0,
				bottom: 0,
				zIndex: 0
			}}
			mapStyle={
				theme === 'dark'
					? 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json'
					: 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json'
			}
		>
			{solidCoords.length > 1 && (
				<Source id='route-solid' type='geojson' data={solidGeoJson}>
					<Layer {...solidStyle(theme)} />
				</Source>
			)}

			{dashedCoords.length > 1 && (
				<Source id='route-dashed' type='geojson' data={dashedGeoJson}>
					<Layer {...dashedStyle(theme)} />
				</Source>
			)}

			{flight?.currentLocation.coordinates.length &&
				flight.currentLocation.coordinates.length > 1 && (
					<Marker
						latitude={flight.currentLocation.coordinates[0]}
						longitude={flight.currentLocation.coordinates[1]}
					>
						<Plane strokeWidth={0} size={30} className='fill-foreground' />
					</Marker>
				)}

			{flight?.from.coordinates.length &&
				flight.from.coordinates.length > 1 && (
					<Marker
						latitude={flight.from.coordinates[0]}
						longitude={flight.from.coordinates[1]}
					>
						<Dot size={30} className='text-rose-500' />
					</Marker>
				)}
			{flight?.to.coordinates.length && flight.to.coordinates.length > 1 && (
				<Marker
					latitude={flight.to.coordinates[0]}
					longitude={flight.to.coordinates[1]}
				>
					<Dot size={30} className='text-amber-400' />
				</Marker>
			)}

			{!!currentOtherFlightCoordinates.length &&
				currentOtherFlightCoordinates.map(flight => (
					<Marker
						key={flight.join(',')}
						latitude={flight[0]}
						longitude={flight[1]}
					>
						<Plane
							strokeWidth={0}
							size={20}
							className='fill-foreground opacity-30'
						/>
					</Marker>
				))}
		</Map>
	)
}
