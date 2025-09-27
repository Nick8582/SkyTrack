import { FlightCard } from './FlightCard'
import { FLIGHTS } from './flights.data'

export function FlightList() {
  return (
    <div className="w-sm space-y-4">
      {FLIGHTS.map(flight => (
        <FlightCard flight={flight} key={flight.id} />
      ))}
    </div>
  )
}
