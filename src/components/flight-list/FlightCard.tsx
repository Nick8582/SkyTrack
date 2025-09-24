import type { IFlight } from '../../types/flight.types'

interface Props {
  flight: IFlight
}

export function FlightCard({ flight }: Props) {
  return (
    <div className='bg-neutral-900 rounded-lg p-5'>
      <div className='flex justify-between items-center mb-7'>
        <div className='flex items-center gap-3'>
          <img
            src={flight.logo}
            alt={`${flight.airline} logo`}
            width={40}
            height={40}
            className='rounded-full bg-white'
          />
          <span>{flight.airline}</span>
        </div>
        <div>
          <span className='bg-neutral-800 rounded-xl px-2 py-1'>{flight.aircraftReg}</span>
        </div>
      </div>
      <div className='flex justify-between items-center'>
        <div className='space-y-0.5'>
          <div>{flight.fromCity}</div>
          <div className='font-semibold text-3xl'>{flight.fromCode}</div>
        </div>

        <div></div>

        <div className='space-y-0.5'>
          <div>{flight.toCity}</div>
          <div className='font-semibold text-3xl'>{flight.toCode}</div>
        </div>
      </div>
    </div>
  )
}
