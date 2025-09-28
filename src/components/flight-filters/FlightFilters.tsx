import { FLIGHTS } from '@/components/flight-list/flights.data'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '@/components/ui/select'

const fromCountries = [...new Set(FLIGHTS.map(flight => flight.from.country))]

interface Props {
	fromCountry: string | null
	setFromCountry: (country: string | null) => void
}

export function FlightFilters({ fromCountry, setFromCountry }: Props) {
	return (
		<div className='mb-4 ml-1'>
			<Select
				onValueChange={value => setFromCountry(value === 'all' ? null : value)}
				defaultValue={fromCountry || undefined}
			>
				<SelectTrigger className='w-[180px]'>
					<SelectValue placeholder='Choose from' />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value={'all'}>All</SelectItem>
					{fromCountries.map(country => (
						<SelectItem value={country} key={country}>
							{country}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</div>
	)
}
