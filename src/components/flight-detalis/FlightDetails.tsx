import { useMemo } from 'react'
import { useSearchParams } from 'react-router'
import { QUERY_PARAM_FLIGHT } from '../flight-list/flights.constants'
import { FLIGHTS } from '../flight-list/flights.data'

export function FlightDetails() {
  const [searchParams] = useSearchParams()

  const selectedFlight = searchParams.get(QUERY_PARAM_FLIGHT)

  const flight = useMemo(
    () => FLIGHTS.find(flight => flight.airline === selectedFlight),
    [selectedFlight],
  )

  return (
    <aside
      className='absolute w-sm top-7 right-7 g-full rounded-xl bg-[#101010]'
      style={{ height: 'calc(100% - 56px)' }}
    >
      {flight?.airline}
      <div
        className='w-full h-60'
        style={{
          background: `linear-gradient(to top, ${flight?.colorGradient[0]}, ${flight?.colorGradient[1]})`,
        }}
      >
        <img
          src={flight?.airplane.image}
          alt={flight?.airplane.name}
          className='max-w-full h-auto'
        />
      </div>
    </aside>
  )
}
