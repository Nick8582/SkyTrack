import { FlightDetails } from '../../components/flight-detalis/FlightDetails'
import { FlightList } from '../../components/flight-list/FlightList'

export function Home() {
  return (
    <div>
      <FlightList />
      <FlightDetails />
    </div>
  )
}
