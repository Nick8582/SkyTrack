import { Link } from 'react-router'

import type { IHeaderMenuItem } from '@/components/header/header-menu.data'

import { cn } from '@/lib/utils'

interface Props {
	item: IHeaderMenuItem
	isActive?: boolean
}

export function HeaderMenuItem({ item, isActive }: Props) {
	return (
		<li>
			<Link
				to={item.href}
				className={cn(
					'text-base transition-opacity hover:opacity-85 sm:text-base',
					isActive ? 'opacity-100' : 'opacity-50'
				)}
			>
				{item.label}
			</Link>
		</li>
	)
}
