import type { IFlight } from '../../types/flight.types'

export function FlightImage({ flight }: { flight: IFlight }) {
  return (
    <div
      className="w-full flex items-end h-72"
      style={{
        background: `linear-gradient(to top, ${flight?.colorGradient[0]}, ${flight?.colorGradient[1]})`,
      }}
    >
      <img src={flight?.airplane.image} alt={flight?.airplane.name} className="max-w-full h-auto" />
    </div>
  )
}
