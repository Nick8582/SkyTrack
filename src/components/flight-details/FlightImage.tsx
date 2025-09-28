import type { IFlight } from '../../types/flight.types'

export function FlightImage({ flight }: { flight: IFlight }) {
	return (
		<div
			className='flex h-72 w-full items-end'
			style={{
				background: `linear-gradient(to top, ${flight?.colorGradient[0]}, ${flight?.colorGradient[1]})`
			}}
		>
			<img
				src={flight?.airplane.image}
				alt={flight?.airplane.name}
				className='h-auto max-w-full'
			/>
		</div>
	)
}
