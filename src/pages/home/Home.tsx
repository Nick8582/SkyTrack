import { FlightDetails } from '@/components/flight-details/FlightDetails'
import { FlightList } from '@/components/flight-list/FlightList'
import { SkyTrackMap } from '@/components/map/SkyTrackMap'

export function Home() {
	return (
		<div>
			<SkyTrackMap />
			<FlightList />
			<FlightDetails />
		</div>
	)
}
