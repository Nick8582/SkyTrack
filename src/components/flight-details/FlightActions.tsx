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
		<div className='xs:text-sm'>
			<div className='grid grid-cols-4 gap-1'>
				<button
					className='bg-card p-mini-element xs:rounded-tl-xl xs:rounded-bl-xl flex flex-col items-center gap-2 rounded-tl-2xl rounded-bl-2xl transition-colors hover:bg-neutral-800'
					onClick={onRoute}
				>
					<Route size={size} className='xs:size-5' />
					<span>Route</span>
				</button>
				<button
					className='bg-card p-mini-element flex flex-col items-center gap-2 transition-colors hover:bg-neutral-800'
					onClick={onFollow}
				>
					<MapPin
						animateOnHover
						animateOnTap
						size={size}
						className='xs:size-5'
					/>
					<span>Follow</span>
				</button>
				<button
					className='bg-card p-mini-element flex flex-col items-center gap-2 transition-colors hover:bg-neutral-800'
					onClick={onShare}
				>
					<SquareArrowOutUpRight
						animateOnHover
						animateOnTap
						size={size}
						className='xs:size-5'
					/>
					<span>Share</span>
				</button>
				<button
					className='bg-card p-mini-element xs:rounded-tr-xl xs:rounded-br-xl flex flex-col items-center gap-2 rounded-tr-2xl rounded-br-2xl transition-colors hover:bg-neutral-800'
					onClick={onMore}
				>
					<Ellipsis
						animateOnHover
						animateOnTap
						size={size}
						className='xs:size-5'
					/>
					<span>More</span>
				</button>
			</div>
		</div>
	)
}
