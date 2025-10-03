import { AnimatePresence, m } from 'framer-motion'

import { useCurrentFlight } from '@/hooks/useCurrentFlight'

import { FlightActions } from './FlightActions'
import { FlightHeader } from './FlightHeader'
import { FlightImage } from './FlightImage'
import { FlightInformation } from './FlightInformation'
import { FlightRoute } from './FlightRoute'
import { FlightSchedule } from './FlightSchedule'
import { FlightStatus } from './flightStatus'

export function FlightDetails() {
	const { flight } = useCurrentFlight()

	if (!flight) {
		return null
	}

	return (
		<AnimatePresence mode='wait'>
			<m.aside
				key={flight.id}
				initial={{ x: '100%', opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
				exit={{ x: '100%', opacity: 0 }}
				transition={{
					type: 'tween',
					duration: 0.4,
					ease: [0.3, 0.4, 0.45, 0.95]
				}}
				className='xs:rounded-lg xs:top-35 xs:inset-2.5 bg-flight-card absolute top-7 right-7 z-10 w-sm overflow-hidden rounded-xl sm:inset-3 sm:top-21 sm:w-auto xl:top-28'
			>
				<FlightHeader flight={flight} />
				<FlightImage flight={flight} />

				<div className='p-3.5'>
					<FlightRoute flight={flight} />
					<FlightStatus flight={flight} />
					<FlightSchedule />

					<FlightInformation flight={flight} />
					<FlightActions
						onFollow={() => {}}
						onMore={() => {}}
						onRoute={() => {}}
						onShare={() => {}}
					/>
				</div>
			</m.aside>
		</AnimatePresence>
	)
}
