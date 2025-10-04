import { useSearchParams } from 'react-router'

import { ProgressBar } from '@/components/custom-ui/ProgressBar'
import { FlightCardActions } from '@/components/flight-list/actions/FlightCardActions'

import { cn } from '@/lib/utils'

import type { IFlight } from '@/types/flight.types'

import { QUERY_PARAM_FLIGHT } from './flights.constants'

interface Props {
	flight: IFlight
}

export function FlightCard({ flight }: Props) {
	const [searchParams, setSearchParams] = useSearchParams()

	const selectedFlight = searchParams.get(QUERY_PARAM_FLIGHT)

	const isActive = selectedFlight === flight.id

	return (
		<div
			className={cn(
				'group animate-fadeIn relative z-10 w-full rounded-lg p-0.5 shadow-xl transition-colors ease-in',
				isActive
					? 'bg-gradient-to-r from-rose-500 to-orange-400'
					: 'bg-flight-card'
			)}
		>
			<FlightCardActions flightId={flight.id} />
			<button
				onClick={() => {
					setSearchParams({ [QUERY_PARAM_FLIGHT]: flight.id })
				}}
				className={cn('bg-flight-card block h-full w-full rounded-lg p-4')}
			>
				<div className='mb-7 flex items-center justify-between'>
					<div className='flex items-center gap-3'>
						<img
							src={flight.logo}
							alt={`${flight.airline.name} logo`}
							width={40}
							height={40}
							className='rounded-full bg-white'
						/>
						<span>{flight.id}</span>
					</div>
					<div>
						<span className='bg-card rounded-xl px-2 py-1'>
							{flight.aircraftReg}
						</span>
					</div>
				</div>
				<div className='grid grid-cols-[1fr_5fr_1fr] items-end gap-4'>
					<div className='space-y-0.5 text-left'>
						<div>{flight.from.city}</div>
						<div className='text-3xl font-semibold'>{flight.from.code}</div>
					</div>

					<div className='mb-4.5'>
						<ProgressBar percentage={flight.progress} />
					</div>

					<div className='space-y-0.5 text-right'>
						<div>{flight.to.city}</div>
						<div className='text-3xl font-semibold'>{flight.to.code}</div>
					</div>
				</div>
			</button>
		</div>
	)
}
