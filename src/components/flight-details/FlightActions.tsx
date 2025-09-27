import { Route } from 'lucide-react'

import { Ellipsis } from '@/components/animate-ui/icons/ellipsis'
import { MapPin } from '@/components/animate-ui/icons/map-pin'
import { SquareArrowOutUpRight } from '@/components/animate-ui/icons/square-arrow-out-up-right'

interface Props {
  onRoute: () => void
  onFollow: () => void
  onShare: () => void
  onMore: () => void
}

export function FlightActions({ onRoute, onFollow, onShare, onMore }: Props) {
  const size = 22
  return (
    <div>
      <div className="grid grid-cols-4 gap-1">
        <button
          className="flex flex-col items-center gap-2 bg-card px-mini-element py-mini-element transition-colors hover:bg-neutral-800 rounded-tl-2xl rounded-bl-2xl"
          onClick={onRoute}
        >
          <Route size={size} />
          <span>Route</span>
        </button>
        <button
          className="flex flex-col items-center gap-2 bg-card px-mini-element py-mini-element transition-colors hover:bg-neutral-800"
          onClick={onFollow}
        >
          <MapPin animateOnHover size={size} />
          <span>Follow</span>
        </button>
        <button
          className="flex flex-col items-center gap-2 bg-card px-mini-element py-mini-element transition-colors hover:bg-neutral-800"
          onClick={onShare}
        >
          <SquareArrowOutUpRight animateOnHover size={size} />
          <span>Share</span>
        </button>
        <button
          className="flex flex-col items-center gap-2 bg-card px-mini-element py-mini-element transition-colors hover:bg-neutral-800 rounded-tr-2xl rounded-br-2xl"
          onClick={onMore}
        >
          <Ellipsis animateOnHover size={size} />
          <span>More</span>
        </button>
      </div>
    </div>
  )
}
