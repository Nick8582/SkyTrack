import type { IFlight } from '@/types/flight.types'

const getCurrentCoordinates = (
	from: [number, number],
	to: [number, number],
	progressPercent: number
): [number, number] => {
	const ratio = progressPercent / 100
	const lat = from[0] + (to[0] - from[0]) * ratio
	const lng = from[1] + (to[1] - from[1]) * ratio
	return [lat, lng]
}

export const FLIGHTS: IFlight[] = [
	{
		id: 'TK143',
		logo: '/logos/turkish.svg',
		aircraftReg: 'TC-JFP',
		airline: { name: 'Turkish Airline', country: 'Turkey' },
		from: {
			city: 'Sofia',
			country: 'Bulgaria',
			countryCode: 'BG',
			timezone: 'UTC +3',
			code: 'SOF',
			coordinates: [42.697708, 23.321867]
		},
		to: {
			city: 'Beijing',
			country: 'China',
			countryCode: 'CN',
			timezone: 'UTC +8',
			code: 'PEK',
			coordinates: [39.904211, 116.407394]
		},
		airplane: {
			image: '/planes/turkish.png',
			name: 'Airbus A330'
		},
		colorGradient: ['#ffa6a6', '#D43D3D'],
		route: {
			speed: 870,
			altitude: 10600
		},
		progress: 75,
		currentLocation: {
			coordinates: getCurrentCoordinates(
				[42.697708, 23.321867],
				[39.904211, 116.407394],
				75
			)
		}
	},
	{
		id: 'RN1782',
		logo: '/logos/ryanair.svg',
		aircraftReg: 'D-AISP',
		airline: { name: 'Ryanair', country: 'Ireland' },
		from: {
			city: 'Dublin',
			country: 'Ireland',
			countryCode: 'IE',
			timezone: 'UTC +1',
			code: 'DUB',
			coordinates: [53.3498, -6.2603]
		},
		to: {
			city: 'Larnaca',
			country: 'Cyprus',
			countryCode: 'CY',
			timezone: 'UTC +3',
			code: 'LCA',
			coordinates: [35.1266, 33.9392]
		},
		airplane: {
			image: '/planes/ryanair.png',
			name: 'Boeing 737-800'
		},
		colorGradient: ['#A1C6E1', '#88B5E0'],
		route: {
			speed: 840,
			altitude: 11200
		},
		progress: 50,
		currentLocation: {
			coordinates: getCurrentCoordinates(
				[53.3498, -6.2603],
				[35.1266, 33.9392],
				50
			)
		}
	},
	{
		id: 'S7124',
		logo: '/logos/s7.svg',
		aircraftReg: 'RA-73415',
		airline: { name: 'S7 Airlines', country: 'Russia' },
		from: {
			city: 'Nice',
			country: 'France',
			countryCode: 'FR',
			timezone: 'UTC +2',
			code: 'NCE',
			coordinates: [43.7037, 7.2669]
		},
		to: {
			city: 'Tbilisi',
			country: 'Georgia',
			countryCode: 'GE',
			timezone: 'UTC +4',
			code: 'TBS',
			coordinates: [41.1579, 44.4995]
		},
		airplane: {
			image: '/planes/s7.png',
			name: 'Airbus A320neo'
		},
		colorGradient: ['#d9ffaa', '#aeea66'],
		route: {
			speed: 860,
			altitude: 10900
		},
		progress: 65,
		currentLocation: {
			coordinates: getCurrentCoordinates(
				[43.7037, 7.2669],
				[41.1579, 44.4995],
				65
			)
		}
	},
	{
		id: 'LX318',
		logo: '/logos/swiss.svg',
		aircraftReg: 'HB-JHK',
		airline: { name: 'SWISS International Air Lines', country: 'Switzerland' },
		from: {
			city: 'Porto',
			country: 'Portugal',
			countryCode: 'PT',
			timezone: 'UTC +1',
			code: 'OPO',
			coordinates: [41.1579, 44.4995]
		},
		to: {
			city: 'Baku',
			country: 'Azerbaijan',
			countryCode: 'AZ',
			timezone: 'UTC +4',
			code: 'GYD',
			coordinates: [40.4093, 49.8671]
		},
		airplane: {
			image: '/planes/swiss.png',
			name: 'Airbus A220-300'
		},
		colorGradient: ['#e6e6ff', '#a8b4ff'],
		route: {
			speed: 830,
			altitude: 10700
		},
		progress: 85,
		currentLocation: {
			coordinates: getCurrentCoordinates(
				[41.1579, 44.4995],
				[40.4093, 49.8671],
				85
			)
		}
	},
	{
		id: 'LH401',
		logo: '/logos/lufthansa.svg',
		aircraftReg: 'D-AIXD',
		airline: { name: 'Lufthansa', country: 'Germany' },
		from: {
			city: 'Burgas',
			country: 'Bulgaria',
			countryCode: 'BG',
			timezone: 'UTC +3',
			code: 'BOJ',
			coordinates: [42.7339, 27.9156]
		},
		to: {
			city: 'Muscat',
			country: 'Oman',
			countryCode: 'OM',
			timezone: 'UTC +4',
			code: 'MCT',
			coordinates: [23.5833, 58.3833]
		},
		airplane: {
			image: '/planes/lufthansa.png',
			name: 'Airbus A350-900'
		},
		colorGradient: ['#e5f2ff', '#9dd2f9'],
		route: {
			speed: 890,
			altitude: 11300
		},
		progress: 48,
		currentLocation: {
			coordinates: getCurrentCoordinates(
				[42.7339, 27.9156],
				[23.5833, 58.3833],
				48
			)
		}
	}
]
