import { useSearchParams } from 'react-router'

import { X } from '@/components/animate-ui/icons/x'
import { QUERY_PARAM_FLIGHT } from '@/components/flight-list/flights.constants'

import type { IFlight } from '@/types/flight.types'

export function FlightHeader({ flight }: { flight: IFlight }) {
	const [searchParams, setSearchParams] = useSearchParams()

	return (
		<div className='absolute top-3.5 left-1/2 flex h-max w-11/12 -translate-x-1/2 items-center justify-between rounded-xl rounded-t-xl bg-[#1a1a1a] px-4 py-3'>
			<div>
				<h2 className='text-xl font-medium text-amber-400'>{flight.id}</h2>
				<p className='text-sm text-gray-300'>{flight.airline.name}</p>
			</div>
			<button
				onClick={() => {
					searchParams.delete(QUERY_PARAM_FLIGHT)
					setSearchParams(searchParams)
				}}
				className='rounded-full bg-neutral-700 p-1 text-gray-400 transition-colors hover:text-white'
			>
				<X animateOnHover animateOnTap size={24} />
			</button>
		</div>
	)
}
