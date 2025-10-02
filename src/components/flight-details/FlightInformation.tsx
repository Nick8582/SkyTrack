import type { IFlight } from '../../types/flight.types'

export function FlightInformation({ flight }: { flight: IFlight }) {
	return (
		<div className='my-3.5 text-sm'>
			<div className='p-mini-element bg-card mb-1 rounded-tl-xl rounded-tr-xl font-medium'>
				Flight information
			</div>
			<div className='mb-1 grid grid-cols-2 gap-1'>
				<div className='bg-card p-mini-element flex items-center justify-between'>
					<p>{flight.airplane.name}</p>
				</div>
				<div className='bg-card p-mini-element flex items-center justify-between'>
					<div className='flex items-center gap-2'>
						<img
							src={`/flags/${flight?.airline.country.toLowerCase()}.svg`}
							alt={flight?.airline.country}
							width={24}
							height={18}
							className='xs:w-5 xs:h-4 mr-2 inline-block'
						/>
						<span>{flight?.airline.country}</span>
					</div>
				</div>
			</div>
			<div className='mb-1 grid grid-cols-2 gap-1'>
				<div className='bg-card p-mini-element flex items-center justify-between rounded-bl-xl'>
					<p className='text-muted-foreground'>Speed</p>
					<p>870 km/h</p>
				</div>
				<div className='bg-card p-mini-element flex items-center justify-between rounded-br-xl'>
					<p className='text-muted-foreground'>Altitude</p>
					<p>11 300 m</p>
				</div>
			</div>
		</div>
	)
}
