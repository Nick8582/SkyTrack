import { useEffect, useMemo, useState } from 'react'

import { SkeletonLoader } from '@/components/custom-ui/SkeletonLoader'
import { FlightFilters } from '@/components/flight-filters/FlightFilters'

import { FlightCard } from './FlightCard'
import { FLIGHTS } from './flights.data'

export function FlightList() {
	const [isLoadin, setIsLoading] = useState(true)
	const [fromCountry, setFromCountry] = useState<string | null>(null)
	const [currentAirlines, setCurrentAirlines] = useState<string | null>(null)

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false)
		}, 1500)

		return () => clearTimeout(timer)
	}, [])

	const filteredFlights = useMemo(() => {
		return FLIGHTS.filter(flight => {
			if (currentAirlines && flight.airline.name !== currentAirlines) {
				return false
			}
			if (fromCountry && flight.from.country !== fromCountry) {
				return false
			}
			return true
		})
	}, [fromCountry, currentAirlines])

	return (
		<div className='w-sm sm:w-full md:w-xs'>
			<FlightFilters
				fromCountry={fromCountry}
				setFromCountry={setFromCountry}
				currentAirlines={currentAirlines}
				setCurrentAirlines={setCurrentAirlines}
			/>
			<div className='space-y-4'>
				{isLoadin ? (
					<SkeletonLoader count={5} className='mb-4 h-40' />
				) : (
					!!filteredFlights.length &&
					filteredFlights?.map(flight => (
						<FlightCard flight={flight} key={flight.id} />
					))
				)}
			</div>
		</div>
	)
}
