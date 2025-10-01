import { FilterSearchSelect } from '@/components/flight-filters/FilterSearchSelect'
import { FLIGHTS } from '@/components/flight-list/flights.data'

const fromCountries = [
	...new Set(FLIGHTS.map(flight => flight.from.country))
].filter(Boolean)
const airlines = [...new Set(FLIGHTS.map(flight => flight.airline.name))]

interface Props {
	fromCountry: string | null
	setFromCountry: (country: string | null) => void
	currentAirlines: string | null
	setCurrentAirlines: (airline: string | null) => void
}

export function FlightFilters({
	fromCountry,
	setFromCountry,
	currentAirlines,
	setCurrentAirlines
}: Props) {
	return (
		<div className='mb-4 ml-1 grid grid-cols-2 gap-2'>
			<FilterSearchSelect
				data={fromCountries}
				value={fromCountry}
				onChange={setFromCountry}
				entityText='country'
			/>
			<FilterSearchSelect
				data={airlines}
				value={currentAirlines}
				onChange={setCurrentAirlines}
				entityText='airline'
			/>
		</div>
	)
}
