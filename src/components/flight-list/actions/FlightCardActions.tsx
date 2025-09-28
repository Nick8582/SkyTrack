import { useCallback } from 'react'

import { Heart } from '@/components/animate-ui/icons/heart'
import { Button } from '@/components/ui/button'

import { useAppDispatch } from '@/hooks/useAppDispatch'
import { useAppSelector } from '@/hooks/useAppSelector'

import { cn } from '@/lib/utils'

import {
	addFavorites,
	removeFavorites
} from '@/store/favorites/favorites.slice'

interface Props {
	flightId: string
}

export function FlightCardActions({ flightId }: Props) {
	const dispatch = useAppDispatch()
	const favorites = useAppSelector(state => state.favorites)
	const isFavorites = favorites.includes(flightId)

	const handleToggleFavorite = useCallback(() => {
		if (isFavorites) {
			dispatch(removeFavorites(flightId))
		} else {
			dispatch(addFavorites(flightId))
		}
	}, [dispatch, flightId, isFavorites])

	return (
		<div
			className={cn(
				'absolute top-0.5 right-1 z-50 flex h-full origin-top-right scale-0 flex-col gap-2 px-3 opacity-0 transition-all duration-500 group-hover:-right-13.5 group-hover:scale-100 group-hover:opacity-100'
			)}
		>
			<Button variant={'ghost'} size={'icon'} onClick={handleToggleFavorite}>
				<Heart
					fill={isFavorites ? 'var(--foreground)' : 'none'}
					animateOnHover
					className={'size-5.5'}
				/>
			</Button>
		</div>
	)
}
