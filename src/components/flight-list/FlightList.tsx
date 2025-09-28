import { useMemo, useState } from 'react'

import { FlightFilters } from '@/components/flight-filters/FlightFilters'

import { FlightCard } from './FlightCard'
import { FLIGHTS } from './flights.data'

export function FlightList() {
	const [fromCountry, setFromCountry] = useState<string | null>(null)

	const filteredFlights = useMemo(() => {
		if (!fromCountry) return FLIGHTS
		return FLIGHTS.filter(flight => flight.from.country === fromCountry)
	}, [fromCountry])

	return (
		<div className='w-sm'>
			<FlightFilters
				fromCountry={fromCountry}
				setFromCountry={setFromCountry}
			/>
			<div className='space-y-4'>
				{filteredFlights?.map(flight => (
					<FlightCard flight={flight} key={flight.id} />
				))}
			</div>
		</div>
	)
}
